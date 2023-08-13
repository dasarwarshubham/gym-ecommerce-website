// accountSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchAccountData, updateAccountDetails } from "./accountActions";

const initialState = { account: null, loading: false, error: null };

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccountData.fulfilled, (state, action) => {
        state.loading = false;
        state.account = action.payload;
      })
      .addCase(fetchAccountData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateAccountDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAccountDetails.fulfilled, (state, action) => {
        state.loading = false;
        // Update the account details in the state with the updated data
        state.account = action.payload;
      })
      .addCase(updateAccountDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default accountSlice.reducer;
