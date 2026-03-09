import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/auth-provider";
import { MainNavbar } from "@/components/main-navbar";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-opensans",
});


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300","400","500","600","700"],
});
export const metadata: Metadata = {
  title: "InstaSignTracker - Real Estate Sign Management",
  description: "Streamline your real estate sign management with our innovative tracking solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <ThemeProvider>
          <AuthProvider>
            <MainNavbar />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
