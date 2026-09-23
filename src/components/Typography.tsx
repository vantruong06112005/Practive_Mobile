import React from 'react';
import {Text, TextStyle} from 'react-native';

import {COLORS, FONTS} from '@constants/theme';

type TypographyProps = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'small';
  color?: string;
  style?: TextStyle;
};

export default function Typography({
  children,
  variant = 'body1',
  color = COLORS.text,
  style,
}: TypographyProps) {
  return (
    <Text
      style={[
        FONTS[variant],
        {
          color,
        },
        style,
      ]}>
      {children}
    </Text>
  );
}