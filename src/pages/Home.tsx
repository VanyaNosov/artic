import Hero from '@/sections/Hero.tsx'
import Portfolio from '@/sections/Portfolio.tsx'
import Possibilities from '@/sections/Possibilities.tsx'
import AboutUsSection from '@/sections/AboutUsSection.tsx'
import Awards from '@/sections/Awards.tsx'
import { possibilitiesCards } from '@/shared/constants/home'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        })
    }, [])

    return (
        <main>
            <Hero
                text="home.text"
                title="home.mainTitle"
                subtext="home.subtext"
                textRotator
                fullScreen 
                button
            />
            <Portfolio />
            <div className="container">
                <Possibilities items={possibilitiesCards} />
            </div>
            <AboutUsSection />
            <Awards />
        </main>
    )
}

export default Home
