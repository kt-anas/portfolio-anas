import { ReactLenis } from 'lenis/react';
import { MagneticButton } from '../FlotButton';
import TextAnimation from '../TextAnimation';
const WorkSection = () => {
    return (
        <ReactLenis root>
            <section id='work' className=' w-full bg-white  '>
                <div className='container-fluid pt-[135px] grid grid-cols-2'>
                    <div className='sticky top-0 h-screen grid place-content-start'>
                        <div className='flex items-center'>
                            <svg className="mr-1" width="110" height="12" viewBox="0 0 110 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="10" width="110" height="2" rx="1" fill="#030303"></rect>
                                <rect x="60" width="50" height="2" rx="1" fill="#999999"></rect>
                            </svg>
                            <span className="text-[25px]  px-8 font-medium text-right tracking-tight">Featured</span>
                        </div>

                        <TextAnimation
                            as='h1'
                            letterAnime={true}
                            text="WORK"
                            itemClassname='text-[145px] uppercase pb-8 font-medium text-right tracking-tight leading-[1.6]'
                            variants={{
                                hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
                                visible: {
                                    filter: 'blur(0px)',
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.2,
                                    },
                                },
                            }}
                        />
                        <span>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM419 3.5L424 5.88675V0.113249L419 2.5V3.5ZM4.5 3.5H419.5V2.5H4.5V3.5Z" fill="#EEEEEE"></path>
                            </svg>

                        </span>
                        <MagneticButton
                            size='md'
                            variant='outlineDark'
                            className='h-[200px] w-[200px] rounded-full border border-black/40 bg-transparent text-black hover:text-white  '
                            data-cursor='white'
                        >
                            <span className='flex flex-col items-center justify-center gap-2'>
                                <svg width='28' height='28' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' className='h-7 w-7 shrink-0'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M11.3791 3.0269C14.6431 2.80336 18.8916 1.42595 21.9998 0C20.5732 3.10763 19.1953 7.35556 18.9723 10.6196L16.8276 6.04382L1.05193 21.82C0.936264 21.9354 0.779526 22.0001 0.616152 22C0.494263 22 0.375118 21.9638 0.273781 21.8961C0.172441 21.8284 0.0934544 21.7321 0.046814 21.6195C0.000171661 21.5069 -0.0120335 21.383 0.0117397 21.2634C0.035511 21.1439 0.0941944 21.034 0.18037 20.9478L15.956 5.17221L11.3791 3.0269Z'
                                        fill='currentColor'
                                    />
                                </svg>
                                <span className='text-center text-[18px] leading-[1.25rem] font-medium uppercase tracking-[0.18em]'>
                                    View all
                                    <br />
                                    Works
                                </span>
                            </span>
                        </MagneticButton>
                    </div>
                    <div className='grid gap-2'>
                        <figure
                            className='sticky top-0 h-screen grid place-content-start cursor-none'
                            data-cursor="white"
                            data-cursor-label="View More"
                        >
                            <img
                                src='https://wp.aqlova.com/aleric/personal-portfolio/wp-content/uploads/sites/12/2025/12/thumb-1.jpg'
                                alt=''
                                className='transition-all duration-300 w-full  align-bottom object-cover '
                            />
                            <h1
                                className="
        inline-block
        text-[24px]
        font-medium
        cursor-pointer
    "
                            >
                                <span
                                    className="
            relative
            inline-block
            after:absolute
            after:left-0
            after:bottom-[-3px]
            after:h-[2px]
            after:w-full
            after:origin-left
            after:scale-x-0
            after:bg-black
            after:transition-transform
            after:duration-500
            after:ease-out
            hover:after:scale-x-100
        "
                                >
                                    Crafting Digital Experiences
                                </span>
                            </h1>
                        </figure>
                        <figure className='sticky top-0 h-screen grid place-content-start' data-cursor="white"
                            data-cursor-label="View More">
                            <img
                                src='https://wp.aqlova.com/aleric/personal-portfolio/wp-content/uploads/sites/12/2025/12/thumb-2.jpg'
                                alt=''
                                className='transition-all duration-300 w-full  align-bottom object-cover '


                            />
                        </figure>
                        <figure className='sticky top-0 h-screen grid place-content-start' data-cursor="white"
                            data-cursor-label="View More">
                            <img
                                src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                                alt=''
                                className='transition-all duration-300 w-full  align-bottom object-cover '
                            />
                        </figure>
                        <figure className='sticky top-0 h-screen grid place-content-start' data-cursor="white"
                            data-cursor-label="View More">
                            <img
                                src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                                alt=''
                                className='transition-all duration-300  w-full h-full   align-bottom object-cover rounded-md'
                            />
                        </figure>
                    </div>

                </div>
            </section>


        </ReactLenis>
    )
}

export default WorkSection
