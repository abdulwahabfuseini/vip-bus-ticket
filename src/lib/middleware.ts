import { IUser } from "@/contexts/Types";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = { matcher: ["/protected-route", "/admin-route"] }; 

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (!req.nextauth.token) {
      const url = req.nextUrl.clone();
      url.pathname = "/login"; // Redirect to login page
      return NextResponse.redirect(url);
    }

    const userRole = (req.nextauth.token.user as IUser).role;
    const pathname = req.nextUrl.pathname;

    // Role-based access control
    if (pathname.startsWith("/admin-route") && userRole !== "ADMIN") {
      const url = req.nextUrl.clone();
      url.pathname = "/unauthorized"; // Redirect to an unauthorized page
      return NextResponse.redirect(url);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Allow access if a valid token exists
    },
  }
);