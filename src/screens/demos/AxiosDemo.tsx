import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import {
  fetchPostsWithAxios,
  AxiosPost,
} from '@services/axiosDemo';

export default function AxiosDemo() {
  const [posts, setPosts] = useState<AxiosPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPostsWithAxios();

        setPosts(data);
      } catch (e) {
        setError('Không tải được dữ liệu');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Đang tải...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Axios Demo
      </Text>

      {posts.map(post => (
        <View key={post.id} style={styles.card}>
          <Text style={styles.postTitle}>
            {post.title}
          </Text>

          <Text>{post.body}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },

  card: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },

  postTitle: {
    fontWeight: '700',
    marginBottom: 6,
  },
});