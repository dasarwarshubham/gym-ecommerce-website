import { createAction } from "@reduxjs/toolkit";

export const LOGIN = createAction("account/login");
export const LOGOUT = createAction("account/logout");
export const AUTO_LOGIN = createAction("account/auto-login");
export const SIGNUP = createAction("account/signup");
export const PASSWORD = createAction("account/password-change");

export const FETCH_ACCOUNT_DETAILS = createAction("account/fetch");
export const UPDATE_ACCOUNT_DETAILS = createAction("account/update");

export const FETCH_ACCOUNT_ADDRESS = createAction("address/fetch");
export const ADD_ADDRESS = createAction("address/add");
export const UPDATE_ADDRESS = createAction("address/update");
export const DEFAULT_ADDRESS = createAction("address/default");
export const DELETE_ADDRESS = createAction("address/delete");

export const CREATE_ORDER = createAction("orders/create");
export const FETCH_ORDER = createAction("orders/fetch");
export const UPDATE_ORDER = createAction("orders/cancel");
