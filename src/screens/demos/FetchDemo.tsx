import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function FetchDemo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=5',
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data: Post[] = await response.json();

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

        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Dữ liệu từ API
      </Text>

      {posts.map(post => (
        <View key={post.id} style={styles.card}>
          <Text style={styles.postTitle}>
            {post.title}
          </Text>

          <Text>
            {post.body}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
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
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },

  postTitle: {
    fontWeight: '700',
    marginBottom: 6,
  },

  error: {
    color: 'red',
  },
});