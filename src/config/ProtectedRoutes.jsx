import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ProtectedRoutes = () => {
  let user = true;

  return user ? (
    <>
      <div className="relative  w-screen h-screen overflow-x-hidden">
        <Sidebar />
     
      <Navbar />
      <Outlet />
     
      </div>
    </>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default ProtectedRoutes;
