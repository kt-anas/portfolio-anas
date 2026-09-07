import TextAnimation from "../TextAnimation"


const fadeUpBlur = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
    visible: {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        transition: { ease: 'linear' },
    },
};

const AboutMeSection = () => {
    return (
        <section className='overflow-hidden border-y border-white/10 bg-[#050505]'>
            <div className=' container-fluid grid min-h-[45rem] grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]'>
                <div className='flex flex-col justify-center py-12 pr-6 md:pr-10 lg:pr-14'>
                    <p className='mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-white/65'>
                        About me
                    </p>

                    <TextAnimation
                        as='div'
                        text={[
                            "I'm a Front-End Developer focused on building modern, interactive, and high-performance web experiences.",
                            "I enjoy turning ideas and designs into clean, responsive interfaces that feel smooth and intuitive to use.",
                        ]}
                        variants={fadeUpBlur}
                        itemAs='p'
                        gapClassname='space-y-7'
                        itemClassname='text-[clamp(2.2rem,4vw,5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white normal-case'
                        staggerMode='sequential'
                        wordStagger={0.08}
                        lineGap={0.25}
                    />



                    {/* <div className='mt-10'>
                        <a
                            href='#work'
                            className='inline-flex items-center border border-white/20 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:border-white hover:bg-white hover:text-black'
                        >
                            Know More
                        </a>
                    </div> */}
                </div>

                <div className='relative min-h-[26.25rem] bg-[#d8d5d0]'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_38%)]' />

                    <img
                        src='./images/DP.png'
                        alt='Portrait of the developer'
                        className='h-full w-full object-cover object-center grayscale'
                    />


                </div>
            </div>
        </section>
    )
}

export default AboutMeSection
