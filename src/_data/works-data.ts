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
    description: string;
    link?: string;
}


export const worksData: Work[] = [
    {
        id: 1,
        title: 'Adam',
        subtitle: 'Personal Portfolio',
        category: 'WebFlow / Framer',

        image: '/images/adam.png',
        bgColor: '#f5f5f5',
        year: '2024',
        tags: ['Next.js', 'Framer Motion', 'Tailwind'],
        description: 'A refined personal portfolio experience built around expressive motion, clear storytelling, and a minimalist editorial layout.',
        link: 'https://adam-free.framer.website',
    },
    {
        id: 2,
        title: 'Mad World',
        subtitle: 'Fashion E-Commerce',
        category: 'React / Next.js',
        image: '/images/modevello.png',
        bgColor: '#1a1a2e',
        year: '2024',
        tags: ['React', 'Shopify', 'GSAP'],
        description: 'A fashion-focused e-commerce storefront with a bold visual system, product-first presentation, and smooth shopping experience.',
        link: 'https://modevella-clone.vercel.app',
    },



];

export const workCategories: WorkCategory[] = [
    'All',
    'WebFlow / Framer',
    'Shopify',
    'React / Next.js',
    'Playground',
];
