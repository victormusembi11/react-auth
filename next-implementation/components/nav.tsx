"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {token ? (
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setToken(null);
                router.push("/login");
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
