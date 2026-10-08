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



];

export const workCategories: WorkCategory[] = [
    'All',
    'WebFlow / Framer',
    'Shopify',
    'React / Next.js',
    'Playground',
];
