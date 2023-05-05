import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getAuthUser } from "../helper/Storage";

const Guest1 = () => {
  const auth = getAuthUser();
  return <>{auth && auth.name === "Admin123Aa" ? <Outlet /> : <Navigate to={"/Admin"} />}</>;
};

export default Guest1;
