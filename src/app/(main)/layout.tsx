"use client";

import { MainFooter } from "@/components/main-footer";
import { MainNavbar } from "@/components/main-navbar";

// import { MainNavbar } from "@/components/main-navbar";
// import { MainFooter } from "@/components/main-footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       <MainNavbar />
        {children}
        <MainFooter />
    </div>
  );
}
