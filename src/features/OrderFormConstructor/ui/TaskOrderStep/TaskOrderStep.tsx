import { ChangeEventHandler, useCallback, useContext } from 'react'
import { OrderFormConstructorContext } from '@/features/OrderFormConstructor/model/context/orderFormConstructorContext.ts'
import { useTranslation } from 'react-i18next'

export const TaskOrderStep = () => {
    const { task, handleState } = useContext(OrderFormConstructorContext)
    const {t} = useTranslation();

    const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
        (value) => {
            handleState?.({ task: value.target.value })
        },
        [handleState]
    )

    return (
        <>
            <h3 className={'w-full text-2xl mb-8 pt-5 sm:pt-0'}>
                {t("form.title3")}
            </h3>
            <textarea
                className="w-full h-[120px] p-3 md:p-5 border-[1px] border-[solid] border-[#CCD1D8] rounded-[5px] text-[16px] resize-none"
                name="message"
                placeholder={t("step3.text1")}
                value={task}
                spellCheck="false"
                onChange={onChange}
                required
            ></textarea>
        </>
    )
}
