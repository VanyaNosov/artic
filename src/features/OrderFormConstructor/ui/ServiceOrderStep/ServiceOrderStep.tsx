import { FC, ReactNode, useCallback, useContext } from 'react'
import { RadioButtons } from '@/shared/ui/RadioButtons'
import { RadioButtonItem } from '@/shared/ui/RadioButton'
import { OrderFormConstructorContext } from '../../model/context/orderFormConstructorContext'

interface ServiceOrderStepProps {
    className?: string
    onClick?: () => void
    children?: ReactNode
}

const servicesList: RadioButtonItem[] = [
    {
        value: 'step1.text1',
    },
    {
        value: 'step1.text2',
    },
    {
        value: 'step1.text3',
    },
    {
        value: 'step1.text4',
    },
    {
        value: 'step1.text5',
    },
    {
        value: 'Front-end',
    },
    {
        value: 'Back-end',
    },
]

export const ServiceOrderStep: FC<ServiceOrderStepProps> = () => {
    const { service, handleState } = useContext(OrderFormConstructorContext)

    const onChange = useCallback(
        (value: string) => {
            handleState?.({ service: value })
        },
        [handleState]
    )

    return (
        <RadioButtons
            title={'form.title1'}
            buttons={servicesList}
            onChange={onChange}
            defaultValue={service}
        />
    )
}
