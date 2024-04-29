import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/auth/LoginComponent";
import AdminRouteMiddleware from "./components/middleware/AdminRouteMiddleware";



function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/admin" element={<AdminRouteMiddleware />} />
      
    </Routes>
  );
}

export default RouterComponent;
