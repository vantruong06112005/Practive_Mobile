import React from 'react';
import {View, StyleSheet} from 'react-native';

import Typography from '@components/Typography';

export default function TypographyDemo() {
  return (
    <View style={styles.container}>
      <Typography variant="h1">
        ShopAI
      </Typography>

      <Typography variant="h2">
        Sản phẩm nổi bật
      </Typography>

      <Typography variant="h3">
        iPhone 15
      </Typography>

      <Typography variant="body1">
        Đây là nội dung sản phẩm.
      </Typography>

      <Typography
        variant="body2"
        color="#7F8C8D">
        Mô tả ngắn
      </Typography>

      <Typography
        variant="small"
        color="#FF4D4F">
        Còn hàng
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
});