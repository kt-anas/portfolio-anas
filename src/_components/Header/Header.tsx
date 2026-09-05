"use client"

import { useEffect, useState } from "react";
import Button from "../Button";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (

        <>
            <header
                className={
                    `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white  `


                }
            >
                <div className="w-full  flex items-center justify-between">
                    <div className="container-fluid flex items-center  justify-between h-19">
                        <div className="font-bold text-4xl">
                            ANAS.
                        </div>
                        <div className="h-[38px] px-5 rounded-full border border-[#e5e5e5] flex items-center gap-2 text-[14px] font-medium text-[18px] leading-[26px] text-[#030303]  hover:border-black transition-all ">
                            Based on California, USA
                        </div>

                        <div className="h-[38px] px-5 rounded-full border border-[#e5e5e5] flex items-center gap-2 text-[14px] font-medium text-[18px] leading-[26px] text-[#030303]  hover:border-black transition-all ">

                            Email: info@example.com
                        </div>
                        <div>
                            <Button />
                        </div>
                        <button

                            className="w-12 h-12 rounded-full border flex items-center justify-center"
                        >
                            <span className="text-xl">☰</span>
                        </button>
                    </div>


                </div>

            </header >

        </>
    )
}

export default Header
