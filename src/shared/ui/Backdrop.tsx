import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'
import { classNames } from '../utils/classNames.ts'

interface BackdropProps {
    className?: string
    onClick?: () => void
    children?: ReactNode
}

export const Backdrop: FC<BackdropProps> = ({
    className,
    children,
    onClick,
}) => (
    <motion.div
        className={classNames(['fixed z-[2] inset-0 bg-black/75', className])}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
    >
        {children}
    </motion.div>
)
