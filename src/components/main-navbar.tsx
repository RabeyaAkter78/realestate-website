"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sun, Moon, User, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "@/components/theme-provider";
import { useAuth } from "@/components/auth-provider";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About us" },
];

export function MainNavbar() {
  const pathname = usePathname();
  const { theme, resolvedTheme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Map/land shape */}
                <path
                  d="M5 30 L10 25 L15 28 L20 22 L25 25 L30 20 L35 25 L35 35 L5 35 Z"
                  fill="#4CAF50"
                />
                {/* House */}
                <path
                  d="M12 25 L20 15 L28 25 L26 25 L26 35 L14 35 L14 25 Z"
                  fill="#E53935"
                />
                {/* Roof */}
                <path
                  d="M10 25 L20 13 L30 25"
                  stroke="#C62828"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Door */}
                <rect x="17" y="28" width="6" height="7" fill="#5D4037" />
                {/* Window */}
                <rect x="15" y="22" width="4" height="4" fill="#FFF" />
                <rect x="21" y="22" width="4" height="4" fill="#FFF" />
                {/* Location pin */}
                <circle cx="32" cy="12" r="5" fill="#1E88E5" />
                <path
                  d="M32 7 L32 12 L35 12"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-primary hidden sm:inline-block">
              <span className="text-[#1E88E5]">Insta</span>
              <span className="text-[#E53935]">Sign</span>
              <span className="text-[#1E88E5]">Tracker</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user?.name?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{user?.name}</span>
                      <span className="text-xs text-muted-foreground">{user?.email}</span>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={user?.role === "agent" ? "/agent/dashboard" : "/assistant/dashboard"}>
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hidden sm:inline-flex"
                >
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button size="sm" asChild className="hidden sm:inline-flex">
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-2 px-2">
                    <svg
                      viewBox="0 0 40 40"
                      className="w-8 h-8"
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
                    <span className="font-bold text-lg">
                      <span className="text-[#1E88E5]">Insta</span>
                      <span className="text-[#E53935]">Sign</span>
                      <span className="text-[#1E88E5]">Tracker</span>
                    </span>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          pathname === item.href
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="border-t pt-4 flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleTheme}
                      className="justify-start"
                    >
                      {resolvedTheme === "dark" ? (
                        <>
                          <Sun className="mr-2 h-4 w-4" /> Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="mr-2 h-4 w-4" /> Dark Mode
                        </>
                      )}
                    </Button>
                    {!isAuthenticated && (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                            Sign In
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                            Sign Up
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
