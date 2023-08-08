// import axios from "axios";

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
