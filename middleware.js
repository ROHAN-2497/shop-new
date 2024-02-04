import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  // return NextResponse.redirect(new URL("/home", request.url));
  try {
    let cookies = request.cookies.get("jwt-token")?.value;
    if (!cookies || cookies.startsWith("Bearer")) {

      throw new Error("Invalid token")
    }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    await jwtVerify(jwt, secret)
    return NextResponse.next();

  } catch (error) {

  }
}

export const config = {
  matcher: ["/profile/:path*", "/dashboard/:path*"],
};
