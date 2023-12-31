import { homePortfolio } from '@/shared/constants'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Image } from '@/shared/ui/Image'

const CustomPrevArrow = ({
    sliderRef,
}: {
    sliderRef: React.MutableRefObject<Slider>
}) => (
    <button
        className="absolute top-1/2 -translate-y-1/2 text-3xl sm:text-6xl left-4 z-[9999] group"
        onClick={() => sliderRef.current.slickPrev()}
    >
        <IoIosArrowBack className="text-white group-hover:scale-125 group-hover:text-white/70 duration-300" />
    </button>
)

const CustomNextArrow = ({
    sliderRef,
}: {
    sliderRef: React.MutableRefObject<Slider>
}) => (
    <button
        className="absolute top-1/2 -translate-y-1/2 text-3xl sm:text-6xl right-4 z-[9999] group"
        onClick={() => sliderRef.current.slickNext()}
    >
        <IoIosArrowBack className="text-white group-hover:scale-125 group-hover:text-white/70 duration-300 rotate-180" />
    </button>
)

const Portfolio = () => {
    const { t } = useTranslation()
    const sliderRef = useRef() as React.MutableRefObject<Slider>

    const portfolioSliderSettings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow sliderRef={sliderRef} />,
        nextArrow: <CustomNextArrow sliderRef={sliderRef} />,
    }

    return (
        <motion.section
            className="pb-[8rem] md:pb-[11rem] pt-10 lg:pt-20"
        >
            <h2 className='text-[#2C698D] text-center text-3xl md:text-4xl lg:text-6xl font-semibold mb-6 sm:mb-8 md:mb-10'>
                {t("home.portfolioTitle")}
            </h2>
            <Slider ref={sliderRef} {...portfolioSliderSettings} className='max-w-full sm:max-w-3xl lg:max-w-5xl mx-auto relative container'>
                {homePortfolio.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: 'transparent',
                        }}
                        id="slider"
                    >
                        <Link to={item.link} className="rounded-2xl pt-5 h-[30dvh] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center relative text-white">
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="rounded-2xl block w-full h-full absolute left-0 top-0 z-[1]"
                                width={992}
                                height={670}
                                loading={'lazy'}
                            />
                            <div className="gradient-overlay rounded-2xl" />
                            <div className="flex flex-col items-center gap-2 sm:gap-4 z-[3] mx-5">
                                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold drop-shadow-xl">
                                    {item.title}
                                </h2>
                                <p className="text-xl sm:text-2xl lg:text-4xl font-semibold text-center drop-shadow-xl">
                                    {t(item.subtitle)}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </motion.section>
    )
}

export default Portfolio
