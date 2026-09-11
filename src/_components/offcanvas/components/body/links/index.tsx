'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import { scale, slideOut } from './variants';
import { navItems } from '@/src/_data';

export function OffcanvasLinks() {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname);

    const items = navItems.map(({ href, title }, index) => {
        const id = index;
        return (
            <motion.li
                key={id}
                className='relative my-2 flex items-center justify-between gap-3'
                variants={slideOut}
                custom={id}
                initial='initial'
                animate='enter'
                exit='exit'
                onPointerEnter={() => setActiveLink(href)}
            >
                <Link href={href} className='text-4xl md:text-6xl capitalize'>
                    {title}
                </Link>
                <motion.div
                    variants={scale}
                    animate={activeLink === href ? 'open' : 'closed'}
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
            <ul onPointerLeave={() => setActiveLink(pathname)}>{items}</ul>
        </div>
    );
}
