import axiosInstance from "../../utils/axios";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const login = async (credentials) => {
  const response = await axiosInstance.post("/users/login", credentials);
  return response.data;
};

export default function Login() {
  const navigate = useNavigate();

  const { mutateAsync, isError, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const token = localStorage.setItem("token", data.token);
      const decodedToken = jwtDecode(token);

      if (decodedToken.role === "ADMIN") {
        navigate("/admin/dashboard");
        return;
      }

      if (decodedToken.role === "USER") {
        navigate("/user/dashboard");
        return;
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const credentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    await mutateAsync(credentials);
  };

  return (
    <div>
      <h1>Login</h1>

      {isError && <p>{error.message}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
