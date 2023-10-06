import { publicAxios } from "./axiosInstance";
import { API_ROUTES } from "../constants/routes";

// function simulateNetworkRequest(delay) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }

export const getBlogsList = async (searchQuery, pageNo) => {
  try {
    let response;
    const params = searchQuery && pageNo ? `?search=${searchQuery}&page=${pageNo}`
      : searchQuery ? `?search=${searchQuery}`
        : pageNo ? `?page=${pageNo}`
          : null;
    if (params !== null) {
      response = await publicAxios.get(`${API_ROUTES.blogs}/${params}`);
    } else {
      response = await publicAxios.get(`${API_ROUTES.blogs}/`);
    }
    if (response?.data?.count === 0) {
      throw new Error("Blogs Not Found");
    }
    return response.data;
  } catch (error) {
    const errorMsg = error.message
    // const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};

export const getBlogDetailsWithId = async (slug) => {
  try {
    const response = await publicAxios.get(`${API_ROUTES.blogs}/${slug}/`);
    if (response) {
      return response.data;
    } else {
      throw new Error("Blog Not Found");
    }
  } catch (error) {
    const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};
