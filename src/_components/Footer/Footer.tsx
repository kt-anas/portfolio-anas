"use client"
import Link from 'next/link'
import { MagneticButton } from '../FlotButton'
import { FaGithub, FaDribbble, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { scale, slideOut } from './variants';
import { Dot } from "lucide-react";
import { usePathname } from 'next/navigation';
import { cn } from '@/src/_utils';


const socialLinks = [

    { href: '#', label: 'Linkedin', icon: FaLinkedinIn },
    { href: '#', label: 'Github', icon: FaGithub },
    { href: '#', label: 'Instagram', icon: FaInstagram },
]

const navItems = [
    { href: "/", title: "Home" },
    { href: "/works", title: "Work" },
    { href: "/about-me", title: "About" },
    { href: "/contact", title: "Contact" },
];


const Footer = () => {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname);
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const formattedTime = now.toLocaleTimeString('en-IN', {
                hour12: false,
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });

            setTime(formattedTime);
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const items = navItems.map(({ href, title }, index) => {
        const id = index;
        return (
            <motion.li
                key={id}
                className='relative mb-1 flex  items-center'
                variants={slideOut}
                custom={id}
                initial='initial'
                animate='enter'
                exit='exit'
                onPointerEnter={() => setActiveLink(href)}
            >
                <Link href={href} className="flex items-center uppercase  text-lg font-medium tracking-tight">
                    {title}
                </Link>
                <motion.div
                    className=" ml-6 flex items-center md:absolute md:left-full md:top-1/2  md:ml-6 md:-translate-y-1/2
    "
                    variants={scale}

                    animate={activeLink === href ? 'open' : 'closed'}
                >
                    <Dot size={36} />
                </motion.div>

            </motion.li>
        );
    });

    const isContactPage = pathname === '/contact';

    return (
        <footer
            id='contact'
            className={cn(
                'min-h-screen pt-5 md:pt-24 transition-colors duration-300',
                isContactPage ? 'bg-[#000000] text-white' : 'bg-[#FFFFFF] text-black'
            )}
        >
            <div className='container-fluid min-h-[calc(100vh-6rem)] flex flex-col'>
                <div className="flex flex-col pb-10">
                    <p
                        className={cn(
                            'mb-3 text-[0.75rem] md:text-[1rem] uppercase tracking-[0.2em]',
                            isContactPage ? 'text-white/60' : 'text-black/60'
                        )}
                    >
                        Let’s build something bold
                    </p>

                    <h2
                        className={cn(
                            'w-full whitespace-nowrap text-[clamp(2.2rem,7.6vw,10.5rem)] font-medium leading-none tracking-[-0.05em]',
                            isContactPage ? 'text-white' : 'text-black'
                        )}
                    >
                        Let’s Work Together.
                    </h2>
                </div>

                <div
                    className={cn(
                        'mt-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-between',
                        isContactPage ? 'text-white' : 'text-black'
                    )}
                >
                    <div
                        className={cn(
                            'flex flex-wrap items-center gap-3 text-sm',
                            isContactPage ? 'text-white/70' : 'text-black/70'
                        )}
                    >
                        <MagneticButton
                            size='md'
                            variant='outlinePill'
                            className={cn(
                                'h-[10px] not-last-of-type: rounded-full border w-full md:w-auto bg-transparent transition-colors',
                                isContactPage
                                    ? 'border-white/40 text-white hover:text-black before:bg-white'
                                    : 'border-black/40 text-black hover:text-white before:bg-black'
                            )}
                            data-cursor={isContactPage ? 'black' : 'white'}
                        >
                            <a href='mailto:muhanaskt@gmail.com' className='transition-opacity hover:opacity-80'>
                                muhanaskt@gmail.com
                            </a>
                        </MagneticButton>
                        <MagneticButton
                            size='md'
                            variant='outlinePill'
                            className={cn(
                                'h-[10px] rounded-full border bg-transparent w-full md:w-auto transition-colors',
                                isContactPage
                                    ? 'border-white/40 text-white hover:text-black before:bg-white'
                                    : 'border-black/40 text-black hover:text-white before:bg-black'
                            )}
                            data-cursor={isContactPage ? 'black' : 'white'}
                        >
                            <a href='tel:+917909109268'>+91 790 910 9268</a>
                        </MagneticButton>
                    </div>
                </div>

                <div
                    className={cn(
                        'mt-auto mb-0 md:mb-5 flex flex-col-reverse md:flex-row gap-3 pt-5 text-sm items-end justify-between',
                        isContactPage ? 'text-white/50' : 'text-black/50'
                    )}
                >
                    <div className='flex items-center mt-8 md:mt-0 justify-between w-full md:w-auto gap-5'>
                        <span>© {new Date().getFullYear()} | Anas.</span>
                        <span>IST - {time}</span>
                    </div>
                    <div className="flex w-full md:w-auto items-center justify-center gap-2 md:gap-4">
                        {socialLinks.map(({ href, label, icon: Icon }) => (
                            <div key={label}>
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MagneticButton
                                        className={cn(
                                            'transition-colors',
                                            isContactPage ? 'text-white hover:text-white/70' : 'text-black hover:text-black/70'
                                        )}
                                    >
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
            </div>
        </footer>
    );
}

export default Footer
