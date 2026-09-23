import React from 'react';
import {View, StyleSheet} from 'react-native';

import ShopButton from '@components/ShopButton';

export default function ShopButtonDemo() {
  return (
    <View style={styles.container}>
      <ShopButton
        title="Đăng nhập"
        onPress={() => {
          console.log('Đăng nhập');
        }}
      />

      <ShopButton
        title="Hủy"
        variant="secondary"
        onPress={() => {
          console.log('Hủy');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
});