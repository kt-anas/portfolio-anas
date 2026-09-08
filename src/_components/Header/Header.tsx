"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Button from "../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scale, slideOut } from "./variants";

const Header = () => {
    const [active, setActive] = useState<string | null>(null);
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname);

    const navItems = [
        { href: "/", title: "Home" },
        { href: "#work", title: "Work" },
        { href: "#about", title: "About" },
        { href: "#contact", title: "Contact" },
    ];

    const items = navItems.map(({ href, title }, index) => {
        const id = index;
        return (
            <motion.li
                key={id}
                className='relative my-4 flex  items-center'
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
                    className="absolute top-full left-1/2 -translate-x-1/2"
                    variants={scale}

                    animate={activeLink === href ? 'open' : 'closed'}
                >
                    <Dot size={36} />
                </motion.div>

            </motion.li>
        );
    });

    return (
        <>
            <header>
                <div className="w-full  flex items-center justify-between">
                    <div className="container-fluid flex items-center  justify-between h-19">
                        <div className="font-bold text-4xl">ANAS.</div>

                        <ul className="flex items-center gap-6">
                            {items}
                        </ul>

                        <div>
                            <Button />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
