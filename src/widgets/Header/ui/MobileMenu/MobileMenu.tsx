import { IoLogoInstagram } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { PiTelegramLogoLight } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { headerLinks } from '../../model/const/headerLinks'

interface MobileMenuProps {
    isMobileMenuOpen: boolean
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
}) => {
    const { i18n, t } = useTranslation()

    const currentLanguage =
        localStorage.getItem('i18nextLng') !== 'uk-UA'
            ? localStorage.getItem('i18nextLng')
            : 'ua'

    const changeLanguage = (ln: 'en' | 'ua') => {
        i18n.changeLanguage(ln)
    }
    return (
        <div
            className={`${isMobileMenuOpen
                    ? 'opacity-100 translate-y-[0]'
                    : 'opacity-0 -translate-y-[150%]'
                } fixed flex lg:hidden w-screen h-screen z-50 transition-all duration-300 bg-white/70 backdrop-blur`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <div className="container flex w-full justify-center items-center flex-col">
                <div className="flex justify-between w-full items-center mb-[10%]">
                    <div className="flex gap-3">
                        <a
                            className="bg-black rounded-full px-2 py-2"
                            href={'#'}
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            <IoLogoInstagram size={20} color="white" />
                        </a>
                        <a
                            className="bg-black rounded-full px-2 py-2"
                            href={'#'}
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            <FaLinkedinIn size={20} color="white" />
                        </a>
                        <a
                            className="bg-black rounded-full px-2 py-2"
                            href={'#'}
                            referrerPolicy="no-referrer"
                            target="_blank"
                        >
                            <PiTelegramLogoLight size={20} color="white" />
                        </a>
                    </div>
                    <div className="flex gap-2 items-center justify-end w-[117px] text-lg">
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
                </div>
                <nav className="w-full flex flex-col">
                    <ul className="w-full h-full flex flex-col justify-center gap-7 items-start text-black text-[17px] font-semibold">
                        {headerLinks.map((link) => (
                            <li
                                key={link}
                                className="w-full flex items-center uppercase"
                            >
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'w-full border-black border-b-2 pb-2'
                                            : 'w-full opacity-70 border-black border-b-2 pb-2'
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
                </nav>
                <div className='flex flex-col gap-1 mt-[10%] mr-auto'>
                    <a href="tel:380733887667" className='text-lg font-semibold'>(073) 388-76-67</a>
                    <a href="mailto:customers.arctic@gmail.com" className='text-lg font-semibold'>
                        customers.arctic@gmail.com
                        </a>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
