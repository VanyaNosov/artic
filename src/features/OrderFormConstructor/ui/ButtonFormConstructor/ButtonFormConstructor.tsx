import { Button } from '@/shared/ui/Button.tsx'
import { Modal } from '@/shared/ui/Modal.tsx'
import { OrderFormConstructor } from '../OrderFormConstructor/OrderFormConstructor.tsx'
import { useCallback, useEffect, useState } from 'react'
import { classNames } from '@/shared/utils/classNames.ts'
import { useTranslation } from 'react-i18next'

export const OrderFormConstructorButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const visible = {
        'opacity-0': !isVisible,
        'pointer-events-none': !isVisible,
    }

    const {t} = useTranslation();

    const onOpen = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <Button
                onClick={onOpen}
                className={classNames(
                    [
                        'fixed right-5 bottom-10 gradient-pulse transition-opacity z-[50] hover:text-white border-none',
                        isOpen ? "hidden" : "block"
                    ],
                    visible
                )}
            >
               {t("form.buttonText")} 
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <OrderFormConstructor onClose={onClose}/>
            </Modal>
        </>
    )
}
