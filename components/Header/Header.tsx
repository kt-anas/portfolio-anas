"use client"

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
    return (
        <>
            <div className='w-full h-[50px] flex  space-between'>
                <div className=''>
                    A
                </div>

                <div className="font-medium text-[18px] leading-[26px] text-[#030303]">
                    Based on California, USA
                </div>

                <div className="font-medium text-[18px] leading-[26px] text-[#030303]">

                    Email: info@example.com
                </div>

                <div>
                    <Button />
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
        </>
    )
}

export default Header
