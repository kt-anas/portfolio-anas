'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorFollower() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);
    const [isText, setIsText] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorLabel, setCursorLabel] = useState('');

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = {
        damping: 28,
        stiffness: 350,
        mass: 0.3,
    };

    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (event: MouseEvent) => {
            if (typeof window !== 'undefined' && window.innerWidth < 768) {
                setIsVisible(false);
                return;
            }

            setIsVisible(true);
            cursorX.set(event.clientX);
            cursorY.set(event.clientY);

            const target = event.target;

            if (target instanceof Element) {
                // Interactive / clickable elements (links, buttons, inpu   ts)
                const isClickable = Boolean(
                    target.closest(
                        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
                    )
                );
                setIsPointer(isClickable);

                // Text elements (headlines, paragraphs, spans)


                // Cursor label (e.g. "View More" in WorkSection)
                const labelElement = target.closest('[data-cursor-label]');
                setCursorLabel(labelElement?.getAttribute('data-cursor-label') || '');
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => {
            setIsVisible(false);
            setCursorLabel('');
            setIsPointer(false);
            setIsText(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    const isViewMore = Boolean(cursorLabel);

    // Dynamic sizing and border-radius for creative states
    let width = 14;
    let height = 14;
    let borderRadius = 9999;

    if (isViewMore) {
        width = 100;
        height = 100;
        borderRadius = 9999;
    } else if (isPointer) {
        width = 52;
        height = 52;
        borderRadius = 9999;
    } else if (isText) {
        // Image 2: rounded squircle text lens over typography
        width = 40;
        height = 40;
        borderRadius = 10;
    }

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
            style={{
                x,
                y,
                mixBlendMode: isViewMore ? 'normal' : 'difference',
            }}
        >
            <motion.div
                className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white"
                initial={{
                    width: 14,
                    height: 14,
                    borderRadius: 9999,
                    opacity: 0,
                }}
                animate={{
                    width,
                    height,
                    borderRadius: `${borderRadius}px`,
                    scale: isClicking ? 0.82 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    width: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
                    height: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
                    borderRadius: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
                    scale: { duration: 0.15, ease: 'easeOut' },
                    opacity: { duration: 0.15 },
                }}
            >
                {isViewMore && (
                    <span className="text-[14px] font-semibold text-black tracking-tight">
                        {cursorLabel}
                    </span>
                )}
            </motion.div>
        </motion.div>
    );
}

export default CursorFollower;