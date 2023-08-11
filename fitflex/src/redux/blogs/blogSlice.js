import { createSlice } from "@reduxjs/toolkit";
import { retrieveBlogs, getBlogById } from "./blogActions";

const isPendingAction = (action) => {
  return action.type.startsWith(`blogs/`) && action.type.endsWith("/pending");
};
const isRejectedAction = (action) => {
  return action.type.startsWith(`blogs/`) && action.type.endsWith("/rejected");
};

const blogListSlice = createSlice({
  name: "blogs",
  initialState: {
    loading: false,
    blogList: [],
    blogDetails: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogList = action.payload;
        state.error = null;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.blogDetails = action.payload;
        state.error = null;
      })
      .addMatcher(isPendingAction, (state) => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export default blogListSlice.reducer;
