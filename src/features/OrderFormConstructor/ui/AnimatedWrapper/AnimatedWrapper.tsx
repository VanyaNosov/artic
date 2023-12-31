import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedWrapperProps {
    children?: ReactNode
    direction: 'next' | 'prev'
}

export const AnimatedWrapper: FC<AnimatedWrapperProps> = ({
    children,
    direction,
}) => {
    const mobileWidth = window.innerWidth < 768
    return (
        <motion.div
            initial={{
                x: direction === 'next' ? (mobileWidth ? "0px" : '70px') : (mobileWidth ? "0px" : '-70px'),
            }}
            animate={{
                x: '0',
            }}
            exit={{
                x: direction === 'next' ? (mobileWidth ? "0px" : '-70px') : (mobileWidth ? "0px" : '70px'),
            }}
            
            
        >
            {children}
        </motion.div>
    )
}
