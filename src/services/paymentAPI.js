import { API_ROUTES } from "../constants/routes";
import { userAxios } from "./axiosInstance";

export const placeOrder = async () => {
  try {
    const cartId = localStorage.getItem("cartId");
    const response = await userAxios({
      method: "POST",
      url: `${API_ROUTES.order}/`,
      data: { cart_id: cartId },
    });
    localStorage.removeItem("cartId");
    return response.data;
  } catch (error) {
    let errorMsg = error.message;
    if (error?.response?.data) {
      errorMsg = error?.response?.data;
    }
    throw new Error(errorMsg);
  }
};
