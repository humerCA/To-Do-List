import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  let auth = { token };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

// export const LoginRoutes = () => {
//   const token = localStorage.getItem("token");
//   let auth = { token };
//   return auth.token ? <Navigate to="/" /> : <Outlet />;
// };

export default PrivateRoutes;
