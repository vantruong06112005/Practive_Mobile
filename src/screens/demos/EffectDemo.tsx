import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count thay đổi:', count);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Count: {count}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => setCount(prev => prev + 1)}>
        <Text style={styles.buttonText}>
          Tăng
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#FF4D4F',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});