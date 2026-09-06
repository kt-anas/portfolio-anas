import HeroSection from '@/src/_components/HeroSection'
import WorkSection from '../_components/WorkSection'
import WhatIDo from '../_components/WhatIDo'
import Footer from '../_components/Footer'
import AboutMeSection from '../_components/AboutMeSection'

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutMeSection />
            <WorkSection />
            <WhatIDo />
        </div>
    )
}

export default HomePage
