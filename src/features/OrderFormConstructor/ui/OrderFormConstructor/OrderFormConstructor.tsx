import { FC, FormEvent, useCallback, useMemo, useState } from 'react'
import { ServiceOrderStep } from '../ServiceOrderStep/ServiceOrderStep.tsx'
import { BudgetOrderStep } from '../BudgetOrderStep/BudgetOrderStep.tsx'
import { TaskOrderStep } from '../TaskOrderStep/TaskOrderStep.tsx'
import { SourceInfoOrderStep } from '../SourceInfoOrderStep/SourceInfoOrderStep.tsx'
import {
    ContactInfo,
    ContactInfoOrderStep,
} from '../ContactInfoOrderStep/ContactInfoOrderStep.tsx'
import { classNames } from '@/shared/utils/classNames.ts'
import { Button } from '@/shared/ui/Button.tsx'
import { useMultiStep } from '../../lib/hooks/useMultiStep.tsx'
import { OrderFormConstructorContext } from '../../model/context/orderFormConstructorContext.ts'
import { useTranslation } from 'react-i18next'
import emailjs from "@emailjs/browser"
import toast from 'react-hot-toast'
import { CgSpinner } from 'react-icons/cg'

interface OrderFormConstructorProps {
    className?: string,
    onClose: () => void
}

export interface OrderFormConstructorState {
    service?: string
    budget?: string
    task?: string
    infoSource?: string
    contactInfo?: ContactInfo
}

const steps = [
    <ServiceOrderStep />,
    <BudgetOrderStep />,
    <TaskOrderStep />,
    <SourceInfoOrderStep />,
    <ContactInfoOrderStep />,
]

export const OrderFormConstructor: FC<OrderFormConstructorProps> = ({
    className, onClose
}) => {
    const { step, next, prev, isLastStep, isFirstStep } = useMultiStep(steps)
    const [formState, setFormState] = useState<OrderFormConstructorState>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { t } = useTranslation();

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault()

        if (!isLastStep) {
            next()
        } else {
            setIsLoading(true)
            const template = import.meta.env.VITE_TEMPLATE2
            const serviceId = import.meta.env.VITE_SERVICE_ID
            const publicKey = import.meta.env.VITE_PUBLIC_KEY

            const service = t(`${formState.service}`)
            const budget = t(`${formState.budget}`)
            const info = t(`${formState.infoSource}`)
            

            emailjs.send(serviceId, template, {
                from_name: formState.contactInfo?.firstname,
                to_name: "Valentine",
                from_email: formState.contactInfo?.email,
                to_email: "v.khqritknove.000@gmail.com",
                phone: formState.contactInfo?.phone,
                preferredContact: formState.contactInfo?.preferredContact,
                service,
                budget,
                task : formState.task,
                info,

            }, publicKey).then(() => {
                toast.success(t("form.message"))
                onClose();
            }, (error) => {
                console.log(error);
                toast.error("Something went wrong")
            }).finally(
                () => setIsLoading(false)
                )
        }
    }

    const handleState = useCallback((state: OrderFormConstructorState) => {
        setFormState((prevState) => {
            if ('contactInfo' in state) {
                return {
                    ...prevState,
                    contactInfo: {
                        ...prevState.contactInfo,
                        ...state.contactInfo,
                    },
                }
            }

            return { ...prevState, ...state }
        })
    }, [])

    const context = useMemo(
        () => ({ ...formState, handleState }),
        [formState, handleState]
    )

    return (
        <OrderFormConstructorContext.Provider value={context}>
            <form
                className={classNames([className])}
                onSubmit={onSubmitHandler}
            >
                {step}
                <div className="flex justify-end sm:justify-start gap-5 mt-7">
                    {(!isFirstStep && !isLoading) && (
                        <Button type={'button'} onClick={prev}>
                            {t("form.prev")}
                        </Button>
                    )}
                    {isLoading ? <CgSpinner size={30} className='animate-spin mx-10 my-4' /> : <Button type={'submit'}>
                        {isLastStep ? t("form.send") : t("form.next")}
                    </Button>}
                </div>
            </form>
        </OrderFormConstructorContext.Provider>
    )
}
