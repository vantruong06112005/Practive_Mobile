import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import useCounter from '@hooks/useCounter';

export default function CustomHookDemo() {
  const {
    count,
    increase,
    decrease,
    reset,
  } = useCounter(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Custom Hook Demo
      </Text>

      <Text style={styles.count}>
        {count}
      </Text>

      <View style={styles.actions}>
        <Pressable
          style={styles.button}
          onPress={decrease}>
          <Text style={styles.buttonText}>−</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={reset}>
          <Text style={styles.buttonText}>
            Reset
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={increase}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
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
    fontWeight: '700',
    marginBottom: 20,
  },

  count: {
    fontSize: 42,
    fontWeight: '800',
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },

  button: {
    minWidth: 60,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#FF4D4F',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18,
  },
});