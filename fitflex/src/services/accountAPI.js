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
    await simulateNetworkRequest(2000);
    if (username === "shubham.wrk01@gmail.com" && password === "nimda@123") {
      return "bf65e431-322b-401d-bc79-3b747f9ad16b";
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.log(error);
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const logout = async () => {
  try {
    await simulateNetworkRequest(1000);
  } catch (error) {
    const errorMsg = error.message;
    throw new Error(errorMsg);
  }
};

export const getUserDetails = async () => {
  try {
    const response = await simulateNetworkRequest(1000).then(() => {
      return data;
    });
    // throw new Error("Invalid AutoLogin");
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

export const addUserAddress = async (newAddress) => {
  try {
    const response = await simulateNetworkRequest(1000).then(() => newAddress);
    // throw new Error("Failed to delete address");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserAddress = async ({ addressId, updatedAddress }) => {
  try {
    const response = await simulateNetworkRequest(1000).then(
      () => updatedAddress
    );
    // throw new Error("Failed to update address");
    return response;
  } catch (error) {
    throw new Error(error.message);
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
    const response = await simulateNetworkRequest(1000).then(() => addressId);
    // throw new Error("Failed to delete address");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
