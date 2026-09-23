import React, {useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';

import SearchBar from '@components/SearchBar';

export default function SearchBarDemo() {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    Alert.alert(
      'Tìm kiếm',
      keyword
        ? `Bạn tìm: ${keyword}`
        : 'Bạn chưa nhập từ khóa',
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={keyword}
        onChangeText={setKeyword}
        onSearch={handleSearch}
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
});