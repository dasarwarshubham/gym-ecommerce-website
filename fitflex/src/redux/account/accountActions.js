// accountActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as actionTypes from "./accountTypes";
import {
  getUserDetails,
  updateUserDetails,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
} from "../../services/accountAPI";

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

export const addAccountAddress = createAsyncThunk(
  actionTypes.ADD_ADDRESS,
  async (newAddress) => {
    const response = await addUserAddress(newAddress);
    return response;
  }
);

export const updateAccountAddress = createAsyncThunk(
  actionTypes.UPDATE_ADDRESS,
  async ({ addressId, updatedAddress }) => {
    const response = await updateUserAddress({ addressId, updatedAddress });
    return response;
  }
);

export const deleteAccountAddress = createAsyncThunk(
  actionTypes.DELETE_ADDRESS,
  async (addressId) => {
    const response = await deleteUserAddress(addressId);
    return response;
  }
);
