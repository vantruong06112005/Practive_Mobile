import React, {useMemo, useState} from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('iphone');

  const products = [
    'iPhone 15',
    'Samsung Galaxy S25',
    'Xiaomi 15',
    'Google Pixel 9',
  ];

  const filteredProducts = useMemo(() => {
    console.log('Tính toán filteredProducts');

    return products.filter(product =>
      product.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        useMemo Demo
      </Text>

      <Text style={styles.text}>
        Keyword: {keyword}
      </Text>

      <Text style={styles.text}>
        Kết quả: {filteredProducts.length}
      </Text>

      {filteredProducts.map(product => (
        <Text key={product} style={styles.product}>
          {product}
        </Text>
      ))}

      <Pressable
        style={styles.button}
        onPress={() => setCount(prev => prev + 1)}>
        <Text style={styles.buttonText}>
          Count: {count}
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => setKeyword('samsung')}>
        <Text style={styles.buttonText}>
          Tìm Samsung
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 16,
  },

  text: {
    fontSize: 16,
    marginBottom: 8,
  },

  product: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 6,
    borderRadius: 8,
  },

  button: {
    marginTop: 12,
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#FF4D4F',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});