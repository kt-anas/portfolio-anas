'use client';


import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { OffcanvasBody, OffcanvasToggle } from './components';
import { useOffcanvasStore } from '@/src/store/offcanvas';

export function Offcanvas() {
    const isOpen = useOffcanvasStore((state) => state.isOpen);
    const closeMenu = useOffcanvasStore((state) => state.closeMenu);
    const pathname = usePathname();

    useEffect(() => {
        closeMenu();
    }, [pathname, closeMenu]);

    return (
        <>
            <AnimatePresence mode='wait'>
                {isOpen ? <OffcanvasBody /> : null}
            </AnimatePresence>
            <OffcanvasToggle />
        </>
    );
}
