'use client';

import { useRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

import { useMagnetic } from '../../../_hooks';

import { MagneticItem } from './index.styled';
import { magneticVariance } from './index.variance';

type MagneticButtonVariant = 'default' | 'primary' | 'destructive' | 'secondary' | 'ghost' | 'outlineDark' | 'outline' | 'outlinePill';
type MagneticButtonSize = 'default' | 'md' | 'lg' | 'xl';

type MagneticButtonProps = Omit<HTMLMotionProps<'button'>, 'children'> & {
    children: ReactNode;
    className?: string;
    variant?: MagneticButtonVariant;
    size?: MagneticButtonSize;
    scaleOnHover?: boolean;
};

const cn = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(' ');

export function MagneticButton({
    children,
    className,
    variant = 'default',
    size = 'default',
    scaleOnHover = false,

    ...props
}: MagneticButtonProps) {
    const elementRef = useRef<HTMLButtonElement | null>(null);

    const {
        position: { x, y },
        handleMagneticMove,
        handleMagneticOut,
    } = useMagnetic(elementRef);

    return (
        <motion.button
            ref={elementRef}
            className={cn(magneticVariance({ variant, size, className }))
            }
            animate={{ x, y }}
            transition={{
                type: 'spring',
                damping: 15,
                stiffness: 150,
                mass: 0.1,
            }}
            onPointerMove={handleMagneticMove}
            onPointerOut={handleMagneticOut}
            whileHover={scaleOnHover ? { scale: 1.1 } : undefined}

            {...props}
        >
            <MagneticItem>{children}</MagneticItem>
        </motion.button>
    );
}
