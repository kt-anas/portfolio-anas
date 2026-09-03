"use client"

import { useEffect, useState } from "react";
import Button from "../Button";
import StaggeredMenu from "../StaggeredMenu";

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
];



const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={
                `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled && `shadow - [0_1px_0_0_rgba(0, 0, 0, 0.06)]`} `


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
                </div>




            </div>
            {/* <div >
                <StaggeredMenu
                    position="right"
                    items={menuItems}
                    socialItems={socialItems}
                    displaySocials
                    displayItemNumbering={true}
                    menuButtonColor="#000"
                    openMenuButtonColor="#fff"
                    changeMenuColorOnOpen={true}
                    colors={['#B497CF', '#5227FF']}
                    accentColor="#5227FF"
                    isFixed={true} // Set to true to make the menu fixed
                    onMenuOpen={() => console.log('Menu opened')}
                    onMenuClose={() => console.log('Menu closed')}
                />
            </div> */}
        </header >
    )
}

export default Header
