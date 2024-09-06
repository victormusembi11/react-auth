import type { Metadata } from "next";

import AuthLayout from "@/components/layouts";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "User dashboard for the Next.js implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthLayout requiredRole="USER">{children}</AuthLayout>;
}
