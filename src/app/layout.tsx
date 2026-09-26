import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import Header from "@/src/_components/Header";
import { Offcanvas } from "@/src/_components/offcanvas";
import CursorFollower from "../_components/CursorFollower";
import Footer from "../_components/Footer";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    display: "swap",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    preload: true,
});
export const metadata: Metadata = {
    title: "Muhammed Anas — Web Developer",
    description:
        "Muhammed Anas is a Web Developer & Designer specializing in React, Next.js, WordPress, Framer, and modern web experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en">
            <body className={`${spaceGrotesk.variable} antialiased`}>
                <CursorFollower />
                <Header />
                <Offcanvas />
                {children}
                <Footer />
            </body>
        </html>
    );
}
