import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import blogReducer from "./blog/blogSlice";
import cartReducer from "./checkout/cartSlice";
import productReducer from "./product/productSlice";
import accountReducer from "./account/accountSlice"; // Import your account slice

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  blogs: blogReducer,
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
