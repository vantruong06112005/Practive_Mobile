import React from 'react';
import {View, StyleSheet} from 'react-native';

import ProductInfo from '@components/ProductInfo';

export default function ComponentAliasDemo() {
  return (
    <View style={styles.container}>
      <ProductInfo
        name="iPhone 15"
        price={25000000}
      />

      <ProductInfo
        name="Samsung Galaxy S25"
        price={22000000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
});