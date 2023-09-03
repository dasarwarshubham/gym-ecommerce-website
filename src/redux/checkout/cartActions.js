import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItemToCart,
  clearCart,
  createCart,
  deleteItemFromCart,
  getCartDetails,
  updateItemFromCart,
} from "../../services/cartAPIs";

export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const response = await getCartDetails();
  return response;
});

export const createNewCart = createAsyncThunk("cart/create", async () => {
  const response = await createCart();
  console.log("Cart Actions response : ", response);
  localStorage.setItem("cartId", response.id);
  return response;
});

export const addItem = createAsyncThunk("cart/add", async (data) => {
  const response = await addItemToCart(data);
  console.log("Cart Add Item response : ", response);
  return response;
});

export const updateQuantity = createAsyncThunk("cart/update", async (data) => {
  const response = await updateItemFromCart(data);
  console.log("Cart Delete Item response : ", response);
  return response;
});

export const deleteItem = createAsyncThunk(
  "cart/delete",
  async (product_id) => {
    const response = await deleteItemFromCart(product_id);
    console.log("Cart Delete Item response : ", response);
    return response;
  }
);

export const deleteAllItem = createAsyncThunk("cart/deleteAll", async () => {
  const response = await clearCart();
  console.log("Cart Delete All Item response : ", response);
  return response;
});

export const setShippingInfo = createAsyncThunk(
  "cart/address",
  async (shippingInfo) => {
    // Simulate server interaction and return updated shippingInfo
    return shippingInfo;
  }
);
