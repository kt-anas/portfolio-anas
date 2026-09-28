import type { Metadata } from "next";

import AboutMe from "@/src/_components/AboutMe";

export const metadata: Metadata = {
    title: "About — Muhammed Anas",
    description: "Muhammed Anas is a Web Developer & Designer specializing in React, Next.js, WordPress, Framer, and modern web experiences.",
};


export default function WorksPage() {
    return <AboutMe />;
}
