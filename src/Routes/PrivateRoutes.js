import React, { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  let auth = { token };
  if (auth?.token) {
    return <Navigate to={"/"} />;
    // auth.token && <Navigate to='/'/>
  }
};

export default PrivateRoutes;
