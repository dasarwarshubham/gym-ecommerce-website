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
} from "./accountActions";

const isPendingAction = (action) => {
  return (
    (action.type.startsWith(`account/`) ||
      action.type.startsWith(`address/`)) &&
    action.type.endsWith("/pending")
  );
};
const isRejectedAction = (action) => {
  return (
    (action.type.startsWith(`account/`) ||
      action.type.startsWith(`address/`)) &&
    action.type.endsWith("/rejected")
  );
};

const initialState = {
  token: null,
  user: null,
  address: null,
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

        //need to be updated
        // if address already exist proper error handling to be done

        const newAddress = action.payload;

        // Check if the address already exists
        const existingAddress = state.address.find(
          (address) =>
            address.fullName === newAddress.fullName &&
            address.addressLine1 === newAddress.addressLine1 &&
            address.addressLine2 === newAddress.addressLine2 &&
            address.city === newAddress.city &&
            address.state === newAddress.state &&
            address.zipCode === newAddress.zipCode
        );

        if (!existingAddress) {
          state.address.push({
            id: state.address.length + 1,
            ...newAddress,
          });
          state.error = null;
        }
      })
      .addCase(updateAccountAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.address = state.address.map((address) => {
          if (address.id === action.payload.id) {
            return action.payload;
          } else {
            return address;
          }
        });
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
        state.address = state.address.filter(
          (address) => address.id !== action.payload
        );
      })
      .addMatcher(isPendingAction, (state) => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default accountSlice.reducer;
