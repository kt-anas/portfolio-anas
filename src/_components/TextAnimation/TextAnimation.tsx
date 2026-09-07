// TextAnimation.tsx
// @ts-nocheck
'use client';

import { cn } from '@/src/_utils';
import { type HTMLMotionProps, motion } from 'motion/react';
import React from 'react';
import type { JSX } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';
type StaggerMode = 'sequential' | 'overlap';

const generateVariants = (direction: Direction): { hidden: any; visible: any } => {
    const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
    const value = direction === 'right' || direction === 'down' ? 100 : -100;

    return {
        hidden: {
            filter: 'blur(10px)',
            opacity: 0,
            [`translate${axis}`]: value,
        },
        visible: {
            filter: 'blur(0px)',
            opacity: 1,
            [`translate${axis}`]: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };
};

const defaultViewport = { amount: 0.3, margin: '0px 0px 0px 0px' };

const WordLine = ({
    text,
    modifiedVariants,
    letterAnime,
    lineAnime,
    wordClassnames,
    breakAfter,
    as: As = 'span',
    className = '',
    startDelay = 0,
    wordStagger = 0.1,
}: {
    text: string;
    modifiedVariants: any;
    letterAnime: boolean;
    lineAnime: boolean;
    wordClassnames: Record<string, string>;
    breakAfter: string[];
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    startDelay?: number;
    wordStagger?: number;
}) => {
    const MotionLine = motion[As as keyof typeof motion] as React.ComponentType<HTMLMotionProps<any>>;

    const lineContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: startDelay,
                staggerChildren: wordStagger,
            },
        },
    };

    return (
        <MotionLine variants={lineContainerVariants} className={cn('inline-block', className)}>
            {lineAnime ? (
                <motion.span className='inline-block' variants={modifiedVariants}>
                    {text}
                </motion.span>
            ) : (
                text.split(' ').map((word: string, index: number) => (
                    <React.Fragment key={`${word}-${index}`}>
                        <motion.span
                            className={cn('inline-block', wordClassnames[word])}
                            variants={letterAnime === false ? modifiedVariants : {}}
                        >
                            {letterAnime ? (
                                <>
                                    {word.split('').map((letter: string, letterIndex: number) => (
                                        <motion.span
                                            key={letterIndex}
                                            className='inline-block'
                                            variants={modifiedVariants}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                    &nbsp;
                                </>
                            ) : (
                                <>{word}&nbsp;</>
                            )}
                        </motion.span>
                        {breakAfter.includes(word) && <br />}
                    </React.Fragment>
                ))
            )}
        </MotionLine>
    );
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
    wordClassnames = {},
    breakAfter = [],
    itemAs = 'p',
    itemClassname = '',
    gapClassname = 'space-y-2',
    wordStagger = 0.1,
    lineGap = 0.15,
    staggerMode = 'sequential',
    paragraphStagger = 0.25,
}: {
    text: string | string[];
    classname?: string;
    as?: keyof JSX.IntrinsicElements;
    viewport?: { amount?: number; margin?: string; once?: boolean };
    variants?: { hidden?: any; visible?: any };
    direction?: Direction;
    letterAnime?: boolean;
    lineAnime?: boolean;
    wordClassnames?: Record<string, string>;
    breakAfter?: string[];
    itemAs?: keyof JSX.IntrinsicElements;
    itemClassname?: string;
    gapClassname?: string;
    wordStagger?: number;
    lineGap?: number;
    staggerMode?: StaggerMode;
    paragraphStagger?: number;
}) => {
    const baseVariants = variants || generateVariants(direction);
    const modifiedVariants = {
        hidden: baseVariants.hidden,
        visible: { ...baseVariants.visible },
    };

    const MotionComponent = motion[as as keyof typeof motion] as React.ComponentType<HTMLMotionProps<any>>;
    const items = Array.isArray(text) ? text : [text];

    const wordDuration = modifiedVariants.visible?.transition?.duration ?? 0.4;

    let delays: number[];

    if (staggerMode === 'overlap') {
        delays = items.map((_, i) => i * paragraphStagger);
    } else {
        // sequential — each paragraph's words wait for the previous paragraph
        // to FULLY finish its own word-by-word animation before starting
        let cumulativeDelay = 0;
        delays = items.map((line) => {
            const delayForThisLine = cumulativeDelay;
            const wordCount = lineAnime ? 1 : line.split(' ').length;
            const lineDuration = (wordCount - 1) * wordStagger + wordDuration;
            cumulativeDelay = delayForThisLine + lineDuration + lineGap;
            return delayForThisLine;
        });
    }

    const outerVariants = { hidden: {}, visible: {} };

    return (
        <MotionComponent
            whileInView='visible'
            initial='hidden'
            variants={outerVariants}
            viewport={viewport}
            className={cn(
                'text-foreground',
                Array.isArray(text) ? cn('flex flex-col', gapClassname) : 'inline-block',
                classname,
            )}
        >
            {items.map((line, i) => (
                <WordLine
                    key={i}
                    text={line}
                    as={Array.isArray(text) ? itemAs : 'span'}
                    className={itemClassname}
                    modifiedVariants={modifiedVariants}
                    letterAnime={letterAnime}
                    lineAnime={lineAnime}
                    wordClassnames={wordClassnames}
                    breakAfter={breakAfter}
                    startDelay={Array.isArray(text) ? delays[i] : 0}
                    wordStagger={wordStagger}
                />
            ))}
        </MotionComponent>
    );
};

export default TextAnimation;