/* eslint-disable react/prop-types */
import Nav from "./components/Nav";
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
