import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

type ProductCardProps = {
  name: string;
  price: number;
};

function ProductCard({name, price}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.price}>
        {price.toLocaleString('vi-VN')} đ
      </Text>

      <Text style={styles.quantity}>
        Số lượng: {quantity}
      </Text>

      <View style={styles.actions}>
        <Pressable
          style={styles.button}
          onPress={() =>
            setQuantity(prev => Math.max(1, prev - 1))
          }>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() =>
            setQuantity(prev => prev + 1)
          }>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function ProductCardDemo() {
  return (
    <View style={styles.container}>
      <ProductCard
        name="iPhone 15"
        price={25000000}
      />

      <ProductCard
        name="Samsung Galaxy S25"
        price={22000000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },

  card: {
    padding: 20,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: '700',
  },

  price: {
    marginTop: 8,
    fontSize: 16,
  },

  quantity: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  button: {
    width: 45,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FF4D4F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
});