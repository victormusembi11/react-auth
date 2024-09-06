import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        {token ? (
          <>
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
          </>
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export function AdminNav() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <a href="/admin/dashboard">Dashboard</a>
        </li>
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
      </ul>
    </nav>
  );
}

export function UserNav() {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <a href="/user/dashboard">Dashboard</a>
        </li>
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
      </ul>
    </nav>
  );
}
