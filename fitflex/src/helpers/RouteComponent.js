import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN, PROFILE } from "../constants/routes";

export const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to={LOGIN} replace />;
};

export const PublicRoute = () => {
  const token = localStorage.getItem("token");
  return !token ? <Outlet /> : <Navigate to={PROFILE} replace />;
};
