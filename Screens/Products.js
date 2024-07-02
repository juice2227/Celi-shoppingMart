

import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { CartContext } from '../CartContext';

const { width } = Dimensions.get('window');
const itemWidth = (width - 20) / 3 - 10; 

const Products = ({ navigation }) => {
  const { addToCart, checkoutItems } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Olive oil', price: 10, image: require('../assets/B1.png') },
    { id: 3, name: 'Diaper', price: 10, image: require('../assets/per7.jpg') },
    { id: 4, name: 'Make-up kit', price: 50, image: require('../assets/B2.png') },
    { id: 5, name: 'Nivea Lotion', price: 18, image: require('../assets/B3.png') },
    { id: 6, name: 'Dettol', price: 25, image: require('../assets/per2.png') },
    { id: 7, name: 'Durex', price: 17, image: require('../assets/per3.png') },
    { id: 8, name: 'Perfume', price: 60, image: require('../assets/per5.png') },
    { id: 2, name: 'Massage oil', price: 25, image: require('../assets/per8.jpg') },
    { id: 9, name: 'Pads', price: 8, image: require('../assets/per4.png') },
    { id: 10, name: 'Pampers', price: 7, image: require('../assets/per6.png') },
    { id: 11, name: 'Handwash', price: 15, image: require('../assets/1.png') },
  ];

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => addToCart(item)}>
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} 
        renderItem={renderProductItem}
        contentContainerStyle={styles.flatListContainer}
      />
      {checkoutItems.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutButtonText}>Go to Checkout ({checkoutItems.length})</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  productContainer: {
    width: itemWidth,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  checkoutButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Products;
