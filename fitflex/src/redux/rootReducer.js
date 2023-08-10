import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import blogReducer from "./blogs/blogSlice";
import cartReducer from "./checkout/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
  cart: cartReducer,
});

export default rootReducer;
