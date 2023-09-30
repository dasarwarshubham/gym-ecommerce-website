import axios from "axios";
import { API_ROUTES } from "../constants/routes";

const userAxios = axios.create({
  withCredentials: true,
  baseURL: API_ROUTES,
});

const publicAxios = axios.create({
  baseURL: API_ROUTES,
});

userAxios.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization = `Token ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

userAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.data?.detail === "Invalid token.") {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export { userAxios, publicAxios };
