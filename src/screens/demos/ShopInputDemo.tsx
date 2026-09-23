import React, {useState} from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import ShopInput from '@components/ShopInput';

export default function ShopInputDemo() {
  const [keyword, setKeyword] = useState('');

  return (
    <View style={styles.container}>
      <ShopInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Tìm sản phẩm..."
      />

      <ShopInput
        error={keyword.length > 0 && keyword.length < 3}
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Tối thiểu 3 ký tự"
        style={styles.secondInput}
      />
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

  secondInput: {
    marginTop: 16,
  },
});