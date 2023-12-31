import { FC } from 'react'
import { classNames } from '../../../utils/classNames.ts'
import { useTranslation } from 'react-i18next'

export interface RadioButtonItem {
    value: string
}
export interface RadioButtonProps {
    className: string
    groupNumber: number
    index: number
    item: RadioButtonItem
    isChecked?: boolean
    onChange: (value: string) => void
}

export const RadioButton: FC<RadioButtonProps> = ({
    className,
    groupNumber,
    index,
    item,
    isChecked,
    onChange,
}) => {
    const {t} = useTranslation();

    return <>
        <input
            type="radio"
            name={`radio-block${groupNumber}`}
            id={`radio${groupNumber}-${index}`}
            required={true}
            className="w-px h-px overflow-hidden opacity-0 absolute left-2/4 bottom-[0] -translate-x-1/2"
            value={item.value}
            key={`radio${groupNumber}-${index}`}
            checked={isChecked}
            onChange={(e) => onChange(e.target.value)}
        />
        <label
            htmlFor={`radio${groupNumber}-${index}`}
            className={classNames(
                [
                    'w-full sm:w-fit flex items-center justify-center h-[50px] pl-[30px] pr-[30px] bg-[#F8F8F8] rounded-[5px] text-[18px] leading-[100%] text-center cursor-pointer [transition:all_0.4s_ease] hover:text-white hover:bg-black',
                    className,
                ],
                { 'bg-black text-white': isChecked }
            )}
        >
            <span>{t(item.value)}</span>
        </label>
    </>
}
