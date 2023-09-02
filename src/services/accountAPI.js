import { publicAxios, userAxios } from "./axiosInstance";
import { API_ROUTES } from "../constants/routes";

// eslint-disable-next-line
let data = {
  account: {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "9876543210",
    gender: "male",
  },
  orders: [
    {
      orderNumber: "ORD00001",
      date: "2023-05-21",
      status: "Delivered",
      items: [
        {
          id: 1,
          productName: "Treadmill",
          quantity: 1,
          price: 800,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
        {
          id: 5,
          productName: "Dumbbells Set",
          quantity: 2,
          price: 100,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      billingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      shippingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      total: 1000,
    },
    {
      orderNumber: "ORD00003",
      date: "2023-05-19",
      status: "Delivered",
      items: [
        {
          id: 27,
          productName: "Doorway Pull-Up Bar",
          quantity: 1,
          price: 450,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
        {
          id: 6,
          productName: "Resistance Bands",
          quantity: 3,
          price: 15,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      billingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      shippingAddress: {
        street: "789 Oak St",
        city: "Somewhere Else",
        state: "TX",
        zip: "67890",
      },
      total: 495,
    },
    {
      orderNumber: "ORD00005",
      date: "2023-05-17",
      status: "Delivered",
      items: [
        {
          id: 8,
          productName: "Yoga Mat",
          quantity: 1,
          price: 20,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
        {
          id: 6,
          productName: "Resistance Bands",
          quantity: 2,
          price: 15,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
        {
          id: 5,
          productName: "Dumbbells Set",
          quantity: 1,
          price: 100,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      billingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      shippingAddress: {
        street: "654 Birch St",
        city: "Yet Another City",
        state: "WA",
        zip: "54321",
      },
      total: 135,
    },
    {
      orderNumber: "ORD00007",
      date: "2023-05-15",
      status: "Delivered",
      items: [
        {
          id: 1,
          productName: "Treadmill",
          quantity: 1,
          price: 800,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      billingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      shippingAddress: {
        street: "567 Elm St",
        city: "Villagetown",
        state: "NJ",
        zip: "56789",
      },
      total: 800,
    },
    {
      orderNumber: "ORD00008",
      date: "2023-05-14",
      status: "Pending",
      items: [
        {
          id: 27,
          productName: "Doorway Pull-Up Bar",
          quantity: 1,
          price: 450,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      billingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      shippingAddress: {
        street: "345 Maple St",
        city: "Mapletown",
        state: "PA",
        zip: "34567",
      },
      total: 450,
    },
    {
      orderNumber: "ORD00009",
      date: "2023-05-13",
      status: "Delivered",
      items: [
        {
          id: 5,
          productName: "Dumbbells Set",
          quantity: 2,
          price: 100,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      billingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      shippingAddress: {
        street: "678 Oak St",
        city: "Oaktown",
        state: "OH",
        zip: "67890",
      },
      total: 200,
    },
    {
      orderNumber: "ORD00010",
      date: "2023-05-12",
      status: "Pending",
      items: [
        {
          id: 10,
          productName: "Jump Rope",
          quantity: 1,
          price: 10,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
        {
          id: 8,
          productName: "Yoga Mat",
          quantity: 1,
          price: 20,
          image: "https://dummyimage.com/400x400/ededed/000000",
        },
      ],
      billingAddress: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      shippingAddress: {
        street: "123 Pine St",
        city: "Pineville",
        state: "SC",
        zip: "12345",
      },
      total: 30,
    },
  ],
  addresses: [
    {
      id: 201,
      fullName: "Shubham Dasarwar",
      addressLine1: "123 Main Street",
      addressLine2: "Apt 4B",
      city: "Cityville",
      state: "State1",
      zipCode: "12345",
      phone: "9876543210",
      default: false,
    },
    {
      id: 202,
      fullName: "Shivani Dasarwar",
      addressLine1: "456 Main Street",
      addressLine2: "Apt 4A",
      city: "Stateville",
      state: "State2",
      zipCode: "54321",
      phone: "9123456780",
      default: true,
    },
  ],
  // favoriteItems: [
  //   {
  //     id: 101,
  //     name: "Treadmill",
  //     price: 799.99,
  //     image: "treadmill.jpg",
  //   },
  //   {
  //     id: 102,
  //     name: "Dumbbell Set",
  //     price: 49.99,
  //     image: "dumbbell.jpg",
  //   },
  // ],
  // paymentDetails: [
  //   {
  //     id: 301,
  //     cardType: "Visa",
  //     cardNumber: "**** **** **** 1234",
  //     expirationDate: "05/25",
  //   },
  // ],
};
function simulateNetworkRequest(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

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
    console.log(error.response);
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
    console.log(error.response);
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
    console.log(error.response);
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const signup = async (userData) => {
  try {
    const response = await publicAxios({
      method: "POST",
      url: `${API_ROUTES.signup}/`,
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
    // console.log(response.data);
    return response.data;
    // throw new Error("Invalid AutoLogin");
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

// needs to be updated to handle all user details
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

// export const updateUserDetails = async (updatedData) => {
//   console.log(updatedData);
//   try {
//     const response = await userAxios({
//       method: "PATCH",
//       url: `${API_ROUTES.profile}/`,
//       data: updatedData,
//     });
//     console.log(response);
//     return response.data;
//     // throw new Error("Failed to update account details");
//   } catch (error) {
//     const errorMsg = error.message;
//     throw new Error(errorMsg);
//   }
// };

export const getUserAddresses = async () => {
  try {
    const response = await userAxios({
      method: "GET",
      url: `${API_ROUTES.profile}/addresses/`,
    });
    console.log(response.data);
    return response.data;
    // throw new Error("Invalid AutoLogin");
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const addUserAddress = async (newAddress) => {
  try {
    // const response = await simulateNetworkRequest(1000).then(() => newAddress);
    const response = await userAxios({
      method: "POST",
      url: `${API_ROUTES.profile}/addresses/`,
      data: newAddress,
    });
    // throw new Error("Failed to delete address");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserAddress = async ({ addressId, updatedAddress }) => {
  try {
    // const response = await simulateNetworkRequest(1000).then(
    //   () => updatedAddress
    // );
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

export const makeUserAddressDefault = async (addressId) => {
  try {
    const response = await simulateNetworkRequest(1000).then(() => addressId);
    // throw new Error("Failed to update address");
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUserAddress = async (addressId) => {
  try {
    // const response = await simulateNetworkRequest(1000).then(() => addressId);
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
