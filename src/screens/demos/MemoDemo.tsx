import React, {memo, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

type ChildProps = {
  name: string;
};

const Child = memo(function Child({name}: ChildProps) {
  console.log('Child render');

  return (
    <View style={styles.child}>
      <Text>Child: {name}</Text>
    </View>
  );
});

export default function MemoDemo() {
  const [count, setCount] = useState(0);

  console.log('Parent render');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        React.memo Demo
      </Text>

      <Text style={styles.count}>
        Count: {count}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => setCount(prev => prev + 1)}>
        <Text style={styles.buttonText}>
          Tăng
        </Text>
      </Pressable>

      <Child name="ShopAI" />
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
    fontSize: 24,
    marginBottom: 16,
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

  child: {
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
  },
});