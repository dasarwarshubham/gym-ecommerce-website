import { combineReducers } from "redux";

import accountReducer from "./account/accountSlice"; // Import your account slice
import blogReducer from "./blog/blogSlice";
import cartReducer from "./checkout/cartSlice";
import productReducer from "./product/productSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  blogs: blogReducer,
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
