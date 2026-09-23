import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function EffectCleanupDemo() {
  const [count, setCount] = useState(0);

  const aliveRef = useRef(true);

  useEffect(() => {
    aliveRef.current = true;

    const timer = setTimeout(() => {
      if (aliveRef.current) {
        setCount(100);
      }
    }, 3000);

    return () => {
      aliveRef.current = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Effect Cleanup Demo
      </Text>

      <Text style={styles.count}>
        Count: {count}
      </Text>

      <Text style={styles.info}>
        Sau 3 giây count sẽ thành 100
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
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },

  count: {
    fontSize: 30,
    fontWeight: '800',
  },

  info: {
    marginTop: 10,
    color: '#777',
  },

  button: {
    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#FF4D4F',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});