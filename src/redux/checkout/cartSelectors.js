import { createSelector } from "reselect";

const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.cart?.items
);

export const selectCart = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.cart
);

export const selectCartItemsCount = createSelector(
  [selectCartSlice],
  (cartSlice) =>
    cartSlice.cart?.items?.length ? cartSlice.cart?.items?.length : 0
);

export const selectCartAddress = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.address
);

export const selectLoadingStatus = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.loading
);

export const selectError = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.error
);
