import { createSelector } from "reselect";

const selectAccountState = (state) => state.account;

export const selectAccountData = createSelector(
  [selectAccountState],
  (account) => account.account
);

export const selectAccountLoading = createSelector(
  [selectAccountState],
  (account) => account.loading
);

export const selectAccountError = createSelector(
  [selectAccountState],
  (account) => account.error
);

export const selectOrders = createSelector([selectAccountState], (account) => {
  const orders = account.account?.orders;
  return {
    currentOrders: orders?.filter((order) => order.status === "Pending"),
    pastOrders: orders?.filter((order) => order.status === "Delivered"),
  };
});

export const selectAccountAddress = createSelector(
  [selectAccountState],
  (account) => account.account?.addresses
);
