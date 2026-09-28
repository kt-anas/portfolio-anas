import type { Metadata } from "next";
import AllWorksPage from "@/src/_components/AllWorksPage/AllWorksPage";

export const metadata: Metadata = {
    title: "All Works — Muhammed Anas",
    description:
        "Browse all projects by Muhammed Anas — React / Next.js, WordPress, Framer, and Playground experiments.",
};

export default function WorksPage() {
    return <AllWorksPage />;
}
