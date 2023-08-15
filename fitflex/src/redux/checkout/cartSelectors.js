import { createSelector } from "reselect";

const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.items
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
