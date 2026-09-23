import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  Modal,
  Switch,
  Alert,
  StyleSheet,
} from 'react-native';

export default function CoreComponentsDemo() {
  const [keyword, setKeyword] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const products = [
    'iPhone 15',
    'Samsung Galaxy S25',
    'Xiaomi 15',
    'Google Pixel 9',
  ];

  const filteredProducts = products.filter(product =>
    product.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <ScrollView style={styles.container}>
      {/* Text */}
      <Text style={styles.title}>Core Components</Text>

      {/* Image */}
      <Image
        source={{
          uri: 'https://picsum.photos/600/200',
        }}
        style={styles.image}
      />

      {/* TextInput */}
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Tìm sản phẩm..."
        style={styles.input}
      />

      {/* Switch */}
      <View style={styles.row}>
        <Text>Thông báo</Text>

        <Switch
          value={enabled}
          onValueChange={setEnabled}
        />
      </View>

      <Text style={styles.status}>
        Thông báo: {enabled ? 'BẬT' : 'TẮT'}
      </Text>

      {/* Pressable */}
      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>
          Mở Modal
        </Text>
      </Pressable>

      {/* Alert */}
      <Pressable
        style={styles.secondaryButton}
        onPress={() =>
          Alert.alert(
            'ShopAI',
            'Bạn vừa bấm nút Alert!',
          )
        }>
        <Text style={styles.buttonText}>
          Hiện Alert
        </Text>
      </Pressable>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>
              Đây là Modal
            </Text>

            <Text>
              Modal dùng để hiển thị nội dung
              phía trên màn hình hiện tại.
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>
                Đóng
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Product list */}
      <Text style={styles.sectionTitle}>
        Danh sách sản phẩm
      </Text>

      {filteredProducts.map(product => (
        <View
          key={product}
          style={styles.card}>
          <Text style={styles.product}>
            {product}
          </Text>
        </View>
      ))}

      {filteredProducts.length === 0 && (
        <Text style={styles.empty}>
          Không tìm thấy sản phẩm
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 16,
  },

  image: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 16,
  },

  input: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 14,
  },

  row: {
    marginTop: 16,
    padding: 14,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  status: {
    marginTop: 8,
  },

  button: {
    marginTop: 16,
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: '#FF4D4F',
    alignItems: 'center',
  },

  secondaryButton: {
    marginTop: 10,
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: '#333333',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  sectionTitle: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
  },

  card: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  product: {
    fontSize: 16,
    fontWeight: '600',
  },

  empty: {
    textAlign: 'center',
    marginTop: 20,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modal: {
    width: '85%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
  },
});