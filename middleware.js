import { NextResponse } from "next/server";

export function middleware(request) {
  // return NextResponse.redirect(new URL("/home", request.url));
  try {
    let cookies = request.cookies.get("jwt-token")?.value;
    if (!cookies || cookies.startsWith("Bearer")) throw new Error("Invalid token")
  } catch (error) {

  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*"],
};
