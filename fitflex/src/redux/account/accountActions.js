// accountActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as actionTypes from "./accountTypes";
import { getUserDetails, updateUserDetails } from "../../services/accountAPI";

export const fetchAccountData = createAsyncThunk(
  actionTypes.FETCH_ACCOUNT_DETAILS,
  async () => {
    const response = await getUserDetails();
    return response;
  }
);

export const updateAccountDetails = createAsyncThunk(
  actionTypes.UPDATE_ACCOUNT_DETAILS,
  async (updatedData) => {
    const response = await updateUserDetails(updatedData);
    return response;
  }
);
