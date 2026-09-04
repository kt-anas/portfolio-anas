import React from 'react'
import { ReactLenis } from 'lenis/react';
const WorkSection = () => {
    return (
        <ReactLenis root>




            <section className=' w-full bg-white  '>
                <div className='container grid grid-cols-2 px-8'>
                    <div className='sticky top-0 h-screen grid place-content-start'>
                        <h1 className='text-[145px] uppercase px-8 font-medium text-right tracking-tight leading-[1.6]'>
                            Work
                        </h1>
                    </div>
                    <div className='grid gap-2'>
                        <figure className='sticky top-0 h-screen grid place-content-start'>
                            <img
                                src='https://wp.aqlova.com/aleric/personal-portfolio/wp-content/uploads/sites/12/2025/12/thumb-1.jpg'
                                alt=''
                                className='transition-all duration-300 w-full  align-bottom object-cover '
                            />
                        </figure>
                        <figure className='sticky top-0 h-screen grid place-content-start'>
                            <img
                                src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                                alt=''
                                className='transition-all duration-300 w-full  align-bottom object-cover '


                            />
                        </figure>
                        <figure className='sticky top-0 h-screen grid place-content-start'>
                            <img
                                src='https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop'
                                alt=''
                                className='transition-all duration-300 w-full  align-bottom object-cover '
                            />
                        </figure>
                        <figure className='sticky top-0 h-screen grid place-content-start'>
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
