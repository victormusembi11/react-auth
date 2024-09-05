/* eslint-disable react/prop-types */
import Nav, { AdminNav } from "./components/Nav";
import { Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Outlet />
      {children}
    </div>
  );
}

const ProtectedRoute = ({ role }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login?error_message=login to view page" />;
  }

  const decodedToken = jwtDecode(token);

  if (decodedToken.role !== role) {
    return <Navigate to="/login?error_message=login to view page" />;
  }

  return <Outlet />;
};

export function AuthAdminLayout({ children }) {
  return (
    <div>
      <AdminNav />
      <ProtectedRoute role="ADMIN" />
      {children}
    </div>
  );
}

export function AuthUserLayout({ children }) {
  return (
    <div>
      <AdminNav />
      <ProtectedRoute role="USER" />
      {children}
    </div>
  );
}
