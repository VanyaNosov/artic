import { Link } from 'react-router-dom'
import { footerPageWorks, footerSocial } from '@/shared/constants/footer'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { headerLinks } from './Header/model/const/headerLinks.ts'
import { isMobile } from '@/shared/constants/index.ts'
import logo from '../../public/logo-white.png'
import { Image } from '@/shared/ui/Image/Image.tsx'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="bg-black text-white">
            <div className="container">
                <div className="py-10 md:py-14 relative">
                    <motion.h2
                        className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold"
                        whileInView={{
                            y: [isMobile ? 0 : 80, 0],
                            opacity: [isMobile ? 1 : 0, 1],
                        }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {t('footer.title')}
                    </motion.h2>
                    <Link
                        to="/contacts"
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-[80px] sm:w-[100px] lg:w-[120px] xl:w-[140px] h-[80px] sm:h-[100px] lg:h-[120px] xl:h-[140px] bg-[#2C698D] text-white rounded-full flex items-center justify-center hover:scale-110 duration-300"
                    >
                        <p className="text-center font-semibold text-sm sm:text-lg">
                            {t('footer.buttonText')}
                            <br />
                            {t('footer.buttonSubtext')}
                        </p>
                    </Link>
                </div>
                <div className="py-7">
                    <div className="flex justify-between gap-10 flex-wrap md:flex-nowrap">
                        <div>
                            <Link
                                to="/"
                                className="font-bold text-xl sm:text-2xl lg:text-3xl flex gap-2 md:gap-4 items-center"
                            >
                                <Image
                                    className="max-w-[45px] md:max-w-[60px]"
                                    src={logo}
                                    width={60}
                                    height={60}
                                    alt="Logo"
                                />
                                ARCTIC WEB
                            </Link>
                            <p className="text-[#888a8b] md:text-lg max-w-sm pb-5 mb-5 border-b border-[#888a8b]">
                                {t('footer.text')}
                            </p>
                        </div>
                        <nav>
                            <ul className="flex flex-col gap-2">
                                <li className="text-lg">
                                    {t('footer.subtitle1')}
                                </li>
                                {headerLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            to={
                                                link === 'header.home'
                                                    ? '/'
                                                    : `/${link.replace(
                                                        'header.',
                                                        ''
                                                    )}`
                                            }
                                            className="block first-letter:uppercase text-[#888a8b] hover:text-white duration-300"
                                        >
                                            {t(link)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <ul className="flex flex-col gap-2">
                            <li className="text-lg">{t('footer.subtitle2')}</li>
                            {footerPageWorks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={`${link.link}`}
                                        className="first-letter:uppercase text-[#888a8b] hover:text-white duration-300"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col gap-3">
                            <h6 className="text-lg">{t('footer.subtitle3')}</h6>
                            <ul className="flex items-center gap-2 -ml-2">
                                {footerSocial.map((item, i) => (
                                    <a
                                        href={item.link}
                                        key={i}
                                        target="_blank"
                                        referrerPolicy="no-referrer"
                                        className="w-10 min-w-[40px] h-10 bg-transparent flex items-center justify-center rounded-full hover:bg-[#81818B]/40 duration-300"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </ul>
                            <a
                                href="mailto:customers.arctic@gmail.com"
                                className="text-sm font-semibold"
                            >
                                customers.arctic@gmail.com
                            </a>
                        </div>
                    </div>
                    <p className="mt-5 ">
                        @{new Date().getFullYear()} {t('footer.bottomText')}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
