'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

import type { Work } from '@/src/_data/works-data';

interface ProjectModalProps {
    work: Work | null;
    onClose: () => void;
}

export function ProjectModal({ work, onClose }: ProjectModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!work) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [work, onClose]);

    return (
        <AnimatePresence>
            {work && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) onClose();
                    }}
                >
                    <motion.section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-modal-title"
                        className="relative max-h-[94vh] w-full max-w-7xl overflow-y-auto bg-white text-black shadow-2xl sm:max-h-[90vh] sm:rounded-sm"
                        initial={{ opacity: 0, y: 60, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={onClose}
                            aria-label="Close project details"
                            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white/90 text-black shadow-sm backdrop-blur transition hover:rotate-90 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                        >
                            <X size={19} strokeWidth={1.5} />
                        </button>

                        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                            <div
                                className="relative min-h-70 overflow-hidden p-4 sm:min-h-105 sm:p-6 lg:h-160 lg:p-8"
                                style={{ backgroundColor: work.bgColor }}
                            >
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-12">
                                <div>
                                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-black/45">
                                        {work.category} · {work.year}
                                    </p>
                                    <h2
                                        id="project-modal-title"
                                        className="max-w-md text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.95] tracking-[-0.055em]"
                                    >
                                        {work.title}
                                    </h2>
                                    <p className="mt-4 text-[15px] text-black/55">
                                        {work.subtitle}
                                    </p>

                                    <p className="mt-8 max-w-md text-[15px] leading-7 text-black/70">
                                        {work.description}
                                    </p>

                                    <div className="mt-9">
                                        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-black/40">
                                            Technologies
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {work.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="border border-black/20 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {work.link && (
                                    <a
                                        href={work.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-10 inline-flex w-fit items-center gap-3 border-b border-black pb-1 text-[12px] font-medium uppercase tracking-[0.16em] transition hover:gap-5"
                                    >
                                        Visit project
                                        <ArrowUpRight size={16} strokeWidth={1.5} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.section>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
