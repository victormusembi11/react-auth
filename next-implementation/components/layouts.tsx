"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Nav from "@/components/nav";

function AuthLayout({ children, requiredRole }: { children: React.ReactNode; requiredRole: string }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken: { userId: string; role: string } = jwtDecode(token);
        if (decodedToken.role !== requiredRole) {
          router.push("/login");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  }, [router, requiredRole]);

  return <>{children}</>;
}

export default AuthLayout;
