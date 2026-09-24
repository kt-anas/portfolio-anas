import { ReactLenis } from 'lenis/react';
import TextAnimation from '../TextAnimation';
import Button from '../Button';
const fadeUpBlur = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
    visible: {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        transition: { ease: 'linear' },
    },
};
const services = [
    {
        number: '01.',
        title: 'DEVELOPMENT',
        description:
            'I transform the design into a living, fluid web experience. With Framer, I build everything to load fast, run stable, and allow you to update content yourself anytime.',
        image:
            'https://wp.aqlova.com/aleric/personal-portfolio/wp-content/uploads/sites/12/2025/11/pp-3.jpg',
        tags: ['Next.js', 'React', 'GSAP'],
    },
    {
        number: '02.',
        title: 'DESIGN',
        description:
            'Every successful website starts with a clear plan. Guided by this plan, I design websites that evoke emotions, build trust, and strategically turn visitors into customers.',
        image:
            'https://wp.aqlova.com/aleric/personal-portfolio/wp-content/uploads/sites/12/2025/11/pp.jpg',
        tags: ['UX Design', 'User Testing', 'Motion Design'],
    },
    {
        number: '03.',
        title: 'SEO',
        description:
            'Your website shouldn\'t just look good, but it should also be found.I optimize your website so you generate more organic traffic and reach your target audience.',
        image:
            'https://wp.aqlova.com/aleric/personal-portfolio/wp-content/uploads/sites/12/2025/11/pp-2.jpg',
        tags: ['User Research', 'Usability Testing', 'User Interviews'],
    },

];

const WhatIDo = () => {
    return (
        <ReactLenis root>
            <main className=" bg-black text-white">
                <div className="container-fluid flex flex-col md:flex-row md:items-start justify-between py-20 lg:py-28 min-h-[420px] bg-black text-white gap-10 md:gap-16 lg:gap-24">
                    <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/65 shrink-0 pt-3">
                        What I do
                    </p>

                    <TextAnimation
                        as='div'
                        text="I help brands build intuitive and user-friendly digital products through a strategic design approach."
                        variants={fadeUpBlur}
                        itemAs='p'
                        classname='w-full md:max-w-[70%] lg:max-w-[65%]'
                        itemClassname='text-[clamp(2.2rem,4vw,5rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white'
                        wordStagger={0.08}
                    />

                </div>
                <div className="w-full">

                    {services.map((service) => (
                        <section
                            key={service.number}
                            className="container-fluid sticky top-0 min-h-screen w-full border-t border-white/20 bg-black py-10"
                        >
                            <div className=" grid min-h-[calc(100vh-80px)] grid-cols-1 gap-10 lg:grid-cols-[80px_1fr_430px] lg:gap-10">

                                {/* NUMBER */}
                                <div className="pt-2">
                                    <span className="text-[16px] font-medium">
                                        {service.number}
                                    </span>
                                </div>


                                {/* CONTENT */}
                                <div className="flex flex-col gap-y-10 py-2">

                                    <div>
                                        <h2
                                            className="
                                                max-w-[900px]
                                                text-[48px]
                                                sm:text-[60px]
                                                font-medium
                                                uppercase
                                                leading-[0.95]
                                                tracking-[-0.04em]
                                                lg:text-[80px]
                                                xl:text-[95px]
                                            "
                                        >
                                            {service.title}
                                        </h2>
                                    </div>


                                    <div className="max-w-[650px]">

                                        {/* DESCRIPTION */}
                                        <p
                                            className="
                                                mb-10
                                                max-w-[620px]
                                                text-[16px]
                                                leading-[1.5]
                                                text-white/70
                                                lg:text-[18px]
                                            "
                                        >
                                            {service.description}
                                        </p>


                                        {/* BUTTON */}
                                        <Button variant="dark" />


                                        {/* TAGS */}
                                        <div className="mt-20 flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-white/20
                                                        px-5
                                                        py-2
                                                        text-[13px]
                                                        font-medium
                                                        text-white/80
                                                    "
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                </div>


                                {/* IMAGE */}
                                <div className="flex items-start justify-end">
                                    <div className="relative w-full overflow-hidden lg:w-[430px]">

                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="
                                                aspect-[3/4]
                                                h-auto
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                ease-out
                                                hover:scale-105
                                            "
                                        />

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