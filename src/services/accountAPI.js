import { publicAxios, userAxios } from "./axiosInstance";
import { API_ROUTES } from "../constants/routes";


export const login = async (userData) => {
  try {
    const { username, password } = userData;
    const response = await userAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/login/`,
      data: {
        email: username,
        password: password,
      },
    });

    if (response.status === 200) {
      return response.data.token;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    // console.log(error.response);
    let errorMsg = error.response.data;
    if (error?.response?.data?.non_field_errors) {
      errorMsg = error?.response?.data?.non_field_errors[0];
    }
    throw new Error(errorMsg);
  }
};

export const logout = async () => {
  try {
    const response = await userAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/logout/`,
    });

    if (response.status === 204) {
      localStorage.removeItem("token");
      return response;
    } else {
      throw new Error("Something went wrong...");
    }
  } catch (error) {
    // console.log(error.response);
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const logoutAll = async () => {
  try {
    const response = await userAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/logoutall/`,
    });

    if (response.status === 204) {
      localStorage.removeItem("token");
      return response;
    } else {
      throw new Error("Something went wrong...");
    }
  } catch (error) {
    // console.log(error.response);
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const signup = async (userData) => {
  try {
    const response = await publicAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/signup/`,
      data: userData,
    });

    return response;
  } catch (error) {
    let errorMsg = error.response;
    if (error.response.status === 400) {
      const data = error.response.data;
      if (data?.email) {
        errorMsg = data.email[0];
      } else {
        errorMsg = JSON.stringify(data);
      }
    }
    // console.log(JSON.stringify(errorMsg));
    throw new Error(errorMsg);
  }
};

export const getUserDetails = async () => {
  try {
    const response = await userAxios({
      method: "GET",
      url: `${API_ROUTES.profile}/`,
    });
    return response.data;
    // throw new Error("Invalid AutoLogin");
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const updateUserDetails = async (updatedData) => {
  try {
    const response = await userAxios({
      method: "PATCH",
      url: `${API_ROUTES.profile}/`,
      data: updatedData,
    });
    return response.data;
    // throw new Error("Failed to update account details");
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const getUserAddresses = async () => {
  try {
    const response = await userAxios({
      method: "GET",
      url: `${API_ROUTES.profile}/addresses/`,
    });
    return response.data;
    // throw new Error("Invalid AutoLogin");
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const addUserAddress = async (newAddress) => {
  try {
    const response = await userAxios({
      method: "POST",
      url: `${API_ROUTES.profile}/addresses/`,
      data: newAddress,
    });
    // throw new Error("Failed to add address");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserAddress = async ({ addressId, updatedAddress }) => {
  try {
    const response = await userAxios({
      method: "PATCH",
      url: `${API_ROUTES.profile}/addresses/${addressId}/`,
      data: updatedAddress,
    });
    // throw new Error("Failed to update address");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data?.error[0]);
  }
};

// export const makeUserAddressDefault = async (addressId) => {
//   try {
//     const response = await simulateNetworkRequest(1000).then(() => addressId);
//     // throw new Error("Failed to update address");
//     console.log(response);
//     return response;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

export const deleteUserAddress = async (addressId) => {
  try {
    const response = await userAxios({
      method: "DELETE",
      url: `${API_ROUTES.profile}/addresses/${addressId}`,
    });
    // throw new Error("Failed to delete address");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const changePassword = async (data) => {
  try {
    const response = await userAxios({
      method: "PUT",
      url: `${API_ROUTES.accounts}/change-password/`,
      data: data
    });
    // throw new Error("Failed to change password");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const forgotPassword = async (email) => {
  try {
    const response = await publicAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/password-reset/`,
      data: email
    });
    // throw new Error("Failed to reset password");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const resetPassword = async (data) => {
  const { token } = data;

  try {
    // Validate the token
    await publicAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/password-reset/validate_token/`,
      data: {
        token: token,
      },
    }).catch((error) => {
      throw new Error("Invalid token received!! This link has been expired.");
    })

    // Confirm the password reset
    const response = await publicAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/password-reset/confirm/`,
      data: data,
    }).catch((error) => {
      throw new Error("Invalid token received!! This link has been expired.");
    })

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const verifyEmail = async (user_id, token) => {
  try {
    const response = await publicAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/verify-email/${user_id}/${token}/`,
    });
    return response;
  } catch (error) {
    let errorMsg = error.message
    if (error?.response?.data) {
      errorMsg = JSON.stringify(error?.response?.data)
    }
    throw new Error(errorMsg);
  }
}

export const newVerifyEmailToken = async (user_id, token) => {
  try {
    const response = await publicAxios({
      method: "POST",
      url: `${API_ROUTES.accounts}/verify-email/${user_id}/${token}/generate-token/`,
    });
    return response;
  } catch (error) {
    let errorMsg = error.message
    if (error?.response?.data) {
      errorMsg = JSON.stringify(error?.response?.data)
    }
    throw new Error(errorMsg);
  }
}
