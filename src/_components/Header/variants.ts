import type { Variants } from 'framer-motion';

const easing = [0.76, 0, 0.24, 1] as const;

export const slideOut: Variants = {
    initial: {
        x: 80,
    },
    enter: (i: number) => ({
        x: 0,
        transition: {
            duration: 0.8,
            ease: easing,
            delay: 0.05 * i,
        },
    }),
    exit: (i: number) => ({
        x: 80,
        transition: {
            duration: 0.8,
            ease: easing,
            delay: 0.05 * i,
        },
    }),
};

export const scale: Variants = {
    open: {
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
    closed: {
        scale: 0,
        transition: {
            duration: 0.4,
        },
    },
};
