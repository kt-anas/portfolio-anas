'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

import { MagneticButton } from '@/src/_components/FlotButton/magnetic';
import { useOffcanvasToggle } from '@/src/_hooks/use-offcanvas-toggle';
import { useOffcanvasStore } from '@/src/store/offcanvas';
import { cn } from '@/src/_utils';

import classes from './index.module.css';

export function OffcanvasToggle() {
    const isOpen = useOffcanvasStore((state) => state.isOpen);
    const toggleMenu = useOffcanvasStore((state) => state.toggleMenu);
    const closeMenu = useOffcanvasStore((state) => state.closeMenu);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useOffcanvasToggle({
        element: containerRef,
        callback: (latest: number) => latest <= 1 && closeMenu(),
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
                onClick={toggleMenu}
            >
                <span
                    className={cn([classes.burger], [isOpen && classes.burgerActive])}
                />

                <span className='sr-only focus:not-sr-only'>Offcanvas Toggle</span>
            </MagneticButton>
        </motion.div>
    );
}
