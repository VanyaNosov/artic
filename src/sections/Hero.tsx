import { FC } from 'react'
import { motion } from 'framer-motion'
import arrow from '@/shared/assets/arrow.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { isMobile } from '@/shared/constants'

interface HeroProps {
    title: string
    text: string
    subtext?: string
    textRotator?: boolean
    button?: boolean
    fullScreen?: boolean
}

const Hero: FC<HeroProps> = ({
    subtext,
    text,
    title,
    button,
    textRotator,
    fullScreen,
}) => {
    const { t } = useTranslation()

    const sectionScroll = () => {
        if (textRotator) {
            window.scrollTo({
                top: isMobile ? window.innerHeight / 1.4 : window.innerHeight / 0.95,
                behavior: 'smooth',
            })
        } else {
            window.scrollTo({
                top: window.innerHeight / 1.3,
                behavior: 'smooth',
            })
        }
    }

    return (
        <section
            className={`container flex flex-col items-center ${fullScreen?'h-[100vh] my-0':'my-[5rem]'} justify-center min-h-max`}
        >
            <motion.h1
                className="text-[55px] leading-[1.3] sm:text-8xl lg:text-9xl font-medium text-center"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {t(title)}
            </motion.h1>
            {textRotator ? (
                <div className="wrapper">
                    <ul className="dynamic-txts text-center">
                        <li>
                            <span>{t('home.rotatorTitle1')}</span>
                        </li>
                        <li>
                            <span>{t('home.rotatorTitle2')}</span>
                        </li>
                        <li>
                            <span>{t('home.rotatorTitle3')}</span>
                        </li>
                        <li>
                            <span>{t('home.rotatorTitle4')}</span>
                        </li>
                    </ul>
                </div>
            ) : null}
            <motion.p
                className="mt-10 text-xl lg:text-2xl text-center text-[#222] font-semibold mb-16 sm:mb-10 sm:max-w-xl lg:max-w-3xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: textRotator ? 1.1 : 0.7 }}
                viewport={{ once: true }}
            >
                {t(text)}{' '}
                {subtext ? (
                    <span className="text-[#888a8b]">{t(subtext)}</span>
                ) : null}
            </motion.p>
            {button && window.innerWidth < 640 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/contacts"
                        className="bg-black block border-[3px] border-black px-10 py-4 rounded-[40px] text-white font-medium mb-14 hover:bg-transparent hover:text-black duration-500 transition"
                    >
                        {t('home.buttonText')}
                    </Link>
                </motion.div>
            ) : null}
            <motion.button
                onClick={sectionScroll}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: textRotator ? 1.8 : 1.3 }}
                viewport={{ once: true }}
            >
                <img src={arrow} className=' max-w-3 min-h-4' alt="arrow" />
            </motion.button>
        </section>
    )
}

export default Hero
