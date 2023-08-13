let data = {
  accountDetails: {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "9876543210",
    alternatePhone: "9123465780",
    dob: "01/01/20000",
    gender: "male",
  },
  orders: {
    pastOrders: [
      {
        id: 1,
        orderDate: "2023-05-01",
        totalAmount: 120.5,
        status: "Delivered",
      },
      {
        id: 2,
        orderDate: "2023-04-15",
        totalAmount: 89.99,
        status: "Completed",
      },
    ],
    currentOrders: [
      {
        id: 3,
        orderDate: "2023-05-10",
        totalAmount: 45.0,
        status: "Processing",
      },
    ],
  },
  favoriteItems: [
    {
      id: 101,
      name: "Treadmill",
      price: 799.99,
      image: "treadmill.jpg",
    },
    {
      id: 102,
      name: "Dumbbell Set",
      price: 49.99,
      image: "dumbbell.jpg",
    },
  ],
  addresses: [
    {
      id: 201,
      addressLine1: "123 Main Street",
      addressLine2: "Apt 4B",
      city: "Cityville",
      state: "State",
      zipCode: "12345",
    },
  ],
  paymentDetails: [
    {
      id: 301,
      cardType: "Visa",
      cardNumber: "**** **** **** 1234",
      expirationDate: "05/25",
    },
  ],
};
function simulateNetworkRequest(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export const getUserDetails = async () => {
  try {
    const response = await simulateNetworkRequest(1000).then(() => {
      return data;
    });
    return response;
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const updateUserDetails = async (updatedData) => {
  try {
    const response = await simulateNetworkRequest(1000).then(() => {
      return { ...data, accountDetails: updatedData };
    });
    // throw new Error("Failed to update account details");

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
