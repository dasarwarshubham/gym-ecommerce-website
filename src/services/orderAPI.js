import { userAxios } from "./axiosInstance";
import { API_ROUTES } from "../constants/routes";

export const getUserOrders = async () => {
  try {
    const response = await userAxios.get(`${API_ROUTES.order}/`);
    console.log(response);
    return response.data;
  } catch (error) {
    // const errorMsg = error.message
    console.log(error);
    return error;
  }
};
