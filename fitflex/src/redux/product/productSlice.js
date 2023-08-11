import { createSlice } from "@reduxjs/toolkit";
import { retrieveProducts, getProductById } from "./productActions";

const isPendingAction = (action) => {
  return action.type.startsWith(`product/`) && action.type.endsWith("/pending");
};
const isRejectedAction = (action) => {
  return (
    action.type.startsWith(`product/`) && action.type.endsWith("/rejected")
  );
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    productList: [],
    productDetails: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
        state.error = null;
      })
      .addMatcher(isPendingAction, (state) => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default productSlice.reducer;
