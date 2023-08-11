import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import blogReducer from "./blog/blogSlice";
import cartReducer from "./checkout/cartSlice";
import productReducer from "./product/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
