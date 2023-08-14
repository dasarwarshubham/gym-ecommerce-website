import { createAction } from "@reduxjs/toolkit";

export const FETCH_ACCOUNT_DETAILS = createAction("account/fetch");
export const UPDATE_ACCOUNT_DETAILS = createAction("account/update"); // Add this action type
export const ADD_ADDRESS = createAction("address/add");
export const UPDATE_ADDRESS = createAction("address/update");
export const DELETE_ADDRESS = createAction("address/delete");
