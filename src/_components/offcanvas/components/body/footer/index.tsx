'use client';

import Link from 'next/link';
import { MagneticButton } from '@/src/_components/FlotButton';

import { randomId } from '@/src/_utils';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const socialLinks = [

    { href: '#', label: 'Github', icon: FaGithub },
    { href: '#', label: 'Instagram', icon: FaInstagram },
    { href: '#', label: 'Linkedin', icon: FaLinkedinIn },
]
export function OffcanvasFooter() {
    const medias = socialLinks.map(({ href, label, icon: Icon }) => {
        const id = randomId();
        return (
            <li key={id}>
                <Link href={href} target='_blank' rel='noopener' passHref>
                    <MagneticButton>
                        <span className="flex items-center gap-3">
                            <Icon size={18} />
                            {label}
                        </span>
                    </MagneticButton>
                </Link>
            </li>
        );
    });

    return <ul className='flex w-full justify-between gap-10'>{medias}</ul>;
}
