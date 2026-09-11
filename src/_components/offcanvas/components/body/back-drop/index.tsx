'use client';

import { motion, type Variants } from 'framer-motion';

const easing = [0.76, 0, 0.24, 1] as const;

export function OffcanvasBackdrop() {
    const windowHeight =
        typeof window !== 'undefined' ? window.innerHeight : 0;

    const initialPath = `
        M100 0
        L200 0
        L200 ${windowHeight}
        L100 ${windowHeight}
        Q-300 ${windowHeight / 2} 100 0
    `;

    const targetPath = `
        M100 0
        L200 0
        L200 ${windowHeight}
        L100 ${windowHeight}
        Q100 ${windowHeight / 2} 100 0
    `;

    const curve: Variants = {
        initial: {
            d: initialPath,
        },

        enter: {
            d: targetPath,
            transition: {
                duration: 1,
                ease: easing,
                delay: 0.1,
            },
        },

        exit: {
            d: initialPath,
            transition: {
                duration: 0.8,
                ease: easing,
                delay: -0.2,
            },
        },
    };

    return (
        <motion.svg
            className="absolute right-[300px] md:right-[530px] top-0 h-full w-24 fill-foreground stroke-none"
            viewBox={`0 0 200 ${windowHeight}`}
            preserveAspectRatio="none"
        >
            <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
            />
        </motion.svg>
    );
}