import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ClosureTrapDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Closure Trap
      </Text>

      <Text style={styles.count}>
        {count}
      </Text>
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
    fontSize: 40,
    fontWeight: '800',
  },
});