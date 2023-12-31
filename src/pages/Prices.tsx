import { motion } from 'framer-motion'
import Hero from '@/sections/Hero.tsx'
import { useTranslation } from 'react-i18next'
import { services } from '@/shared/constants/prices.tsx'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Prices = () => {
    const { t } = useTranslation()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        })
    }, [])

    return (
        <main>
            <motion.section
                className="pb-16 md:pb-20 lg:pb-32"
                viewport={{ once: true }}
            >
                <Hero
                    title={'prices.title'}
                    text={'prices.text'}
                    subtext={'prices.subtext'}
                />

                <div className=" min-[1800px]:max-w-[1800px] min-[1800px]:mx-auto services p-3 text-center grid md:grid-cols-2 xl:grid-cols-4  gap-x-6 gap-y-16 content-center justify-center">
                    {services.map((el, i) => (
                        <motion.div
                            className="rounded-lg flex-1 relative services-item flex gap-4 flex-col p-4 py-10 border-solid border-2 border-black lg:my-0 my-8"
                            key={i}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="absolute -top-8 scale-150 bg-black text-white right-2/4 p-4 text-2xl rounded-full translate-x-2/4">
                                {el.img}
                            </div>
                            <p className="font-bold text-lg">{t(el.servis)}</p>
                            <h2 className="text-3xl font-semibold uppercase">{t("prices.from")} {el.price} USD</h2>
                            <span>{t(el.info)}</span>
                            <ul className="flex flex-col gap-3 flex-1">
                                {el.features.map((feature, i) => (
                                    <li key={i}>
                                        {i + 1}. {t(feature)}
                                    </li>
                                ))}
                            </ul>
                            <motion.div
                                className='mt-8'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/contacts"
                                    className="px-6 py-4 border max-w-max mx-auto bg-black text-white rounded-full  text-md"
                                >
                                    {t('prices.buttonText')}
                                </Link>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </main>
    )
}

export default Prices
