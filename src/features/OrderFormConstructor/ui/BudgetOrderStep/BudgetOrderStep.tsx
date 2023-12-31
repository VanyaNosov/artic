import { useCallback, useContext } from 'react'

import { RadioButtons } from '@/shared/ui/RadioButtons.tsx'
import { OrderFormConstructorContext } from '../../model/context/orderFormConstructorContext.ts'
import { RadioButtonItem } from '@/shared/ui/RadioButton'

const budgetList: RadioButtonItem[] = [
    {
        value: 'step2.text1',
    },
    {
        value: 'step2.text2',
    },
    {
        value: 'step2.text3',
    },
    {
        value: 'step2.text4',
    },
]

export const BudgetOrderStep = () => {
    const { budget, handleState } = useContext(OrderFormConstructorContext)
    const onChange = useCallback(
        (value: string) => {
            handleState?.({ budget: value })
        },
        [handleState]
    )

    return (
        <RadioButtons
            title={'form.title2'}
            buttons={budgetList}
            onChange={onChange}
            defaultValue={budget}
        />
    )
}
