import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const accessKey = process.env.WEB3FORMS_ACCESS_KEY;


        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                ...body,
            }),
        });

        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { success: false, message: "Server error sending message" },
            { status: 500 }
        );
    }
}
