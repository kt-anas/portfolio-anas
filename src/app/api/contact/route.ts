import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const accessKey =
            process.env.WEB3FORMS_ACCESS_KEY ||
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
            "f6de184d-928e-4220-b2f9-20cf69e89ae3";

        if (!accessKey) {
            return NextResponse.json(
                { success: false, message: "Web3Forms Access Key is not configured." },
                { status: 500 }
            );
        }

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

        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            const data = await response.json();
            return NextResponse.json(data, { status: response.status });
        } else {
            const errorText = await response.text();
            console.error("Web3Forms non-JSON response:", errorText);
            return NextResponse.json(
                { success: false, message: "External email service error. Please try again or reach out on WhatsApp." },
                { status: response.status || 500 }
            );
        }
    } catch (error: any) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { success: false, message: error?.message || "Server error sending message" },
            { status: 500 }
        );
    }
}
