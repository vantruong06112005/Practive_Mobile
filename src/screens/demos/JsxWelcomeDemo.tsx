import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function JsxWelcomeDemo() {
  return (
    <View style={styles.screen}>
      <Text style={styles.brand}>
        ShopAI
      </Text>

      <Text style={styles.subtitle}>
        Môi trường đã sẵn sàng
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  brand: {
    fontSize: 36,
    fontWeight: '800',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default JsxWelcomeDemo;