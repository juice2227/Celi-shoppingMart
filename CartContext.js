

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addToCart = (product) => {
    setCheckoutItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCheckoutItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCheckoutItems([]);
  };

  return (
    <CartContext.Provider value={{ checkoutItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
