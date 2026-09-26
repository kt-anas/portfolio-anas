// @ts-nocheck

'use client';

import { type HTMLMotionProps, motion } from 'motion/react';
import type React from 'react';
import type { JSX } from 'react';
import { cn } from '../_utils';

type Direction = 'up' | 'down' | 'left' | 'right';

const generateVariants = (
    direction: Direction
): { hidden: any; visible: any } => {
    const axis =
        direction === 'left' || direction === 'right' ? 'X' : 'Y';

    const value =
        direction === 'right' || direction === 'down' ? 100 : -100;

    return {
        hidden: {
            filter: 'blur(10px)',
            opacity: 0,
            [(`translate${axis}`)]: value,
        },

        visible: {
            filter: 'blur(0px)',
            opacity: 1,
            [(`translate${axis}`)]: 0,

            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };
};

const defaultViewport = {
    amount: 0.3,
    margin: '0px 0px 0px 0px',
    once: true,
};

const TextAnimation = ({
    as = 'h1',
    text,
    classname = '',
    viewport = defaultViewport,
    variants,
    direction = 'down',
    letterAnime = false,
    lineAnime = false,
    delay = 0,
}: {
    text: string;
    classname?: string;
    as?: keyof JSX.IntrinsicElements;

    viewport?: {
        amount?: number;
        margin?: string;
        once?: boolean;
    };

    variants?: {
        hidden?: any;
        visible?: any;
    };

    direction?: Direction;
    letterAnime?: boolean;
    lineAnime?: boolean;

    // Delay before this TextAnimation starts
    delay?: number;
}) => {
    const baseVariants = variants || generateVariants(direction);

    /*
     * This controls the animation of each word/letter.
     */
    const modifiedVariants = {
        hidden: baseVariants.hidden,

        visible: {
            ...baseVariants.visible,
        },
    };

    /*
     * This controls the whole TextAnimation.
     *
     * delayChildren makes the entire sentence wait before
     * its children (words/letters) start animating.
     */
    const containerVariants = {
        hidden: {},

        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: 0.1,
            },
        },
    };

    const MotionComponent = motion[
        as as keyof typeof motion
    ] as React.ComponentType<HTMLMotionProps<any>>;

    return (
        <MotionComponent
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={viewport}
            className={cn(
                'inline-block text-foreground uppercase',
                classname
            )}
        >
            {lineAnime ? (
                <motion.span
                    className="inline-block"
                    variants={modifiedVariants}
                >
                    {text}
                </motion.span>
            ) : (
                <>
                    {text.split(' ').map(
                        (word: string, index: number) => (
                            <motion.span
                                key={`${word}-${index}`}
                                className="inline-block"
                                variants={
                                    letterAnime === false
                                        ? modifiedVariants
                                        : {}
                                }
                            >
                                {letterAnime ? (
                                    <>
                                        {word
                                            .split('')
                                            .map(
                                                (
                                                    letter: string,
                                                    letterIndex: number
                                                ) => (
                                                    <motion.span
                                                        key={letterIndex}
                                                        className="inline-block"
                                                        variants={
                                                            modifiedVariants
                                                        }
                                                    >
                                                        {letter}
                                                    </motion.span>
                                                )
                                            )}

                                        &nbsp;
                                    </>
                                ) : (
                                    <>
                                        {word}&nbsp;
                                    </>
                                )}
                            </motion.span>
                        )
                    )}
                </>
            )}
        </MotionComponent>
    );
};

export default TextAnimation;