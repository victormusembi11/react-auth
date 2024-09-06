import type { Metadata } from "next";

import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for the Next.js implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
