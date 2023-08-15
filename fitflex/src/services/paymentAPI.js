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
