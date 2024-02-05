import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const { pathname } = request.nextUrl
  try {
    let cookies = request.cookies.get("jwt-token")?.value;
    if (!cookies || cookies.startsWith("Bearer")) {

      throw new Error("Invalid token")
    }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    await jwtVerify(cookies.splite("Bearer")[1], secret)
    return NextResponse.next();

  } catch (error) {
    return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`, request.url));

  }
}

export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*"],
};
