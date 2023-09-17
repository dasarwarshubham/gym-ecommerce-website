import { userAxios } from "./axiosInstance";
import { API_ROUTES } from "../constants/routes";

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
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};
