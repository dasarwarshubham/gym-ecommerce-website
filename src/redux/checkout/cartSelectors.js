import { createSelector } from "reselect";

const selectCartSlice = (state) => state.cart;
const selectAccountSlice = (state) => state.account;

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
  [selectCartSlice, selectAccountSlice],
  (cartSlice, accountSlice) => {
    let delivery_address_id = cartSlice.cart?.delivery_address;
    if (delivery_address_id) {
      delivery_address_id = accountSlice.address?.filter((addressItem) => {
        return addressItem.id === delivery_address_id;
      })[0];
      return delivery_address_id;
    } else {
      let default_address_id = accountSlice.address?.filter(
        (addressItem) => addressItem.default && addressItem.id
      )[0];
      return default_address_id;
    }
  }
);

export const selectLoadingStatus = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.loading
);

export const selectError = createSelector(
  [selectCartSlice],
  (cartSlice) => cartSlice.error
);
