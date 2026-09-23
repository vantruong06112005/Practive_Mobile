import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';

import {COLORS, FONTS, SIZES} from '@constants/theme';

type ShopButtonProps = PressableProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  accessibilityLabel?: string;
};

export default function ShopButton({
  title,
  variant = 'primary',
  isLoading = false,
  accessibilityLabel,
  disabled,
  style,
  ...props
}: ShopButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      accessibilityLabel={accessibilityLabel || title}
      style={({pressed}) => [
        styles.button,

        variant === 'secondary' && styles.secondary,

        variant === 'outline' && styles.outline,

        pressed && !isDisabled && styles.pressed,

        isDisabled && styles.disabled,

        style,
      ]}>
      {isLoading ? (
        <ActivityIndicator
          color={
            variant === 'primary'
              ? COLORS.surface
              : COLORS.primary
          }
        />
      ) : (
        <Text
          style={[
            styles.text,

            variant !== 'primary' && styles.secondaryText,
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondary: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  text: {
    ...FONTS.body1,
    color: COLORS.surface,
    fontWeight: '700',
  },

  secondaryText: {
    color: COLORS.primary,
  },

  pressed: {
    opacity: 0.75,
  },

  disabled: {
    opacity: 0.5,
  },
});