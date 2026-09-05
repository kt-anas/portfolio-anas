'use client';

import { useRef, type Dispatch, type SetStateAction } from 'react';
import { motion } from 'framer-motion';

import { MagneticButton } from '@/src/_components/FlotButton/magnetic';
import { useOffcanvasToggle } from '@/src/_hooks/use-offcanvas-toggle';
import { cn } from '@/src/_utils';

import classes from './index.module.css';

type OffcanvasToggleProps = {
    isOpen: boolean;
    handleOpen: Dispatch<SetStateAction<boolean>>;
};

export function OffcanvasToggle({ isOpen, handleOpen }: OffcanvasToggleProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useOffcanvasToggle({
        element: containerRef,
        callback: (latest: number) => latest <= 1 && handleOpen(false),
    });

    return (
        <motion.div
            ref={containerRef}
            className={classes.wrapper}
            initial={false}
            transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
            }}
            style={{ scale: scrollYProgress }}
        >
            <MagneticButton
                size='md'
                variant='ghost'
                className='border border-solid border-muted-foreground'
                onClick={() => handleOpen(!isOpen)}
            >
                <span
                    className={cn([classes.burger], [isOpen && classes.burgerActive])}
                />

                <span className='sr-only focus:not-sr-only'>Offcanvas Toggle</span>
            </MagneticButton>
        </motion.div>
    );
}
