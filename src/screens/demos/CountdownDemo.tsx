import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useCountdown} from '@hooks/useCountdown';

export default function CountdownDemo() {
  const {timeLeft, isFinished} = useCountdown(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Countdown Demo
      </Text>

      {isFinished ? (
        <Text style={styles.finished}>
          Đã hết thời gian!
        </Text>
      ) : (
        <Text style={styles.count}>
          Còn lại: {timeLeft}s
        </Text>
      )}
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
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },

  count: {
    fontSize: 32,
    fontWeight: '800',
  },

  finished: {
    fontSize: 22,
    fontWeight: '700',
  },
});