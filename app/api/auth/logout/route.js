const { NextResponse } = require("next/server");

const POST = async (request) => {
    const res = new NextResponse(
        JSON.stringify({
            message: "Logout SuccessFully"
        })
    );
    res.cookies.get("jwt-token", "", {
        expires: new Date(Date.now())
    });

    return res;
}