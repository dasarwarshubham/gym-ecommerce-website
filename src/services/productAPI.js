import { publicAxios } from "./axiosInstance";
import { API_ROUTES } from "../constants/routes";

export const getProductList = async (category, pageNo) => {
  try {
    let response;
    // response = await publicAxios.get(`${API_ROUTES.equipments}/?category=${category}`);
    const params = category && pageNo ? `?category=${category}&page=${pageNo}`
      : category ? `?category=${category}`
        : pageNo ? `?page=${pageNo}`
          : null;

    response = await publicAxios.get(`${API_ROUTES.equipments}/${params}`);
    if (response?.data?.results?.length === 0) {
      throw new Error("Category not found")
    }
    return response.data;
  } catch (error) {
    // const errorMsg = error.message
    const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};

export const getFeaturedProductList = async () => {
  try {
    const response = await publicAxios.get(`${API_ROUTES.equipments}/featured`);
    return response.data;
  } catch (error) {
    const errorMsg = error.message
    // const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};

export const getProductDetailsWithId = async (id) => {
  try {
    const response = await publicAxios.get(`${API_ROUTES.equipments}/${id}`);
    return response.data;
  } catch (error) {
    const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};

export const getCategoryList = async () => {
  try {
    const response = await publicAxios.get(API_ROUTES.categories);
    return response.data;
  } catch (error) {
    // const errorMsg = error.message
    const errorMsg = "Sorry, Page Not Found";
    throw new Error(errorMsg);
  }
};