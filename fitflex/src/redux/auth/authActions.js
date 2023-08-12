// auth/authActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout } from "../../services/authAPI"; // Your API handling functions
import * as actionTypes from "./authTypes";

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
  localStorage.removeItem("token");
});
