"use client";
import axiosInstance from "@/utils/axios";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation"; // Updated import

const login = async (credentials: { email: string; password: string }) => {
  const response = await axiosInstance.post("/users/login", credentials);
  return response.data;
};

export default function Page() {
  const router = useRouter();
  const { mutateAsync, isError, error } = useMutation({
    mutationFn: login,
    onSuccess: (data: { token: string }) => {
      localStorage.setItem("token", data.token);
      router.push("/admin/dashboard");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await mutateAsync({ email, password });
  };

  return (
    <div>
      <h1>Login Page</h1>

      {isError && <p>{error.message}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
