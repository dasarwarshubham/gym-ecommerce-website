import { createSelector } from "reselect";

const selectBlogsSlice = (state) => state.blogs;

export const selectAllBlogs = createSelector(
  [selectBlogsSlice],
  (blogsSlice) => blogsSlice.blogList
);

export const selectSelectedBlog = createSelector(
  [selectBlogsSlice],
  (blogsSlice) => blogsSlice.blogDetails
);

export const selectLoadingStatus = createSelector(
  [selectBlogsSlice],
  (blogsSlice) => blogsSlice.loading
);

export const selectError = createSelector(
  [selectBlogsSlice],
  (blogsSlice) => blogsSlice.error
);

// export const selectAllBlogs = createSelector(
//   [selectBlogsSlice, selectLoadingStatus],
//   (blogsSlice, loading) => ({
//     blogs: blogsSlice.blogList,
//     loading,
//   })
// );
