import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import blogReducer from "./blogs/blogSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
});

export default rootReducer;
