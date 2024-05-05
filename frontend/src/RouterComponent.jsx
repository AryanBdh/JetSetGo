import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/auth/LoginComponent";
import AdminRouteMiddleware from "./components/middleware/AdminRouteMiddleware";
import DashboardComponent from "./components/admin/DashboardComponent";
import RegisterComponent from "./components/auth/RegisterComponent";
import ShowUsersComponent from "./components/admin/ShowUsersComponent";



function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/login" element={<LoginComponent />} />
      <Route path="/admin" element={<AdminRouteMiddleware />} />
      <Route path="/admin/dashboard" element={<DashboardComponent />} />
      <Route path="/register" element={<RegisterComponent />} />
      <Route path="/admin/show-users" element={<ShowUsersComponent />} />
      
    </Routes>
  );
}

export default RouterComponent;
