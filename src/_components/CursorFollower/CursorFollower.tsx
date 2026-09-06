'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorFollower() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const [cursorColor, setCursorColor] = useState('black');
    const [cursorLabel, setCursorLabel] = useState('');

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = {
        damping: 25,
        stiffness: 300,
        mass: 0.5,
    };

    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (event) => {
            setIsVisible(true);

            cursorX.set(event.clientX);
            cursorY.set(event.clientY);

            const target = event.target;

            const element =
                target instanceof Element
                    ? target.closest('[data-cursor]')
                    : null;

            // Clickable elements
            const isClickable =
                target instanceof Element &&
                target.closest(
                    'a, button, [role="button"], input, textarea, select'
                );

            setIsPointer(Boolean(isClickable));

            // Cursor color
            setCursorColor(
                element?.getAttribute('data-cursor') || 'black'
            );

            // Cursor label
            setCursorLabel(
                element?.getAttribute('data-cursor-label') || ''
            );
        };

        const hideCursor = () => {
            setIsVisible(false);
            setCursorLabel('');
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseleave', hideCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseleave', hideCursor);
        };
    }, [cursorX, cursorY]);

    const isViewMore = Boolean(cursorLabel);

    return (
        <motion.div
            className="
                pointer-events-none
                fixed left-0 top-0
                z-[9999]
                rounded-full
                flex items-center justify-center
                whitespace-nowrap
            "
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
                backgroundColor: isViewMore ? 'white' : cursorColor,
            }}
            animate={{
                width: isViewMore ? 100 : isPointer ? 28 : 12,
                height: isViewMore ? 100 : isPointer ? 28 : 12,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                width: {
                    duration: 0.25,
                    ease: 'easeOut',
                },
                height: {
                    duration: 0.25,
                    ease: 'easeOut',
                },
                opacity: {
                    duration: 0.15,
                },
            }}
        >
            {isViewMore && (
                <span className="text-[14px] font-medium text-black">
                    {cursorLabel}
                </span>
            )}
        </motion.div>
    );
}

export default CursorFollower;