// accountActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";

import * as actionTypes from "./accountTypes";
import {
  login,
  logout,
  logoutAll,
  getUserDetails,
  updateUserDetails,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
  makeUserAddressDefault,
  signup,
  getUserAddresses,
} from "../../services/accountAPI";

export const loginUser = createAsyncThunk(
  actionTypes.LOGIN,
  async (userData) => {
    const response = await login(userData);
    localStorage.setItem("token", response);
    return response;
  }
);

export const logoutUser = createAsyncThunk(actionTypes.LOGOUT, async () => {
  await logout();
});

export const logoutAllUser = createAsyncThunk(actionTypes.LOGOUT, async () => {
  await logoutAll();
});

//needs to be updated
export const autoLogin = createAsyncThunk(
  actionTypes.AUTO_LOGIN,
  async (token) => {
    const userDetails = await getUserDetails();
    return { token, userDetails };
  }
);

export const signupUser = createAsyncThunk(
  actionTypes.SIGNUP,
  async (userData) => {
    const response = await signup(userData);
    return response;
  }
);

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

export const fetchAccountAddress = createAsyncThunk(
  actionTypes.FETCH_ACCOUNT_ADDRESS,
  async () => {
    const response = await getUserAddresses();
    return response;
  }
);

export const addAccountAddress = createAsyncThunk(
  actionTypes.ADD_ADDRESS,
  async (newAddress) => {
    const response = await addUserAddress({ ...newAddress, default: false });
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

export const defaultAccountAddress = createAsyncThunk(
  actionTypes.DEFAULT_ADDRESS,
  async (addressId) => {
    const response = await makeUserAddressDefault(addressId);
    console.log(response);
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
