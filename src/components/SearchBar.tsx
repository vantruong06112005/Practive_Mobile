import React from 'react';
import {View, StyleSheet} from 'react-native';

import ShopInput from '@components/ShopInput';
import ShopButton from '@components/ShopButton';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  onSearch,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <ShopInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Tìm sản phẩm..."
        />
      </View>

      <View style={styles.buttonWrapper}>
        <ShopButton
          title="Tìm"
          onPress={onSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  inputWrapper: {
    flex: 1,
  },

  buttonWrapper: {
    width: 80,
  },
});