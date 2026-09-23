import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  COLORS,
  SIZES,
  FONTS,
} from '@constants/theme';

export default function ThemeDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ShopAI Theme
      </Text>

      <Text style={styles.body}>
        Theme đang hoạt động
      </Text>

      <View style={styles.box}>
        <Text style={styles.primary}>
          Primary Color
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    padding: SIZES.padding,
  },

  title: {
    ...FONTS.h1,
    color: COLORS.text,
    marginBottom: 8,
  },

  body: {
    ...FONTS.body1,
    color: COLORS.textLight,
    marginBottom: 16,
  },

  box: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    borderRadius: SIZES.radius,
  },

  primary: {
    ...FONTS.body1,
    color: COLORS.surface,
  },
});