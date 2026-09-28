export type WorkCategory = 'All' | 'React / Next.js' | 'Shopify' | 'WebFlow / Framer' | 'Playground';

export interface Work {
    id: number;
    title: string;
    subtitle: string;
    category: WorkCategory;
    image: string;
    bgColor: string;
    year: string;
    tags: string[];
    link?: string;
}


export const worksData: Work[] = [
    {
        id: 1,
        title: 'Adam',
        subtitle: 'Personal Portfolio',
        category: 'WebFlow / Framer',

        image: '/images/screen-shot-copy.png',
        bgColor: '#f5f5f5',
        year: '2024',
        tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    },
    {
        id: 2,
        title: 'Mad World',
        subtitle: 'Fashion E-Commerce',
        category: 'React / Next.js',
        image: 'https://wp.aqlova.com/aleric/personal-portfolio/wp-content/uploads/sites/12/2025/12/thumb-2.jpg',
        bgColor: '#1a1a2e',
        year: '2024',
        tags: ['React', 'Shopify', 'GSAP'],
    },
    {
        id: 3,
        title: 'Creäative',
        subtitle: 'Agency Website',
        category: 'WebFlow / Framer',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=80',
        bgColor: '#0d0d0d',
        year: '2024',
        tags: ['Framer', 'Animation', 'Design'],
    },
    {
        id: 4,
        title: 'Modevelle',
        subtitle: 'Luxury Fashion Brand',
        category: 'Shopify',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
        bgColor: '#faf8f5',
        year: '2023',
        tags: ['WordPress', 'WooCommerce', 'ACF'],
    },

    {
        id: 6,
        title: 'Botanica',
        subtitle: 'Plant Shop Redesign',
        category: 'Shopify',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
        bgColor: '#e8f5e9',
        year: '2023',
        tags: ['WordPress', 'Elementor', 'WooCommerce'],
    },
    {
        id: 7,
        title: 'Pulse',
        subtitle: 'Music Streaming App',
        category: 'Playground',
        image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80',
        bgColor: '#1a0533',
        year: '2024',
        tags: ['React', 'Web Audio API', 'GSAP'],
    },
    {
        id: 8,
        title: 'Orbit',
        subtitle: 'Interactive Data Viz',
        category: 'Playground',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
        bgColor: '#020817',
        year: '2024',
        tags: ['Three.js', 'WebGL', 'React'],
    },
    {
        id: 9,
        title: 'Zephyr',
        subtitle: 'Travel Platform',
        category: 'React / Next.js',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=80',
        bgColor: '#e8f4fd',
        year: '2023',
        tags: ['Framer', 'CMS', 'Motion'],
    },
];

export const workCategories: WorkCategory[] = [
    'All',
    'React / Next.js',
    'Shopify',
    'WebFlow / Framer',
    'Playground',
];
