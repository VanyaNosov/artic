import { FC, useCallback, useEffect, useState } from 'react'
import { classNames } from '../utils/classNames.ts'
import {
    RadioButton,
    RadioButtonIcon,
    RadioButtonItem,
    RadioButtonIconItem,
} from './RadioButton'
import { useTranslation } from 'react-i18next'

interface RadioButtonProps {
    className?: string
    onChange: (label: string) => void
    buttons?: (RadioButtonItem | RadioButtonIconItem)[]
    title?: string
    defaultValue?: string
}

export const RadioButtons: FC<RadioButtonProps> = ({
    className,
    onChange,
    buttons,
    title,
    defaultValue = '',
}) => {
    const [groupNumber, setGroupNumber] = useState<number>(1)
    const [checkedValue, setCheckedValue] = useState(defaultValue)
    const {t} = useTranslation();

    useEffect(() => {
        const radioButtons = document.querySelectorAll('.radio-buttons')
        setGroupNumber(radioButtons.length)
    }, [])

    const onChangeHandler = useCallback(
        (value: string) => {
            setCheckedValue(value)
            onChange(value)
        },
        [onChange]
    )

    return (
        <>
            {title && <h3 className={'w-full font-medium text-2xl mb-4 sm:mb-8 pt-5 sm:pt-0'}>{t(title)}</h3>}
            <div
                className={classNames([
                    'relative flex flex-wrap gap-3 sm:gap-[20px] w-[fit-content] radio-buttons',
                    className,
                ])}
            >
                {buttons?.map((item, index) => {
                    if ('Icon' in item) {
                        return (
                            <RadioButtonIcon
                                className={'flex-initial'}
                                groupNumber={groupNumber}
                                item={item}
                                isChecked={item.value === checkedValue}
                                onChange={onChangeHandler}
                                index={index}
                                key={index}
                            />
                        )
                    }

                    return (
                        <RadioButton
                            className={'flex-initial'}
                            groupNumber={groupNumber}
                            item={item}
                            isChecked={item.value === checkedValue}
                            onChange={onChangeHandler}
                            index={index}
                            key={index}
                        />
                    )
                })}
            </div>
        </>
    )
}
