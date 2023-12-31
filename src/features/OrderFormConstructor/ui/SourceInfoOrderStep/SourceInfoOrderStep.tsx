import { useCallback, useContext } from 'react'
import { OrderFormConstructorContext } from '@/features/OrderFormConstructor/model/context/orderFormConstructorContext.ts'
import { RadioButtons } from '@/shared/ui/RadioButtons.tsx'

const sourceInfoList = [
    {
        value: 'step4.text1',
    },
    {
        value: 'step4.text2',
    },
    {
        value: 'step4.text3',
    },
    {
        value: 'step4.text4',
    },
    {
        value: 'step4.text5',
    },
]

export const SourceInfoOrderStep = () => {
    const { infoSource, handleState } = useContext(OrderFormConstructorContext)

    const onChange = useCallback(
        (value: string) => {
            handleState?.({ infoSource: value })
        },
        [handleState]
    )

    return (
        <RadioButtons
            title={'form.title4'}
            buttons={sourceInfoList}
            onChange={onChange}
            defaultValue={infoSource}
        />
    )
}
