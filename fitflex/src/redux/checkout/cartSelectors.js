import { createSelector } from "reselect";

const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.items
);

export const selectLoadingStatus = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.loading
);

export const selectError = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.error
);
