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
