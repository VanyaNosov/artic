import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { projectDetails } from '@/shared/constants/projectDetails'
import Hero from '@/sections/Hero'
import { useTranslation } from 'react-i18next'
import { Image } from '@/shared/ui/Image'

const Project = () => {
    const { id } = useParams()
    const { pathname } = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        })
    }, [])

    const data = projectDetails.filter((obj) => Number(obj.id) === Number(id))

    useEffect(() => {
        if (data.length === 0) {
            navigate('/')
        }
    }, [data, navigate])

    return (
        <main className="container pb-20">
            <Hero
                title={data[0].name}
                text={data[0].formatProject}
                textRotator={false}
                button={false}
                fullScreen={false}
            />
            <div className="flex gap-20 flex-col">
                <div className="flex justify-center items-center">
                    <motion.div
                        className=" max-w-full text-center lg:max-w-[80%]"
                        whileInView={{opacity: [0, 1],}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2}}
                        initial="hidden"
                    >
                        <Image
                            src={data[0].additional}
                            alt={data[0].name}
                            width={998}
                            height={659}
                        />
                        <a
                            href={data[0].link}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="text-black/70 font-medium hover:text-black transition-300 border-b-2 p-1"
                        >
                            {data[0].name}
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    className=" ml-auto mr-auto max-w-4xl"
                    initial="hidden"
                    whileInView={{
                        y: [30, 0],
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}

                >
                    <h1 className="font-semibold text-2xl leading-10">
                        {t('works.title1')}
                    </h1>
                    <p className=" text-lg font-medium leading-6">
                        {t(data[0].intro)}
                    </p>
                </motion.div>
                <div className="flex justify-center items-center">
                    <motion.div
                        className="max-w-full lg:max-w-[80%]"
                        whileInView={{opacity: [0, 1],}}
                        transition={{ duration: 0.5}}
                        viewport={{ once: true }}
                        initial="hidden"
                    >
                        <Image
                            src={data[0].mainImage}
                            className="rounded-2xl"
                            alt={data[0].name}
                            width={998}
                            height={561}
                        />
                    </motion.div>
                </div>
                <motion.div
                    className=" ml-auto mr-auto max-w-4xl"
                    initial="hidden"
                    whileInView={{
                        y: [30, 0],
                        opacity: [0, 1],
                    }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h1 className="font-semibold text-2xl leading-10">
                        {t('works.title2')}
                    </h1>
                    <p className=" text-lg font-medium leading-6">
                        {t(data[0].quality)}
                    </p>
                </motion.div>
            </div>
        </main>
    )
}

export default Project
