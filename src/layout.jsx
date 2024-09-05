/* eslint-disable react/prop-types */
import Nav, { AdminNav } from "./components/Nav";
import { Outlet } from "react-router-dom";

export function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Outlet />
      {children}
    </div>
  );
}

export function AuthLayout({ children }) {
  return (
    <div>
      <AdminNav />
      <Outlet />
      {children}
    </div>
  );
}
