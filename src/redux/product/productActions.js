import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProductList,
  getProductDetailsWithId,
} from "../../services/productAPI";

const retrieveProducts = createAsyncThunk("product/fetchAll", async () => {
  const response = await getProductList();
  return response;
});

const getProductById = createAsyncThunk("product/fetchById", async (id) => {
  const response = await getProductDetailsWithId(id);
  return response;
});

export { retrieveProducts, getProductById };
