import type { Metadata } from "next";
import ContactPage from "@/src/_components/ContactPage/ContactPage";

export const metadata: Metadata = {
    title: "Contact — Muhammed Anas",
    description:
        "Get in touch with Muhammed Anas — Web Developer & Designer. Let’s start a conversation about your project, idea, or collaboration.",
};

export default function Page() {
    return <ContactPage />;
}
