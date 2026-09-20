'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { OffcanvasBackdrop } from './back-drop';
import { OffcanvasFooter } from './footer';
import { OffcanvasLinks } from './links';
import { slideLeft } from './variants';
import { FixedOverlay } from '@/src/_components/stack';
import { useOffcanvasStore } from '@/src/store/offcanvas';

const MotionComponent = motion(FixedOverlay);

export function OffcanvasBody() {
    const closeMenu = useOffcanvasStore((state) => state.closeMenu);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeMenu]);

    return (
        <MotionComponent
            className='z-40'
            variants={slideLeft}
            initial='initial'
            animate='enter'
            exit='exit'
            onClick={closeMenu}
        >
            <OffcanvasBackdrop />

            <div
                onClick={(e) => e.stopPropagation()}
                className="
        fixed
        top-0
        right-0
        h-screen
        w-screen
        min-[540px]:w-auto
        bg-foreground
        text-background
        overflow-hidden
    "
            >
                <div className='flex h-full flex-col justify-between p-6 md:p-24'>
                    <OffcanvasLinks />
                    <OffcanvasFooter />
                </div>
            </div>
        </MotionComponent >
    );
}
