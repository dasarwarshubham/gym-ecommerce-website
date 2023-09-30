import React from "react";
import {
  Navigate,
  Outlet,
  useLocation
} from "react-router-dom";
import { LOGIN, PROFILE } from "../constants/routes";

export const PrivateRoute = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to={LOGIN} replace state={{ from: location.pathname }} />;
};

export const PublicRoute = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return !token ? <Outlet /> : <Navigate to={PROFILE} replace state={{ from: location.pathname }} />;
};
