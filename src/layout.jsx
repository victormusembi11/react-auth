/* eslint-disable react/prop-types */
import Nav, { AdminNav } from "./components/Nav";
import { Outlet, Navigate } from "react-router-dom";

export function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Outlet />
      {children}
    </div>
  );
}

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/login?error_message=login to view page" />;
};

export function AuthLayout({ children }) {
  return (
    <div>
      <AdminNav />
      <ProtectedRoute />
      {children}
    </div>
  );
}
