import { userAxios } from "./axiosInstance";
import { API_ROUTES } from "../constants/routes";

function simulateNetworkRequest(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const pay = async (order) => {
  console.log(order);
  try {
    const response = await simulateNetworkRequest(1000).then(() => {
      return true;
    });
    // throw new Error("Payment Failed");
    return response;
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const placeOrder = async (paymentType) => {
  console.log(paymentType);
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
