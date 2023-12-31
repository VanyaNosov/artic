import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { awardsArray, isMobile } from '@/shared/constants'
import { Image } from '@/shared/ui/Image/Image.tsx'

const Awards = () => {
    const { t } = useTranslation()

    return (
        <section className="bg-[#2C698D] py-6 sm:py-10 lg:pt-16 lg:pb-20 text-white">
            <div className="container">
                <motion.h2
                    className="text-3xl lg:text-4xl xl:text-6xl font-semibold mb-8 md:mb-16 capitalize"
                    whileInView={{
                        y: [isMobile ? 0 : 30, 0],
                        opacity: [isMobile ? 1 : 0, 1],
                    }}
                    transition={{ duration: 0.2 }}
                    viewport={{ once: true }}
                    animate={isMobile ? 'hidden' : 'visible'}
                >
                    {t('home.stackTitle')}
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
                    {awardsArray.map((award, i) => (
                        <motion.div
                            className="flex flex-col gap-4 lg:gap-6"
                            key={i}
                            whileInView={{
                                y: [isMobile ? 0 : 30, 0],
                                opacity: [isMobile ? 1 : 0, 1],
                            }}
                            transition={{ duration: 0.2, delay: i / 3 }}
                            viewport={{ once: true }}
                            animate={isMobile ? 'hidden' : 'visible'}
                        >
                            <div className="w-12 md:w-16 min-w-[48px] md:min-w-[64px] h-12 md:h-16">
                                <Image
                                    src={award.image}
                                    alt="award img"
                                    className="w-full h-full"
                                    width={64}
                                    height={64}
                                    loading={'lazy'}
                                />
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex justify-between items-center text-xl font-semibold pb-3 border-b-2 border-white">
                                    <h4>{t(award.title)}</h4>
                                    <p>{award.awardsCount}</p>
                                </div>
                                <ul className="flex flex-col gap-2">
                                    {award.awards.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex justify-between items-center text-lg font-medium text-white"
                                        >
                                            <p>{item.title}</p>
                                            <p>{item.count}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Awards
