import { createSelector } from "reselect";

const selectProductSlice = (state) => state.products;

export const selectAllProducts = createSelector(
  [selectProductSlice],
  (productSlice) => productSlice.productList
);

export const selectProductCount = createSelector(
  [selectProductSlice],
  (productSlice) => productSlice.productCount
);

export const selectFeaturedProducts = createSelector(
  [selectProductSlice],
  (productSlice) => productSlice.featuredProductList
);

export const selectAllCategories = createSelector(
  [selectProductSlice],
  (productSlice) => productSlice.categoryList
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
