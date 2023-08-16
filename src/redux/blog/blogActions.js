import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogsList, getBlogDetailsWithId } from "../../services/blogAPI";

const retrieveBlogs = createAsyncThunk("blogs/fetchAll", async () => {
  const response = await getBlogsList();
  return response;
});

const getBlogById = createAsyncThunk("blogs/fetchById", async (id) => {
  const response = await getBlogDetailsWithId(id);
  return response;
});

export { retrieveBlogs, getBlogById };
 