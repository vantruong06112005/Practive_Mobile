import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ProductInfoProps = {
  name: string;
  price: number;
};

export default function ProductInfo({
  name,
  price,
}: ProductInfoProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>
        {price.toLocaleString('vi-VN')} đ
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
  },

  price: {
    marginTop: 6,
    fontSize: 16,
  },
});