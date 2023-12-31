import { createSelector } from "reselect";

const selectAccountState = (state) => state.account;

export const selectIsAuthenticated = createSelector(
  [selectAccountState],
  (account) => account.token !== null
);

export const selectAccountData = createSelector(
  [selectAccountState],
  (account) => account.user
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
  const orders = account.orders;
  return {
    currentOrders: orders?.filter((order) => order.order_status === "Pending"),
    pastOrders: orders?.filter(
      (order) =>
        order.order_status === "Delivered" || order.order_status === "Failed"
    ),
  };
});

export const selectAccountAddress = createSelector(
  [selectAccountState],
  (account) => account.address
);
