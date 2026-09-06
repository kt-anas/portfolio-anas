const AboutMeSection = () => {
    return (
        <section className='overflow-hidden border-y border-white/10 bg-[#050505]'>
            <div className='grid min-h-[45rem] grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]'>
                <div className='flex flex-col justify-center px-6 py-12 md:px-10 lg:px-14 xl:px-20'>
                    <p className='mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-white/65'>
                        About me
                    </p>

                    <div className='space-y-7 text-[clamp(2.2rem,4vw,5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-white'>
                        <p>
                            I’m a Front-End Developer focused on building modern, interactive,
                            and high-performance web experiences.
                        </p>

                        <p>
                            I enjoy turning ideas and designs into clean, responsive interfaces
                            that feel smooth and intuitive to use.
                        </p>
                    </div>

                    <div className='mt-10 max-w-[45rem] space-y-6 text-[1.05rem] leading-[1.8] text-white/75 md:text-[1.15rem]'>
                        <p>
                            I work primarily with React, Next.js, JavaScript, Tailwind CSS,
                            and SCSS, with a strong interest in animation and creative web
                            development using tools like GSAP and Framer Motion.
                        </p>

                        <p>
                            I’m constantly learning, experimenting with new technologies, and
                            looking for better ways to build digital experiences. For me, great
                            frontend development is not just about writing code — it’s about
                            creating experiences that look good, feel natural, and work
                            flawlessly.
                        </p>
                    </div>

                    <div className='mt-10'>
                        <a
                            href='#work'
                            className='inline-flex items-center border border-white/20 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:border-white hover:bg-white hover:text-black'
                        >
                            Know More
                        </a>
                    </div>
                </div>

                <div className='relative min-h-[26.25rem] bg-[#d8d5d0]'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_38%)]' />

                    <img
                        src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80'
                        alt='Portrait of the developer'
                        className='h-full w-full object-cover object-center grayscale'
                    />


                </div>
            </div>
        </section>
    )
}

export default AboutMeSection
