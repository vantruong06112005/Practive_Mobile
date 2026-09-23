import React from 'react';

import {
  View,
  Text,
  ScrollView,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';

const products = [
  {id: 1, name: 'iPhone 15'},
  {id: 2, name: 'Samsung Galaxy S25'},
  {id: 3, name: 'Xiaomi 15'},
  {id: 4, name: 'Google Pixel 9'},
];

const sections = [
  {
    title: 'Điện thoại',
    data: [
      {id: 1, name: 'iPhone 15'},
      {id: 2, name: 'Samsung Galaxy S25'},
    ],
  },
  {
    title: 'Laptop',
    data: [
      {id: 3, name: 'MacBook Air'},
      {id: 4, name: 'ASUS ROG'},
    ],
  },
];

export default function ListDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        List Demo
      </Text>

      <Text style={styles.heading}>
        1. ScrollView
      </Text>

      <ScrollView style={styles.box}>
        {products.map(product => (
          <Text key={product.id} style={styles.item}>
            {product.name}
          </Text>
        ))}
      </ScrollView>

      <Text style={styles.heading}>
        2. FlatList
      </Text>

      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item.name}
          </Text>
        )}
      />

      <Text style={styles.heading}>
        3. SectionList
      </Text>

      <SectionList
        sections={sections}
        keyExtractor={item => String(item.id)}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>
            {section.title}
          </Text>
        )}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 12,
  },

  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 6,
  },

  box: {
    maxHeight: 100,
  },

  item: {
    padding: 10,
    marginBottom: 4,
    backgroundColor: '#F3F3F3',
  },

  sectionHeader: {
    padding: 8,
    backgroundColor: '#DDDDDD',
    fontWeight: '700',
  },
});