// accountSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAccountData,
  updateAccountDetails,
  updateAccountAddress,
  deleteAccountAddress,
  addAccountAddress,
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

const initialState = { account: null, loading: false, error: null };

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountData.fulfilled, (state, action) => {
        state.loading = false;
        state.account = action.payload;
      })
      .addCase(updateAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        // Update the account details in the state with the updated data
        state.account = action.payload;
      })
      .addCase(addAccountAddress.fulfilled, (state, action) => {
        state.loading = false;

        //need to be updated
        // if address alkready exist proper error handling to be done

        const newAddress = action.payload;

        // Check if the address already exists
        const existingAddress = state.account.addresses.find(
          (address) =>
            address.fullName === newAddress.fullName &&
            address.addressLine1 === newAddress.addressLine1 &&
            address.addressLine2 === newAddress.addressLine2 &&
            address.city === newAddress.city &&
            address.state === newAddress.state &&
            address.zipCode === newAddress.zipCode
        );

        if (!existingAddress) {
          state.account.addresses.push({
            id: state.account.addresses.length + 1,
            ...newAddress,
          });
          state.error = null;
        } else {
          state.error = "address already exists";
        }
      })
      .addCase(updateAccountAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.account = {
          ...state.account,
          addresses: state.account.addresses.map((address) => {
            if (address.id === action.payload.id) {
              return action.payload;
            } else {
              return address;
            }
          }),
        };
      })
      .addCase(deleteAccountAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.account = {
          ...state.account,
          addresses: state.account.addresses.filter(
            (address) => address.id !== action.payload
          ),
        };
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
