import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import {
  CartProvider,
  useCart,
} from '@contexts/CartContext';

function CartContent() {
  const {state, dispatch} = useCart();

  const totalQuantity = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ShopAI Cart
      </Text>

      <Text style={styles.summary}>
        Tổng sản phẩm: {totalQuantity}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          dispatch({
            type: 'ADD',
            payload: {
              id: 1,
              name: 'iPhone 15',
              price: 25000000,
            },
          })
        }>
        <Text style={styles.buttonText}>
          + Thêm iPhone 15
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() =>
          dispatch({
            type: 'ADD',
            payload: {
              id: 2,
              name: 'Samsung Galaxy S25',
              price: 22000000,
            },
          })
        }>
        <Text style={styles.buttonText}>
          + Thêm Samsung S25
        </Text>
      </Pressable>

      {state.items.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text>
            {item.price.toLocaleString('vi-VN')} đ
          </Text>

          <Text>
            Số lượng: {item.quantity}
          </Text>

          <View style={styles.actions}>
            <Pressable
              onPress={() =>
                dispatch({
                  type: 'DECREASE',
                  payload: item.id,
                })
              }>
              <Text style={styles.control}>
                −
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                dispatch({
                  type: 'INCREASE',
                  payload: item.id,
                })
              }>
              <Text style={styles.control}>
                +
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                dispatch({
                  type: 'REMOVE',
                  payload: item.id,
                })
              }>
              <Text style={styles.remove}>
                Xóa
              </Text>
            </Pressable>
          </View>
        </View>
      ))}

      {state.items.length > 0 && (
        <Pressable
          style={styles.clearButton}
          onPress={() =>
            dispatch({type: 'CLEAR'})
          }>
          <Text style={styles.buttonText}>
            Xóa giỏ hàng
          </Text>
        </Pressable>
      )}
    </View>
  );
}

export default function CartDemo() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
  },

  summary: {
    marginTop: 8,
    marginBottom: 16,
  },

  button: {
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FF4D4F',
    alignItems: 'center',
  },

  clearButton: {
    padding: 14,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: '#333',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: '700',
  },

  card: {
    backgroundColor: '#FFF',
    padding: 16,
    marginTop: 10,
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },

  actions: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginTop: 12,
  },

  control: {
    fontSize: 28,
    fontWeight: '700',
  },

  remove: {
    color: '#FF0000',
    fontWeight: '700',
  },
});