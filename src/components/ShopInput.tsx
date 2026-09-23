import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import {COLORS, SIZES} from '@constants/theme';

type ShopInputProps = TextInputProps & {
  error?: boolean;
  label?: string;
};

export default function ShopInput({
  error = false,
  label,
  style,
  ...props
}: ShopInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        {...props}
        style={[
          styles.input,
          error && styles.error,
          style,
        ]}
        placeholderTextColor={COLORS.textLight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  label: {
    marginBottom: 8,
    fontSize: SIZES.body2,
    fontWeight: '600',
    color: COLORS.text,
  },

  input: {
    height: 48,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radius,
    color: COLORS.text,
  },

  error: {
    borderColor: COLORS.error,
  },
});