import React, {memo, useCallback, useState} from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

type ChildProps = {
  onPress: () => void;
};

const ChildButton = memo(function ChildButton({
  onPress,
}: ChildProps) {
  console.log('ChildButton render');

  return (
    <Pressable
      style={styles.childButton}
      onPress={onPress}>
      <Text style={styles.buttonText}>
        Child tăng
      </Text>
    </Pressable>
  );
});

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const handleChildPress = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        useCallback Demo
      </Text>

      <Text style={styles.text}>
        Count: {count}
      </Text>

      <Text style={styles.text}>
        Other: {other}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => setOther(prev => prev + 1)}>
        <Text style={styles.buttonText}>
          Tăng Other
        </Text>
      </Pressable>

      <ChildButton
        onPress={handleChildPress}
      />
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
    fontWeight: '800',
    marginBottom: 20,
  },

  text: {
    fontSize: 18,
    marginBottom: 8,
  },

  button: {
    marginTop: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#333333',
  },

  childButton: {
    marginTop: 16,
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