import Link from 'next/link'
import Button from '../Button'
import { MagneticButton } from '../FlotButton'
import { FaGithub, FaDribbble, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { randomId } from '@/src/_utils'

const socialLinks = [

    { href: '#', label: 'Linkedin', icon: FaLinkedinIn },
    { href: '#', label: 'Github', icon: FaGithub },
    { href: '#', label: 'Instagram', icon: FaInstagram },
]

const Footer = () => {

    const id = randomId();

    return (
        <footer id='contact' className='h-screen border-t border-black/10 bg-[#FFFFFF]'>
            <div className='container px-6 py-16 md:px-8 lg:px-12'>
                <div className="flex flex-col items-center justify-center border-b border-black/10 pb-10 text-center">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black/60">
                            Let’s build something bold
                        </p>

                        <h2 className="text-[5.063rem] leading-[5.063rem] tracking-[-0.06em]  xl:text-[9.063rem] font-medium xl:leading-[9.063rem] xl:tracking-[-0.06em] text-black">
                            Let’s Work
                            <br />
                            Together.
                        </h2>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        {socialLinks.map(({ href, label, icon: Icon }) => (
                            <div key={label}>
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MagneticButton>
                                        <span className="flex items-center gap-3">
                                            <Icon size={18} />
                                            {label}
                                        </span>
                                    </MagneticButton>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-10 flex flex-col gap-8 text-black md:flex-row md:items-center md:justify-between'>
                    <div className='flex items-center gap-3'>
                        <span className='text-2xl font-black tracking-[-0.08em]'>ANAS.</span>
                    </div>

                    <div className='flex flex-wrap items-center gap-3 text-sm text-black/70'>
                        <MagneticButton
                            size='md'
                            variant='outlinePill'
                            className='h-[10px]  not-last-of-type: rounded-full border border-black/40 bg-transparent text-black hover:text-white before:bg-black'
                            data-cursor='white'
                        >
                            <a href='mailto:muhanaskt@gmail.com' className='transition-opacity hover:opacity-80'>
                                muhanaskt@gmail.com
                            </a>
                        </MagneticButton>
                        <MagneticButton
                            size='md'
                            variant='outlinePill'
                            className='h-[10px]  rounded-full border border-black/40 bg-transparent text-black hover:text-white before:bg-black '
                            data-cursor='white'
                        >
                            <a href='tel:+90 790 910 9268'>+90 790 910 9268</a>
                        </MagneticButton>
                    </div>
                </div>

                <div className='mt-8 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-black/50 md:flex-row md:items-center md:justify-between'>
                    <span>© {new Date().getFullYear()} | Anas.</span>
                    <div className='flex items-center gap-5'>
                        <a href='#' className='transition-opacity hover:opacity-80'>Privacy</a>
                        <a href='#' className='transition-opacity hover:opacity-80'>Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
