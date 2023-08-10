import { createAsyncThunk } from "@reduxjs/toolkit";

// Simulate an API call to update the cart on the server
const updateCartOnServer = async (cartItems) => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cartItems);
    }, 500);
  });
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ item, quantity }, { getState }) => {
    const state = getState();
    const existingItem = state.cart.items.find(
      (cartItem) => cartItem.id === item.id
    );

    let updatedCartItems;

    if (existingItem) {
      updatedCartItems = state.cart.items.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
    } else {
      updatedCartItems = [...state.cart.items, { ...item, quantity }];
    }
    return updateCartOnServer(updatedCartItems);
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (itemId, { getState }) => {
    const state = getState();
    const updatedCartItems = state.cart.items.filter(
      (cartItem) => cartItem.id !== itemId
    );
    return updateCartOnServer(updatedCartItems);
  }
);

export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ itemId, quantity }, { getState }) => {
    const state = getState();
    const updatedCartItems = state.cart.items.map((cartItem) =>
      cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
    );
    return updateCartOnServer(updatedCartItems);
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { getState }) => {
    return updateCartOnServer([]);
  }
);
