import { Link } from 'react-router-dom'
import { Image } from '@/shared/ui/Image/Image.tsx'
// @ts-expect-error: testing
import teamImg1 from '../shared/assets/team/1.png?optimized-mb-250-200'
// @ts-expect-error: testing
import teamImg2 from '../shared/assets/team/2.png?optimized-mb-250-200'
// @ts-expect-error: testing
import teamImg3 from '../shared/assets/team/3.png?optimized-mb-250-200'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const AboutUsSection = () => {
    const [currentImage, setCurrentImage] = useState(1)

    const { t } = useTranslation()

    const teamImages = [teamImg1, teamImg2, teamImg3]

    const imageClasses = [
        'absolute w-[250px] sm:w-[300px] h-[200px] sm:h-[250px] xl:w-[400px] xl:h-[350px]',
        'absolute w-[250px] sm:w-[300px] h-[200px] sm:h-[250px] xl:w-[400px] xl:h-[350px] rotate-[15deg]',
        'absolute w-[250px] sm:w-[300px] h-[200px] sm:h-[250px] xl:w-[400px] xl:h-[350px] rotate-[-15deg]',
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage % 3) + 1)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="container pt-10 sm:pt-16 md:pt-20 pb-[9rem] lg:pb-[11rem]">
            <div className="flex flex-col-reverse lg:flex-row gap-0 sm:gap-10 lg:items-center">
                <div>
                    <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-7 sm:mb-10 md:mb-16 max-w-3xl lg:max-w-xl xl:max-w-2xl">
                        {t('home.aboutSectionTitle')}{' '}
                        <span className="text-[#888a8b]">
                            {t('home.aboutSectionSubtitle')}
                        </span>
                    </motion.h2>
                    <Link
                        to="/about"
                        className="block w-fit bg-black border-[3px] border-black px-5 md:px-10 py-2 md:py-4 rounded-[40px] text-white font-medium hover:bg-transparent hover:text-black duration-500 transition"
                    >
                        {t('home.aboutSectionButtonText')}
                    </Link>
                </div>
                <div className="relative w-[300px] sm:w-[350px] h-[250px] xl:w-[450px] xl:h-[350px]">
                    {imageClasses.map((сlass, index) => (
                        <div
                            key={index}
                            className={сlass}
                            style={{
                                opacity: index === currentImage - 1 ? 1 : 0,
                                transition: 'opacity 1s ease-in-out',
                            }}
                        >
                            <Image
                                src={teamImages[index]}
                                alt={`team photo ${index + 1}`}
                                className="w-full h-full"
                                loading={'lazy'}
                                width={477}
                                height={441}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection
