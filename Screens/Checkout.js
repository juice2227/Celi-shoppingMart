

import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from '../CartContext';

const Checkout = ({ navigation }) => {
  const { checkoutItems, removeFromCart } = useContext(CartContext);

  const placeOrder = () => {
    
    navigation.navigate('OrderSuccessful');
  };

  const renderCheckoutItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text style={{ color: 'red' }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {checkoutItems.length > 0 ? (
        <FlatList
          data={checkoutItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCheckoutItem}
          style={{ width: '100%' }}
        />
      ) : (
        <Text>No items in cart</Text>
      )}
      <TouchableOpacity onPress={placeOrder} style={{ marginTop: 20, backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;
