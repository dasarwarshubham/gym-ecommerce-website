// accountSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  autoLogin,
  loginUser,
  logoutUser,
  signupUser,
  fetchAccountData,
  updateAccountDetails,
  updateAccountAddress,
  deleteAccountAddress,
  addAccountAddress,
  defaultAccountAddress,
  fetchAccountAddress,
  fetchAccountOrder,
} from "./accountActions";

const isPendingAction = (action) => {
  return (
    (action.type.startsWith(`account/`) ||
      action.type.startsWith(`orders/`) ||
      action.type.startsWith(`address/`)) &&
    action.type.endsWith("/pending")
  );
};
const isRejectedAction = (action) => {
  return (
    (action.type.startsWith(`account/`) ||
      action.type.startsWith(`orders/`) ||
      action.type.startsWith(`address/`)) &&
    action.type.endsWith("/rejected")
  );
};

const initialState = {
  token: null,
  user: null,
  address: null,
  orders: null,
  loading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(autoLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.userDetails;
        state.error = null;
      })
      .addCase(autoLogin.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        return initialState;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        //need to be updated
        state.loading = false;
        // state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchAccountData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchAccountAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
        state.error = null;
      })
      .addCase(addAccountAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateAccountAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(defaultAccountAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = state.address.map((address) => {
          if (address.id === action.payload) {
            return { ...address, default: true };
          } else {
            return { ...address, default: false };
          }
        });
      })
      .addCase(deleteAccountAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // state.address = state.address.filter(
        //   (address) => address.id !== action.payload
        // );
      })
      .addCase(fetchAccountOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
        state.error = null;
      })
      .addMatcher(isPendingAction, (state) => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false;
        console.log(action.error);
        state.error = JSON.stringify(action.error.message);
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default accountSlice.reducer;
