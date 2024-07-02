// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './Screens/Products';
import Checkout from './Screens/Checkout';
import Order from './Screens/Order';
import { CartProvider } from './CartContext'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const ProductsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="products" component={Products} />
    
  </Stack.Navigator>
);


const CheckoutStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="checkout" component={Checkout} />
    <Stack.Screen name="OrderSuccessful" component={Order} />
    
  </Stack.Navigator>
);

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Products" component={ProductsStack} />
          <Tab.Screen name="Checkout" component={CheckoutStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
