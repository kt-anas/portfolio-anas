"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { worksData, workCategories } from "@/src/_data/works-data";
import type { WorkCategory } from "@/src/_data/works-data";
import { MagneticButton } from "../FlotButton";

const ITEMS_PER_PAGE = 6;

export default function AllWorksPage() {
    const [activeCategory, setActiveCategory] = useState<WorkCategory>("All");
    const [currentPage, setCurrentPage] = useState(0);
    const gridRef = useRef<HTMLDivElement>(null);

    const filtered =
        activeCategory === "All"
            ? worksData
            : worksData.filter((w) => w.category === activeCategory);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const pageItems = filtered.slice(
        currentPage * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    const handleCategory = (cat: WorkCategory) => {
        setActiveCategory(cat);
        setCurrentPage(0);
    };

    const handlePrev = () => {
        if (currentPage > 0) setCurrentPage((p) => p - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
    };

    return (
        <main className="works-page min-h-screen bg-white] border-b border-black/10">
            {/* ── TOP BAR ── */}
            <div className="works-topbar container-fluid flex flex-wrap items-center gap-y-3 py-8 border-b border-black/10">
                <h1 className="works-heading text-[clamp(2rem,5vw,3.5rem)] font-normal tracking-tighter uppercase mr-8 leading-none">
                    All Works
                </h1>

                {/* Category filters */}
                <nav className="works-filters flex flex-wrap items-center gap-3 flex-1" aria-label="Work categories">
                    {workCategories.slice(1).map((cat) => (
                        <MagneticButton
                            key={cat}
                            onClick={() => handleCategory(cat)}
                            className={`works-filter-btn text-[13px] tracking-widest uppercase font-medium px-3 py-1 border transition-all duration-300 ${activeCategory === cat
                                ? "border-black bg-black text-white"
                                : "border-black/30 text-black/60 hover:border-black hover:text-black"
                                }`}
                        >
                            {cat}
                        </MagneticButton>
                    ))}
                    {activeCategory !== "All" && (
                        <MagneticButton
                            onClick={() => handleCategory("All")}
                            className="text-[12px] tracking-widest uppercase text-black/40 underline underline-offset-4 hover:text-black transition-colors"
                        >
                            clear
                        </MagneticButton>
                    )}
                </nav>

                {/* Pagination arrows */}
                <div className="flex items-center gap-4 ml-auto">
                    <span className="text-[13px] text-black/40 font-medium">
                        {currentPage + 1} / {totalPages || 1}
                    </span>

                    <MagneticButton
                        className="works-arrow w-10 h-10 flex items-center justify-center border border-black/30 disabled:opacity-20 hover:bg-black hover:text-white transition-all duration-300"
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        aria-label="Previous page"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </MagneticButton>


                    <MagneticButton
                        className="works-arrow w-10 h-10 flex items-center justify-center border border-black/30 disabled:opacity-20 hover:bg-black hover:text-white transition-all duration-300"
                        onClick={handleNext}
                        disabled={currentPage >= totalPages - 1}
                        aria-label="Next page"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </MagneticButton>
                </div>
            </div>

            {/* ── GRID ── */}
            <div ref={gridRef} className="works-grid container-fluid py-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory + currentPage}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        {pageItems.map((work, i) => (
                            <motion.article
                                key={work.id}
                                className="works-card  group relative overflow-hidden bg-[#ffffff] cursor-none"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                data-cursor="white"
                                data-cursor-label="View"
                            >
                                {/* Image */}
                                <div
                                    className="works-card-img relative overflow-hidden"
                                    style={{
                                        backgroundColor: work.bgColor,
                                        aspectRatio: "4/3",
                                    }}
                                >
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                    />

                                    {/* Dark overlay on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />

                                    {/* Year badge */}
                                    {/* <span className="absolute top-4 right-4 text-[11px] font-medium tracking-widest uppercase bg-white/90 text-black px-2 py-1">
                                        {work.year}
                                    </span> */}
                                </div>

                                {/* Meta */}
                                <div className="works-card-meta py-6 flex items-end justify-between border-t border-black/10">
                                    <div>

                                        <h2 className="text-[22px] font-medium leading-tight tracking-tight">
                                            {work.title}
                                        </h2>
                                        <p className="text-[14px] text-black/50 mt-0.5">{work.subtitle}</p>
                                    </div>

                                    {/* Arrow */}
                                    {/* <div className="works-card-arrow shrink-0 w-10 h-10 flex items-center justify-center border border-black/20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div> */}
                                </div>

                                {/* Tags */}
                                {/* <div className="flex flex-wrap gap-1.5 px-6 pb-5">
                                    {work.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] tracking-widest uppercase text-black/40 border border-black/15 px-2 py-0.5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div> */}
                            </motion.article>
                        ))}

                        {/* Empty state */}
                        {pageItems.length === 0 && (
                            <div className="col-span-3 py-32 text-center text-black/30 text-xl">
                                No projects in this category yet.
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ── BOTTOM BAR ── */}
            {/* <div className="container-fluid border-t border-black/10 py-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-[13px] tracking-widest uppercase text-black/50 hover:text-black transition-colors flex items-center gap-2"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Home
                </Link>
                <span className="text-[12px] tracking-wider text-black/30 uppercase">
                    {filtered.length} Project{filtered.length !== 1 ? "s" : ""}
                </span>
            </div> */}
        </main>
    );
}
