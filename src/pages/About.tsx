import Hero from '@/sections/Hero.tsx'
import { motion } from 'framer-motion'
import img1 from '../shared/assets/img/Our-IT-company-0ne.png?optimized'
import img2 from '../shared/assets/img/Our-IT-company-Two.png?optimized'
import Slider from 'react-slick'
import Possibilities from '@/sections/Possibilities'
import { useTranslation } from 'react-i18next'
import { crew, settings } from '@/shared/constants/about'
import { items } from '@/shared/constants/home'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Image } from '@/shared/ui/Image/Image.tsx'

const About = () => {
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        })
    }, [])

    return (
        <main>
            <div className="container">
                <Hero
                    title={'about.title'}
                    text={'about.text'}
                    subtext={'about.subtext'}
                />

                <div className="about-photos flex flex-col min-[540px]:flex-row md:gap-14 gap-8 justify-center pt-20 pb-[8rem] md:pb-[11rem]">
                    <div className="about-item min-[540px]:mt-[20%] lg:mt-[10%]">
                        <Image
                            className="object-contain"
                            src={img1}
                            alt="Abstractions"
                            width={710}
                            height={620}
                        />
                    </div>
                    <div className="about-item flex flex-col gap-4 md:gap-7">
                        <div>
                            <Image
                                className="object-cover"
                                src={img2}
                                alt="Buildings"
                                width={710}
                                height={620}
                            />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-5 sm:mb-7 md:mb-10 max-w-3xl lg:max-w-xl xl:max-w-2xl">
                            {t('about.mainText')}{' '}
                            <span className="text-[#888a8b]">
                                {t('about.mainSubtext')}
                            </span>
                        </h2>
                        <div>
                            <Link
                                to="/contacts"
                                className="bg-black border-[3px] border-black px-5 md:px-10 py-2 md:py-4 rounded-[40px] text-white font-medium hover:bg-transparent hover:text-black duration-500 transition"
                            >
                                {t('home.buttonText')}
                            </Link>
                        </div>
                    </div>
                </div>

                <Possibilities items={items} />

                <div className="crew">
                    <div className="block-title flex flex-col gap-5 my-12">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 max-w-xl md:max-w-2xl lg:max-w-4xl">
                            <p>{t('about.crewText')}</p>
                            <span className="text-[#888A8B]">
                                {t('about.crewSubtext')}
                            </span>
                        </div>

                        <Slider className="mb-8" {...settings}>
                            {crew.map((el) => (
                                <motion.div
                                    className="px-3 md:px-6 lg:px-10 text-center my-2 md:my-3 lg:my-4"
                                    key={el.name}
                                    whileInView={{
                                        y: [20, 0],
                                        opacity: [0, 1],
                                    }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={el.img}
                                        className="rounded-lg mb-3 mx-auto"
                                        width={216}
                                        height={270}
                                        loading={'lazy'}
                                    />
                                    <p className="font-bold md:text-xl">
                                        {t(el.name)}
                                    </p>
                                    <p className="text-[#888A8B] text-sm py-2">
                                        {t(el.position)}
                                    </p>
                                    <div className="social flex gap-3 justify-center">
                                        {/* <a
                                            className="flex gap-2 items-center"
                                            href=""
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                viewport={{ once: true }}
                                            >
                                                <FaLinkedinIn />
                                            </motion.div>
                                        </a>
                                        <a
                                            className="flex gap-2 items-center"
                                            href=""
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.2 }}
                                                viewport={{ once: true }}
                                            >
                                                <FaInstagram />
                                            </motion.div>
                                        </a> */}
                                    </div>
                                </motion.div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
