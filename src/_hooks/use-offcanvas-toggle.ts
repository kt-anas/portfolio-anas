'use client';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import type { MutableRefObject } from 'react';

type UseOffcanvasToggleParams = {
    element: MutableRefObject<HTMLDivElement | null>;
    callback: (latestValue: number) => void;
};

export function useOffcanvasToggle({
    element,
    callback,
}: UseOffcanvasToggleParams) {
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['500px 500px', 'end start'],
    });

    useMotionValueEvent(scrollYProgress, 'change', callback);

    return { scrollYProgress };
}
