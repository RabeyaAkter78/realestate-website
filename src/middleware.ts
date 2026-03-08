import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This middleware handles route protection
// In a real production app, you would verify JWT tokens here
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get auth token from cookies or headers
  const token = request.cookies.get("auth_token")?.value;

  // Define protected route patterns
  const isAgentRoute = pathname.startsWith("/agent");
  const isAssistantRoute = pathname.startsWith("/assistant");
  const isAuthRoute = pathname.startsWith("/auth");

  // If accessing protected routes without auth, redirect to login
  if ((isAgentRoute || isAssistantRoute) && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If authenticated user tries to access auth pages, redirect to dashboard
  if (isAuthRoute && token) {
    // In production, you would decode the token to determine the role
    // For now, we'll redirect to agent dashboard by default
    return NextResponse.redirect(new URL("/agent/dashboard", request.url));
  }

  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    "/agent/:path*",
    "/assistant/:path*",
    "/auth/:path*",
  ],
};
