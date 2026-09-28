import { ReactLenis } from 'lenis/react';
import { ArrowDownLeft } from 'lucide-react';

import TextAnimation from '@/src/TextAnimation';

const fadeUpBlur = {
    hidden: {
        filter: 'blur(10px)',
        opacity: 0,
        y: 20,
    },

    visible: {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        transition: {
            ease: 'linear',
        },
    },
};

const services = [
    {
        number: '01.',
        title: 'DEVELOPMENT',
        description:
            'I transform ideas and designs into fast, fluid and reliable digital experiences. I build websites that are scalable, responsive and easy to maintain.',

        items: [
            'Frontend Development',
            'Interactive Experiences',
            'Performance Optimization',
        ],
    },

    {
        number: '02.',
        title: 'DESIGN',
        description:
            'Every successful website starts with a clear plan. Guided by this plan, I design websites that evoke emotions, build trust, and strategically turn visitors into customers.',

        items: [
            'Customer Journey',
            'Design Concept',
            'Responsive Design',
        ],
    },

    {
        number: '03.',
        title: 'SEO',
        description:
            "Your website shouldn't just look good, it should also be found. I optimize websites to improve visibility, performance and reach the right audience.",

        items: [
            'Technical SEO',
            'Performance Optimization',
            'Search Visibility',
        ],
    },
];

const WhatIDo = () => {
    return (
        <ReactLenis root>
            <main className="bg-[#050505] text-white">
                {/* INTRO */}
                <div className="container-fluid border-t border-white/20 bg-[#050505] py-20 lg:py-28">
                    <div className="grid grid-cols-1  lg:grid-cols-[34%_1fr]">
                        {/* LABEL */}
                        <div>
                            <p className="py-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/60">
                                What I do
                            </p>
                        </div>

                        {/* INTRO TEXT */}
                        <TextAnimation
                            as='div'
                            text="I help brands build intuitive and user-friendly digital products through a strategic design approach."
                            variants={fadeUpBlur}

                            classname='w-full  text-[clamp(2.2rem,4vw,5rem)] font-medium normal-case leading-[0.95] tracking-[-0.06em] text-white'


                        />
                    </div>
                </div>

                {/* SERVICES */}
                <div className="w-full">
                    {services.map((service) => (
                        <section
                            key={service.number}
                            className="
                                sticky
                                top-0
                                min-h-screen
                                w-full
                                border-t
                                border-white/20
                                bg-[#050505]
                            "
                        >
                            <div
                                className="
                                    container-fluid
                                    grid
                                    min-h-screen
                                    grid-cols-1
                                    lg:grid-cols-[34%_1fr]
                                "
                            >
                                {/* LEFT NUMBER */}
                                <div className="relative pt-7 lg:pt-8">
                                    <span
                                        className="
                                            text-[20px]
                                            font-medium
                                            tracking-[-0.04em]
                                            text-white
                                            lg:text-[28px]
                                        "
                                    >
                                        {service.number}
                                    </span>
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className="relative pb-16 pt-7 lg:pt-8">
                                    {/* ARROW */}
                                    <div
                                        className="
                                            absolute
                                            right-0
                                            top-7
                                            hidden
                                            text-white/30
                                            lg:block
                                        "
                                    >
                                        <ArrowDownLeft
                                            size={30}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* TITLE */}
                                    <h2
                                        className="
                                            max-w-[1000px]
                                            pr-12
                                            text-[52px]
                                            font-medium
                                            uppercase
                                            leading-[0.9]
                                            tracking-[-0.055em]
                                            text-white
                                            sm:text-[70px]
                                            lg:text-[80px]
                                            xl:text-[96px]
                                        "
                                    >
                                        {service.title}
                                    </h2>

                                    {/* DESCRIPTION */}
                                    <p
                                        className="
                                            mt-14
                                            max-w-[650px]
                                            text-[16px]
                                            leading-[1.5]
                                            tracking-[-0.02em]
                                            text-white/70
                                            lg:mt-16
                                            lg:text-[18px]
                                        "
                                    >
                                        {service.description}
                                    </p>

                                    {/* SERVICE ITEMS */}
                                    <div className="mt-12 max-w-[1100px]">
                                        {service.items.map((item, index) => (
                                            <div
                                                key={item}
                                                className="
                                                    flex
                                                    items-center
                                                    border-b
                                                    border-white/20
                                                    py-4
                                                    lg:py-5
                                                "
                                            >
                                                {/* ITEM NUMBER */}
                                                <span
                                                    className="
                                                        w-[52px]
                                                        shrink-0
                                                        text-[14px]
                                                        text-white/40
                                                        lg:w-[52px]
                                                    "
                                                >
                                                    {String(index + 1).padStart(
                                                        2,
                                                        '0'
                                                    )}
                                                </span>

                                                {/* ITEM TITLE */}
                                                <span
                                                    className="
                                                        text-[20px]
                                                        font-medium
                                                        tracking-[-0.04em]
                                                        text-white/90
                                                        lg:text-[24px]
                                                    "
                                                >
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </ReactLenis>
    );
};

export default WhatIDo;