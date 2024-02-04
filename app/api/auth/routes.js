const { SignJWT } = require("jose");
const { cookies } = require("next/headers");
const { NextResponse } = require("next/server");

const POST = async (request) => {
    const body = await request.json();
    const secret = new TextEncoder().encode(process.env.jwt_secret)
    const alg = 'HS256'

    const jwt = await new SignJWT(body)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('1000d')
        .sign(secret)

    cookies().set({
        name: "jwt-token",
        value: `Bearer ${jwt}`,
        secure: true,
        httpOnly: true,
    });
    return NextResponse.json({nessage: 'token created'})

    console.log(jwt)
}