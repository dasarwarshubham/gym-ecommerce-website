import axios from "axios";
import { API_ROUTES } from "../constants/routes";

const userAxios = axios.create({
  baseURL: API_ROUTES,
});

const publicAxios = axios.create({
  baseURL: API_ROUTES,
});

const setAuthorizationHeaders = () => {
  const token = `Token ${localStorage.token}`;
  userAxios.defaults.headers.common["Authorization"] = token;
};

const resetAuthorizationHeaders = () => {
  delete userAxios.defaults.headers.common["Authorization"];
};

export {
  userAxios,
  publicAxios,
  setAuthorizationHeaders,
  resetAuthorizationHeaders,
};
