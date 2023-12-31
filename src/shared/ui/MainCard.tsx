import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { isMobile } from '../constants'
import { Link } from 'react-router-dom';

interface MainCardProps {
    title: string
    icon: ReactNode
    index: number
}

const MainCard: FC<MainCardProps> = ({ icon, title, index }) => {
    const { t } = useTranslation()

    return (
        <motion.div
            className="group h-[200px] md:h-[250px] lg:h-[320px] bg-black flex items-center justify-center rounded-lg hover:bg-white duration-300 border-[3px] border-black"
            whileInView={{ y: [isMobile ? 0 : 30, 0], opacity: [isMobile ? 1 : 0, 1] }}
            transition={{ duration: 0.2, delay: index / 3 }}
            viewport={{ once: true }}
            animate={isMobile ? "hidden" : "visible"}
        >
            <Link
                to="/prices"
            >
            <div className="flex flex-col gap-5 md:gap-7lg:gap-10 items-center">
                <div className="border-[4px] border-black p-2 rounded-full">
                    <div className="bg-white rounded-full w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] flex items-center justify-center group-hover:bg-black duration-300">
                        {icon}
                    </div>
                </div>
                <p className="text-white text-xl lg:text-2xl text-center font-semibold group-hover:text-black duration-300">
                    {t(title)}
                </p>
            </div>         
               </Link>

        </motion.div>
    )
}

export default MainCard
