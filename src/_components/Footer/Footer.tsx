"use client"
import Link from 'next/link'
import { MagneticButton } from '../FlotButton'
import { FaGithub, FaDribbble, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { scale, slideOut } from './variants';
import { Dot } from "lucide-react";
import { usePathname } from 'next/navigation';


const socialLinks = [

    { href: '#', label: 'Linkedin', icon: FaLinkedinIn },
    { href: '#', label: 'Github', icon: FaGithub },
    { href: '#', label: 'Instagram', icon: FaInstagram },
]

const navItems = [
    { href: "/", title: "Home" },
    { href: "/works", title: "Work" },
    { href: "#about", title: "About" },
    { href: "#contact", title: "Contact" },
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

    return (
        <footer id='contact' className='min-h-screen bg-[#FFFFFF] pt-5 md:pt-24 '>
            <div className='container-fluid   min-h-[calc(100vh-6rem)] flex flex-col '>
                <div className="flex flex-col   pb-10">

                    <p className="mb-3 text-[0.75rem] md:text-[1rem] uppercase tracking-[0.2em] text-black/60">
                        Let’s build something bold
                    </p>

                    <h2 className="text-[3rem] leading-[4.063rem] tracking-[-0.06em]  xl:text-[9.063rem] font-medium xl:leading-[9.063rem] xl:tracking-[-0.06em] text-black">
                        Let’s Work

                        Together.
                    </h2>


                </div>

                <div className='mt-16 flex flex-col gap-8 text-black md:flex-row md:items-center md:justify-between'>



                    <div className='flex flex-wrap items-center gap-3 text-sm text-black/70'>
                        <MagneticButton
                            size='md'
                            variant='outlinePill'
                            className='h-[10px]  not-last-of-type: rounded-full border w-full  md:w-auto border-black/40 bg-transparent text-black hover:text-white before:bg-black'
                            data-cursor='white'
                        >
                            <a href='mailto:muhanaskt@gmail.com' className='transition-opacity hover:opacity-80'>
                                muhanaskt@gmail.com
                            </a>
                        </MagneticButton>
                        <MagneticButton
                            size='md'
                            variant='outlinePill'
                            className='h-[10px]  rounded-full border border-black/40 bg-transparent w-full  md:w-auto text-black hover:text-white before:bg-black '
                            data-cursor='white'
                        >
                            <a href='tel:+90 790 910 9268'>+91 790 910 9268</a>
                        </MagneticButton>
                    </div>
                </div>

                <div className='mt-auto mb-0 md:mb-5 flex flex-col-reverse md:flex-row gap-3   pt-5 text-sm text-black/50 items-end justify-between'>

                    <div className='flex items-center mt-8 md:mt-0  justify-between w-full md:w-auto   gap-5'>
                        <span>© {new Date().getFullYear()} | Anas.</span>
                        <span>
                            IST - {time}
                        </span>
                    </div>
                    <div className=" flex w-full md:w-auto items-center justify-center gap-2 md:gap-4">
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
            </div>
        </footer>
    )
}

export default Footer
