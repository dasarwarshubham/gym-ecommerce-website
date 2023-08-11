import { createSelector } from "reselect";

const selectProductSlice = (state) => state.products;

export const selectAllproducts = createSelector(
  [selectProductSlice],
  (productSlice) => productSlice.productList
);

export const selectSelectedProduct = createSelector(
  [selectProductSlice],
  (productSlice) => productSlice.productDetails
);

export const selectLoadingStatus = createSelector(
  [selectProductSlice],
  (productSlice) => productSlice.loading
);

export const selectError = createSelector(
  [selectProductSlice],
  (productSlice) => productSlice.error
);

// export const selectAllproducts = createSelector(
//   [selectProductSlice, selectLoadingStatus],
//   (productSlice, loading) => ({
//     products: productSlice.productList,
//     loading,
//   })
// );
