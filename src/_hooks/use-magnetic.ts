'use client';

import { useCallback, useState, type MutableRefObject, type PointerEvent as ReactPointerEvent } from 'react';

export type MagneticPosition = {
    x: number;
    y: number;
};

export function useMagnetic<T extends HTMLElement>(element: MutableRefObject<T | null>) {
    const [position, setPosition] = useState<MagneticPosition>({ x: 0, y: 0 });

    const handleMagneticMove = useCallback(
        (event: ReactPointerEvent<T>) => {
            const current = element.current;

            if (!current) {
                return;
            }

            const { clientX, clientY } = event;
            const { width, height, left, top } = current.getBoundingClientRect();
            const x = (clientX - (left + width / 2)) * 0.35;
            const y = (clientY - (top + height / 2)) * 0.35;

            setPosition({ x, y });
        },
        [element],
    );

    const handleMagneticOut = useCallback(() => setPosition({ x: 0, y: 0 }), []);

    return { position, handleMagneticMove, handleMagneticOut };
}
