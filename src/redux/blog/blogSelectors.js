import { createSelector } from "reselect";

const selectBlogSlice = (state) => state.blogs;

export const selectAllBlogs = createSelector(
  [selectBlogSlice],
  (blogSlice) => blogSlice.blogList
);

export const selectBlogCount = createSelector(
  [selectBlogSlice],
  (blogSlice) => blogSlice.blogCount
);

export const selectSelectedBlog = createSelector(
  [selectBlogSlice],
  (blogSlice) => blogSlice.blogDetails
);

export const selectLoadingStatus = createSelector(
  [selectBlogSlice],
  (blogSlice) => blogSlice.loading
);

export const selectError = createSelector(
  [selectBlogSlice],
  (blogSlice) => blogSlice.error
);

// export const selectAllBlogs = createSelector(
//   [selectBlogSlice, selectLoadingStatus],
//   (blogSlice, loading) => ({
//     blogs: blogSlice.blogList,
//     loading,
//   })
// );
