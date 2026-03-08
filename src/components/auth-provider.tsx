"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

export type UserRole = "agent" | "assistant" | null;

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      // Mock API call - replace with actual backend verification
      const response = await fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        localStorage.removeItem("auth_token");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock API call - replace with actual backend login
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("auth_token", data.token);
      setUser(data.user);

      // Redirect based on role from backend
      if (data.user.role === "agent") {
        router.push("/agent/dashboard");
      } else if (data.user.role === "assistant") {
        router.push("/assistant/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("auth_token");
      setUser(null);
      router.push("/auth/login");
    }
  };

  // Mock login for development (remove in production)
  const mockLogin = async (email: string, _password: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Determine role based on email pattern for testing
    let role: UserRole = "agent";
    if (email.includes("assistant")) {
      role = "assistant";
    }
    
    const mockUser: User = {
      id: "1",
      email,
      name: email.split("@")[0],
      role,
    };
    
    localStorage.setItem("auth_token", "mock_token");
    setUser(mockUser);
    setIsLoading(false);
    
    // Redirect based on role
    if (role === "agent") {
      router.push("/agent/dashboard");
    } else {
      router.push("/assistant/dashboard");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login: mockLogin, // Use mockLogin for development
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Return default values during SSR when provider isn't available yet
    return {
      user: null,
      isLoading: true,
      isAuthenticated: false,
      login: async () => {},
      logout: async () => {},
      checkAuth: async () => {},
    };
  }
  return context;
}

export function useRequireAuth(role?: UserRole) {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth/login");
    }
    
    if (!isLoading && isAuthenticated && role && user?.role !== role) {
      // Redirect to appropriate dashboard if role doesn't match
      if (user?.role === "agent") {
        router.push("/agent/dashboard");
      } else if (user?.role === "assistant") {
        router.push("/assistant/dashboard");
      }
    }
  }, [isLoading, isAuthenticated, user, role, router]);

  return { user, isLoading };
}
