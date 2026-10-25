'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useOffcanvasStore } from '@/src/store/offcanvas';


import { scale, slideOut } from './variants';
import { navItems } from '@/src/_data';

export function OffcanvasLinks() {
    const pathname = usePathname();
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const closeMenu = useOffcanvasStore(
        (state) => state.closeMenu
    );
    const items = navItems.map(({ href, title }, index) => {
        const id = index;
        const isActive = hoveredLink !== null
            ? hoveredLink === href
            : (href === '/' ? pathname === '/' : pathname.startsWith(href));

        return (
            <motion.li
                key={id}
                className='relative my-2 flex items-center justify-between gap-3'
                variants={slideOut}
                custom={id}
                initial='initial'
                animate='enter'
                exit='exit'
                onPointerEnter={() => setHoveredLink(href)}
            >
                <Link onClick={closeMenu} href={href} className='text-4xl md:text-6xl capitalize'>
                    {title}
                </Link>
                <motion.div
                    variants={scale}
                    animate={isActive ? 'open' : 'closed'}
                    className='flex-shrink-0'
                >
                    <Dot size={30} />
                </motion.div>
            </motion.li>
        );
    });

    return (
        <div className='mt-12 md:mt-20 flex flex-col gap-1'>
            <div className='mb-10 border-b border-solid'>
                <h5 className='text-xs uppercase text-secondary-foreground'>
                    Navigation
                </h5>
            </div>
            <ul onPointerLeave={() => setHoveredLink(null)}>{items}</ul>
        </div>
    );
}
