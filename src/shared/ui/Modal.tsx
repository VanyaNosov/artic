import { AnimatePresence, motion } from 'framer-motion'
import { FC, ReactNode, useEffect } from 'react'
import { classNames } from '../utils/classNames.ts'
import { Backdrop } from './Backdrop.tsx'
import { RxCross2 } from 'react-icons/rx'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose: () => void
}

const modalVariants = {
    hidden: {
        y: '-50px',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.3,
            type: 'backInOut',
        },
    },
    exit: {
        y: '50px',
        opacity: 0,
    },
}

export const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpen,
    onClose,
}) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <Backdrop
                    className={'grid place-items-center p-[20px]'}
                    onClick={onClose}
                >
                    <motion.div
                        className={classNames([
                            'relative z-[100] max-w-[1150px]  w-full bg-white p-5 sm:p-[60px] rounded-tl-[50px] rounded-br-[50px] max-h-[90dvh] overflow-y-auto',
                            className,
                        ])}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                        className='absolute top-3 right-3 w-7 h-7 flex items-center justify-center'
                        onClick={() => onClose()}
                        >
                            <RxCross2 size={30}/>
                        </button>
                        {children}
                    </motion.div>
                </Backdrop>
            )}
        </AnimatePresence>
    )
}
