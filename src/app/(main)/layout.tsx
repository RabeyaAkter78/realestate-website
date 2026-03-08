"use client";

import { MainNavbar } from "@/components/main-navbar";
import { MainFooter } from "@/components/main-footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <main className="flex-1">{children}</main>
      <MainFooter />
    </div>
  );
}
