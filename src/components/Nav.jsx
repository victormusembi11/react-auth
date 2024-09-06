/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Nav({ links }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
        {token ? (
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export function MainNav() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];
  return <Nav links={links} />;
}

export function AdminNav() {
  const links = [{ path: "/admin/dashboard", label: "Dashboard" }];
  return <Nav links={links} />;
}

export function UserNav() {
  const links = [{ path: "/user/dashboard", label: "Dashboard" }];
  return <Nav links={links} />;
}
