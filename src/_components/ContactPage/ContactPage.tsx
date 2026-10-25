"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Copy, CheckCheck, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

interface FormData {
    name: string;
    email: string;
    company: string;
    services: string[];
    budget: string;
    message: string;
}

const SERVICES_OPTIONS = [
    "Shopify",
    "Next.js / React",
    "Webflow/Framer",
    "UI/UX Design",


];

const BUDGET_OPTIONS = [
    "< $1,000",
    "$1,000 – $3,000",
    "$3,000 – $5,000",
    "$5,000+",
];

export default function ContactPage() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        company: "",
        services: [],
        budget: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const emailAddress = "muhanaskt@gmail.com";
    const whatsappUrl = "https://wa.me/917909109268?text=Hi%20Anas%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!";

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } catch {
            window.location.href = `mailto:${emailAddress}`;
        }
    };

    const validateStep1 = () => {
        const newErrors: { name?: string; email?: string } = {};
        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email address";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNextStep = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    const toggleService = (service: string) => {
        setFormData((prev) => {
            const exists = prev.services.includes(service);
            return {
                ...prev,
                services: exists
                    ? prev.services.filter((s) => s !== service)
                    : [...prev.services, service],
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Smooth simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(3);
        }, 600);
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            company: "",
            services: [],
            budget: "",
            message: "",
        });
        setErrors({});
        setStep(1);
    };

    return (
        <main className="min-h-screen bg-[#FFFFFF] text-black pt-12 pb-24 md:pt-20 md:pb-32 selection:bg-black selection:text-white">
            <div className="container-fluid max-w-5xl mx-auto px-4 sm:px-6">
                {/* ── TOP SECTION: DISPLAY TITLE & QUICK LINKS ── */}
                <div className="text-center flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(3.2rem,10vw,8.5rem)] font-light tracking-[-0.03em] uppercase leading-none text-black select-none"
                    >
                        GET IN TOUCH
                    </motion.h1>

                    {/* Email and WhatsApp quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 sm:mt-8 flex flex-col items-center gap-2.5"
                    >
                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="group inline-flex items-center gap-2 text-[11px] sm:text-[13px] tracking-[0.22em] uppercase font-medium text-black/70 hover:text-black transition-colors cursor-pointer"
                            title="Click to copy email"
                        >
                            <span>{emailAddress.toUpperCase()}</span>
                            {copiedEmail ? (
                                <span className="inline-flex items-center text-[10px] lowercase tracking-normal text-emerald-600 font-semibold gap-1">
                                    <CheckCheck size={13} /> copied!
                                </span>
                            ) : (
                                <Copy
                                    size={12}
                                    className="opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all duration-200"
                                />
                            )}
                        </button>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] sm:text-[12px] tracking-[0.25em] uppercase font-medium text-black/75 hover:text-black hover:underline underline-offset-4 transition-colors"
                        >
                            CHAT IN WHATSAPP
                        </a>
                    </motion.div>
                </div>

                {/* ── CENTER CARD: FORM BOX ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 sm:mt-16 md:mt-20 max-w-[680px] w-full mx-auto"
                >
                    <div className="border border-[#E2E2E2] bg-[#F4F4F4] p-6 sm:p-10 md:p-14 relative">
                        {/* CARD HEADING */}
                        <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-black/10">
                            <h2 className="text-xl sm:text-2xl md:text-[1.75rem] font-normal tracking-[-0.02em] uppercase text-black leading-snug">
                                LET’S START A CONVERSATION
                            </h2>
                            {step < 3 && (
                                <span className="text-[11px] tracking-[0.2em] uppercase text-black/40 font-mono">
                                    0{step} / 02
                                </span>
                            )}
                        </div>

                        {/* STEP CONTENT WITH ANIMATION */}
                        <AnimatePresence mode="wait">
                            {/* ── STEP 1: PERSONAL INFORMATION ── */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 15 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="pt-8 sm:pt-10 flex flex-col gap-7 sm:gap-8"
                                >
                                    {/* YOUR NAME */}
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="name"
                                            className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/60 mb-2"
                                        >
                                            YOUR NAME
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value });
                                                if (errors.name) setErrors({ ...errors, name: undefined });
                                            }}
                                            placeholder="John Doe"
                                            className={`w-full bg-transparent border-b py-2 text-base sm:text-lg text-black placeholder:text-black/25 focus:outline-none transition-colors duration-200 ${errors.name
                                                ? "border-red-500"
                                                : "border-black/20 focus:border-black"
                                                }`}
                                        />
                                        {errors.name && (
                                            <span className="text-xs text-red-500 mt-1.5">{errors.name}</span>
                                        )}
                                    </div>

                                    {/* EMAIL */}
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="email"
                                            className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/60 mb-2"
                                        >
                                            EMAIL
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value });
                                                if (errors.email) setErrors({ ...errors, email: undefined });
                                            }}
                                            placeholder="john@example.com"
                                            className={`w-full bg-transparent border-b py-2 text-base sm:text-lg text-black placeholder:text-black/25 focus:outline-none transition-colors duration-200 ${errors.email
                                                ? "border-red-500"
                                                : "border-black/20 focus:border-black"
                                                }`}
                                        />
                                        {errors.email && (
                                            <span className="text-xs text-red-500 mt-1.5">{errors.email}</span>
                                        )}
                                    </div>

                                    {/* COMPANY NAME (OPTIONAL) */}
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="company"
                                            className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/60 mb-2"
                                        >
                                            COMPANY NAME (OPTIONAL)
                                        </label>
                                        <input
                                            id="company"
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) =>
                                                setFormData({ ...formData, company: e.target.value })
                                            }
                                            placeholder="Acme Inc."
                                            className="w-full bg-transparent border-b border-black/20 py-2 text-base sm:text-lg text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors duration-200"
                                        />
                                    </div>

                                    {/* NEXT STEP BUTTON WITH EXTENDING LINE */}
                                    <div className="pt-6 sm:pt-8 mt-2">
                                        <button
                                            type="button"
                                            onClick={handleNextStep}
                                            className="group w-full flex items-center text-left cursor-pointer focus:outline-none"
                                        >
                                            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-black whitespace-nowrap group-hover:text-black/70 transition-colors flex items-center gap-2">
                                                NEXT STEP
                                                <ArrowRight
                                                    size={14}
                                                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                                                />
                                            </span>
                                            {/* Clean continuous rule line matching the screenshot */}
                                            <div className="ml-4 flex-1 h-[1px] bg-black/20 group-hover:bg-black transition-colors duration-300" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* ── STEP 2: PROJECT DETAILS & MESSAGE ── */}
                            {step === 2 && (
                                <motion.form
                                    key="step2"
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0, x: 15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -15 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="pt-8 sm:pt-10 flex flex-col gap-7 sm:gap-8"
                                >
                                    {/* SERVICES REQUIRED */}
                                    <div className="flex flex-col">
                                        <label className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/60 mb-3 block">
                                            WHAT ARE YOU LOOKING FOR?
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {SERVICES_OPTIONS.map((srv) => {
                                                const selected = formData.services.includes(srv);
                                                return (
                                                    <button
                                                        key={srv}
                                                        type="button"
                                                        onClick={() => toggleService(srv)}
                                                        className={`text-xs uppercase tracking-wider px-3.5 py-1.5 border transition-all duration-200 cursor-pointer ${selected
                                                            ? "bg-black text-white border-black font-medium"
                                                            : "bg-transparent text-black/75 border-black/20 hover:border-black hover:text-black"
                                                            }`}
                                                    >
                                                        {srv}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* BUDGET */}
                                    <div className="flex flex-col">
                                        <label className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/60 mb-3 block">
                                            ESTIMATED BUDGET
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            {BUDGET_OPTIONS.map((b) => {
                                                const selected = formData.budget === b;
                                                return (
                                                    <button
                                                        key={b}
                                                        type="button"
                                                        onClick={() =>
                                                            setFormData({
                                                                ...formData,
                                                                budget: selected ? "" : b,
                                                            })
                                                        }
                                                        className={`text-xs uppercase tracking-wider py-2 px-2 text-center border transition-all duration-200 cursor-pointer ${selected
                                                            ? "bg-black text-white border-black font-medium"
                                                            : "bg-transparent text-black/75 border-black/20 hover:border-black hover:text-black"
                                                            }`}
                                                    >
                                                        {b}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* MESSAGE */}
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="message"
                                            className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/60 mb-2"
                                        >
                                            YOUR MESSAGE / PROJECT OVERVIEW
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            placeholder="Tell me about your goals, timeline, or requirements..."
                                            className="w-full bg-transparent border-b border-black/20 py-2 text-base text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors duration-200 resize-none"
                                        />
                                    </div>

                                    {/* ACTIONS: BACK & SUBMIT */}
                                    <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-black/60 hover:text-black transition-colors cursor-pointer"
                                        >
                                            <ArrowLeft size={14} />
                                            <span>PREVIOUS STEP</span>
                                        </button>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group flex-1 sm:flex-initial flex items-center justify-end text-right cursor-pointer focus:outline-none"
                                        >
                                            <div className="hidden sm:block mr-4 w-24 h-[1px] bg-black/20 group-hover:bg-black transition-colors duration-300" />
                                            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-black group-hover:text-black/70 transition-colors flex items-center gap-2">
                                                {isSubmitting ? "SENDING..." : "SUBMIT INQUIRY"}
                                                <Send
                                                    size={13}
                                                    className={`transition-transform duration-300 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"
                                                        }`}
                                                />
                                            </span>
                                        </button>
                                    </div>
                                </motion.form>
                            )}

                            {/* ── STEP 3: SUCCESS STATE ── */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="py-12 sm:py-16 text-center flex flex-col items-center"
                                >
                                    <div className="w-14 h-14 rounded-full border border-black flex items-center justify-center mb-6">
                                        <Check size={24} className="text-black" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-normal uppercase tracking-tight text-black mb-3">
                                        THANK YOU, {formData.name || "FRIEND"}!
                                    </h3>
                                    <p className="text-sm text-black/60 max-w-md mx-auto leading-relaxed mb-8">
                                        Your message has been received. I’ll review your project details and get back to you within 24 hours.
                                    </p>

                                    <div className="flex flex-wrap items-center justify-center gap-4">
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="text-xs uppercase tracking-widest px-5 py-2.5 border border-black/25 text-black hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                                        >
                                            SEND ANOTHER MESSAGE
                                        </button>
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs uppercase tracking-widest px-5 py-2.5 bg-black text-white hover:bg-black/80 transition-all duration-300 flex items-center gap-2"
                                        >
                                            <MessageCircle size={14} />
                                            <span>CHAT ON WHATSAPP</span>
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
