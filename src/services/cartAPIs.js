import { publicAxios, userAxios } from "./axiosInstance";
import { API_ROUTES } from "../constants/routes";

export const getCartDetails = async () => {
  try {
    const cartId = localStorage.getItem("cartId");
    const response = await publicAxios.get(`${API_ROUTES.cart}/${cartId}/`);
    return response.data;
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const createCart = async () => {
  try {
    const response = await publicAxios({
      method: "POST",
      url: `${API_ROUTES.cart}/`,
    });
    // console.log("Create Cart response : ", response);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Some thing went wrong");
    }
  } catch (error) {
    // console.log(error.response);
    let errorMsg = error.response.data;
    // if (error?.response?.data?.non_field_errors) {
    //   errorMsg = error?.response?.data?.non_field_errors[0];
    // }
    throw new Error(JSON.stringify(errorMsg));
  }
};

export const clearCart = async () => {
  try {
    const cartId = localStorage.getItem("cartId");
    const response = await publicAxios({
      method: "DELETE",
      url: `${API_ROUTES.cart}/${cartId}/items/delete-all/`,
    });
    // console.log("Clear Cart response : ", response);
    return response.data;
  } catch (error) {
    // console.log(error.response);
    let errorMsg = error.response.data;
    // if (error?.response?.data?.non_field_errors) {
    //   errorMsg = error?.response?.data?.non_field_errors[0];
    // }
    throw new Error(JSON.stringify(errorMsg));
  }
};

export const addItemToCart = async (data) => {
  try {
    const cartId = localStorage.getItem("cartId");
    const response = await publicAxios({
      method: "POST",
      url: `${API_ROUTES.cart}/${cartId}/items/`,
      data: data,
    });
    return response.data;
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const updateItemFromCart = async (data) => {
  const { product_id, quantity } = data;
  try {
    const cartId = localStorage.getItem("cartId");
    const response = await publicAxios({
      method: "PATCH",
      url: `${API_ROUTES.cart}/${cartId}/items/${product_id}/`,
      data: { quantity: quantity },
    });
    return response.data;
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const deleteItemFromCart = async (product_id) => {
  try {
    const cartId = localStorage.getItem("cartId");
    const response = await publicAxios({
      method: "DELETE",
      url: `${API_ROUTES.cart}/${cartId}/items/${product_id}/`,
    });
    return response.data;
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const setCartAddress = async (delivery_address) => {
  try {
    const cartId = localStorage.getItem("cartId");
    const response = await userAxios({
      method: "PUT",
      url: `${API_ROUTES.cart}/${cartId}/address/`,
      data: delivery_address,
    });
    return response.data;
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};
