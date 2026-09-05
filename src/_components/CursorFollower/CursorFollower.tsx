'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorFollower() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const [cursorColor, setCursorColor] = useState('black'); // default dot color

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (event: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            cursorX.set(event.clientX);
            cursorY.set(event.clientY);

            const target = event.target;
            const isClickable =
                target instanceof Element &&
                target.closest('a, button, [role="button"], input, textarea, select');

            setIsPointer(Boolean(isClickable));

            // look for the nearest ancestor (or self) with data-cursor="..."
            const colorEl =
                target instanceof Element ? target.closest('[data-cursor]') : null;
            setCursorColor(colorEl?.getAttribute('data-cursor') || 'black');
        };

        const hideCursor = () => setIsVisible(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseleave', hideCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseleave', hideCursor);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className='pointer-events-none fixed left-0 top-0 z-[9999] block rounded-full'
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
                backgroundColor: cursorColor,
            }}
            animate={{
                width: isPointer ? 28 : 12,
                height: isPointer ? 28 : 12,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                width: { duration: 0.2, ease: 'easeOut' },
                height: { duration: 0.2, ease: 'easeOut' },
                opacity: { duration: 0.15 },
                backgroundColor: { duration: 0.2, ease: 'easeOut' },
            }}
        />
    );
}

export default CursorFollower;