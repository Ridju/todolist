import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { RootState } from "../app/store";

export default function PrivateWrapper() {
  const token = useSelector((state: RootState) => state.auth.token);
  return token === "" ? <Navigate to='/login' /> : <Outlet />;
}
