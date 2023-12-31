import { useState, useEffect, FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Image, OptimizedSrc } from '@/shared/ui/Image'

interface ProjectProps {
    name: string
    img: OptimizedSrc
    formatProject: string
    id: number
}

const ProjectCard: FC<ProjectProps> = ({ name, img, id, formatProject }) => {
    const { t } = useTranslation()

    const [cursorVariante, setCursorVariante] = useState('default')
    const [arrowActive, setArrowActive] = useState('default')
    const [_, setMousePosition] = useState({
        x: 0,
        y: 0,
    })

    const arrowVar = {
        default: {
            width: 0,
            height: 0,
        },
        active: {
            width: '100%',
            height: 3,
        },
    }

    useEffect(() => {
        const mouseMove = (e: any) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', mouseMove)
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [cursorVariante])

    return (
        <div className="w-full md:w-[calc(50%-18px)]">
            <div
                className={`flex justify-center items-center flex-col relative overflow-hidden`}
                onMouseEnter={() => {
                    setCursorVariante('active')
                    setArrowActive('active')
                }}
                onMouseLeave={() => {
                    setCursorVariante('default')
                    setArrowActive('default')
                }}
            >
                {/* <motion.div
                    variants={variants}
                    animate={cursorVariante}
                    className={`fixed flex justify-center items-center left-0 top-0 rounded-full bg-black pointer-events-none text-center`}
                >
                    <p className="text-white">View <br /> project</p>
                </motion.div> */}
                <div className="h-full w-full">
                    <Link to={`/project/${id}`}>
                        <Image
                            className="object-cover h-full w-full rounded-lg"
                            src={img}
                            width={606}
                            height={340}
                            loading={'lazy'}
                        />
                    </Link>
                </div>
                <div className="w-full flex flex-col text-center mt-9">
                    <Link to={`/project/${id}`}>
                        <h1 className=" text-2xl sm:text-3xl lg:text-[40px] text-black font-medium">
                            {name}
                        </h1>
                        <div className="h-3">
                            <motion.div
                                variants={arrowVar}
                                animate={arrowActive}
                                className="mt-2 bg-black"
                            />
                        </div>
                    </Link>
                    <p className="text-[#222222] font-semibold md:text-xl">
                        {t(formatProject)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
