"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Image */}
      <div className="hidden lg:block relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome to InstaSignTracker</h2>
          <p className="text-white/80">
            The smart way to manage your real estate signs and track your listings.
          </p>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col">
        {/* Back button */}
        <div className="p-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </div>

        {/* Auth content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 lg:px-16">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 30 L10 25 L15 28 L20 22 L25 25 L30 20 L35 25 L35 35 L5 35 Z"
                  fill="#4CAF50"
                />
                <path
                  d="M12 25 L20 15 L28 25 L26 25 L26 35 L14 35 L14 25 Z"
                  fill="#E53935"
                />
                <path
                  d="M10 25 L20 13 L30 25"
                  stroke="#C62828"
                  strokeWidth="2"
                  fill="none"
                />
                <rect x="17" y="28" width="6" height="7" fill="#5D4037" />
                <rect x="15" y="22" width="4" height="4" fill="#FFF" />
                <rect x="21" y="22" width="4" height="4" fill="#FFF" />
                <circle cx="32" cy="12" r="5" fill="#1E88E5" />
                <path
                  d="M32 7 L32 12 L35 12"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <span className="text-xl font-bold">
                <span className="text-[#1E88E5]">Insta</span>
                <span className="text-[#E53935]">Sign</span>
                <span className="text-[#1E88E5]">Tracker</span>
              </span>
            </div>
            
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 text-center">
          <p className="text-xs text-muted-foreground">
            By joining, you agree to the{" "}
            <Link href="#" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and Please read our{" "}
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            to learn how we use your personal data.
          </p>
        </div>
      </div>
    </div>
  );
}
