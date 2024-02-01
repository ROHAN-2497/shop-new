import { NextResponse } from "next/server";

export function middleware(request) {
  // return NextResponse.redirect(new URL("/home", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*"],
};
