import HeroSection from '@/src/_components/HeroSection'
import WorkSection from '../_components/WorkSection'
import WhatIDo from '../_components/WhatIDo'
import { Analytics } from "@vercel/analytics/next"
import AboutMeSection from '../_components/AboutMeSection'
const HomePage = () => {
    return (
        <div>
            <Analytics />
            <HeroSection />
            <WhatIDo />
            <WorkSection />
            <AboutMeSection />
        </div>
    )
}

export default HomePage
