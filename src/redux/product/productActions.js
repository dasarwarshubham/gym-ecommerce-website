import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCategoryList,
  getProductList,
  getFeaturedProductList,
  getProductDetailsWithId,
} from "../../services/productAPI";

export const retrieveProducts = createAsyncThunk("product/fetchAll", async ({ searchQuery, categoryId, currentPage }) => {
  const response = await getProductList(searchQuery, categoryId, currentPage);
  return response;
});

export const retrieveFeaturedProducts = createAsyncThunk("product/fetchFeatured", async () => {
  const response = await getFeaturedProductList();
  return response;
});

export const getProductById = createAsyncThunk("product/fetchById", async (id) => {
  const response = await getProductDetailsWithId(id);
  return response;
});

export const retrieveCategories = createAsyncThunk("product/category/fetchAll", async () => {
  const response = await getCategoryList();
  return response;
});
