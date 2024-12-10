import axios from "axios";

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { handleTokenRefresh } from "./app/utils/actions";
import { jwtDecode } from "jwt-decode";

// export { auth as middleware } from "@/auth";
// import { auth } from "@/auth";

console.log(process.env.NEXT_BASE_URL);
export const myAxios = axios.create({
  baseURL: process.env.NEXT_BASE_URL || "http://localhost:8000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// middleware.ts

export async function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = request.nextUrl.pathname;

  // Define paths that are public (accessible without authentication)
  const isPublicPath = path === "/login" || path === "/register";

  // Get the access token from the cookies
  const accessToken = request.cookies.get("_session-bingebox-access")?.value;
  const refreshToken = request.cookies.get("_session-bingebox-refresh")?.value;

  if (!accessToken && refreshToken) {
    try {
      const response = await handleTokenRefresh(refreshToken);
      if (response.status === 200) {
        return NextResponse.next();
      }
    } catch {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  // If trying to access a public path and already logged in, redirect to dashboard
  if (isPublicPath && accessToken) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  // If trying to access a protected route without a token, redirect to login
  if (!isPublicPath && !accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If token exists but might be expired, attempt to refresh before accessing protected route
  if (accessToken && !isPublicPath) {
    try {
      // Decode the token to check expiration
      const decodedToken = jwtDecode(accessToken);
      const currentTime = Math.floor(Date.now() / 1000);

      // If token is close to expiration or already expired
      if (decodedToken.exp && decodedToken.exp < currentTime - 1000) {
        if (refreshToken) {
          const refreshResult = await handleTokenRefresh(refreshToken);

          if (refreshResult.status === 200) {
            // Token refresh successful, continue with the request
            return NextResponse.next();
          }
        }

        // If refresh fails, redirect to login
        return NextResponse.redirect(new URL("/login", request.url));
      }
    } catch (error) {
      // Error decoding token or refreshing
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // If token exists and trying to access a protected route, allow the request
    return NextResponse.next();
  }
}

// Specify which routes this middleware should run on
export const config = {
  matcher: ["/login", "/register", "/profile/:path*"],
};

// export default auth((req) => {
//   console.log(req);
//   if (!req.auth && req.nextUrl.pathname === "/profile") {
//     const newUrl = new URL("/login", req.nextUrl.origin);
//     return Response.redirect(newUrl);
//   }
// });
