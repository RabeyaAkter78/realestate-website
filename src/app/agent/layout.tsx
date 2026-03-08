"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  Menu,
  ChevronDown,
  LogOut,
  Sun,
  Moon,
  MapPin,
} from "lucide-react";
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
import { useAuth, useRequireAuth } from "@/components/auth-provider";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { href: "/agent/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/agent/assistants", icon: Users, label: "Manage Assistants" },
  { href: "/agent/signs", icon: MapPin, label: "Signs" },
  { href: "/agent/settings", icon: Settings, label: "Settings" },
];

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useRequireAuth("agent");
  const { resolvedTheme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-muted/30">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/agent/dashboard" className="flex items-center gap-2">
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
              <circle cx="32" cy="12" r="5" fill="#1E88E5" />
            </svg>
            <span className="font-bold text-lg">
              <span className="text-[#1E88E5]">Insta</span>
              <span className="text-[#E53935]">Sign</span>
              <span className="text-[#1E88E5]">Tracker</span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="w-full justify-start mb-2"
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
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 flex items-center px-4 lg:px-6">
          {/* Mobile menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <div className="h-16 flex items-center px-6 border-b">
                <Link 
                  href="/agent/dashboard" 
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
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
                    <circle cx="32" cy="12" r="5" fill="#1E88E5" />
                  </svg>
                  <span className="font-bold">
                    <span className="text-[#1E88E5]">Insta</span>
                    <span className="text-[#E53935]">Sign</span>
                    <span className="text-[#1E88E5]">Tracker</span>
                  </span>
                </Link>
              </div>
              <nav className="p-4 space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <span className="lg:hidden font-bold mr-auto">
            Agent Portal
          </span>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user?.name?.charAt(0).toUpperCase() || "A"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user?.name?.charAt(0).toUpperCase() || "A"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{user?.name}</span>
                    <span className="text-xs text-muted-foreground">{user?.email}</span>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/agent/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
