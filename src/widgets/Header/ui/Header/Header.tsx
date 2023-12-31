import { useState, useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoMenuOutline } from 'react-icons/io5'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MobileMenu from '../MobileMenu/MobileMenu'
import { headerLinks } from '../../model/const/headerLinks'
import logo from '../../../../shared/assets/logo/logo.png?optimized'
import { Image } from '@/shared/ui/Image/Image.tsx'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const { i18n, t } = useTranslation()

    const currentLanguage =
        localStorage.getItem('i18nextLng') !== 'uk-UA'
            ? localStorage.getItem('i18nextLng')
            : 'ua'

    const changeLanguage = (ln: 'en' | 'ua') => {
        i18n.changeLanguage(ln)
    }

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <header className="container pt-5 lg:pt-8">
                <div className="flex justify-between items-center mb-5 relative z-50 ">
                    <div className="lg:flex hidden">
                        {/* <a
                            className="bg-white rounded-full px-2 py-2"
                            href={'https://jointoit.com/'}
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            <IoLogoInstagram size={23} />
                        </a>
                        <a
                            className="bg-white rounded-full px-2 py-2"
                            href={'https://jointoit.com/'}
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            <FaLinkedinIn size={23} />
                        </a>
                        <a
                            className="bg-white rounded-full px-2 py-2"
                            href={'https://jointoit.com/'}
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            <PiTelegramLogoLight size={23} />
                        </a> */}
                        <div className="lg:flex flex-col gap-1">
                            <a
                                href="tel:380733887667"
                                className="text-lg font-semibold"
                            >
                                (073) 388-76-67
                            </a>
                        </div>
                    </div>
                    <Link
                        to="/"
                        className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex gap-2 md:gap-4 justify-center items-center"
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
                    <div className="lg:flex hidden gap-2 items-center justify-end w-[198px] text-lg">
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`${currentLanguage === 'en'
                                    ? 'font-bold'
                                    : 'font-medium'
                                }`}
                        >
                            EN
                        </button>
                        <span>/</span>
                        <button
                            onClick={() => changeLanguage('ua')}
                            className={`${currentLanguage === 'ua'
                                    ? 'font-bold'
                                    : 'font-medium'
                                }`}
                        >
                            UA
                        </button>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        >
                            {isMobileMenuOpen ? (
                                <RxCross2 className="text-4xl md:text-5xl" />
                            ) : (
                                <IoMenuOutline className="text-4xl md:text-5xl" />
                            )}
                        </button>
                    </div>
                </div>
                <ul className="hidden lg:flex gap-8 justify-center items-center text-black text-[17px] font-semibold">
                    {headerLinks.map((link) => (
                        <li key={link} className="uppercase">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-black border-b-2 pb-1 hover:opacity-100 hover:border-black duration-300'
                                        : 'opacity-70 border-black/70 border-b-2 pb-1 hover:opacity-100 hover:border-black duration-300'
                                }
                                to={
                                    link === 'header.home'
                                        ? '/'
                                        : `/${link.replace('header.', '')}`
                                }
                            >
                                {t(link)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </header>
        </>
    )
}

export default Header
