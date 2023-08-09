import { createSlice } from "@reduxjs/toolkit";
import { retrieveBlogs, getBlogById } from "./blogActions";

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
      .addCase(retrieveBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(retrieveBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogList = action.payload;
        state.error = null;
      })
      .addCase(retrieveBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getBlogById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.blogDetails = action.payload;
        state.error = null;
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogListSlice.reducer;
