import { FC, InputHTMLAttributes } from 'react'
import { classNames } from '@/shared/utils/classNames.ts'
import { useTranslation } from 'react-i18next'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    className?: string
}

export const Input: FC<InputProps> = ({ className, label, ...props }) => {
    const {t} = useTranslation();

    return <div className={classNames(['flex flex-col', className])}>
        {label && (
            <label
                htmlFor="name"
                className="text-gray text-[12px] font-semibold tracking-[1px] uppercase mb-[10px]"
            >
                {t(label)}
            </label>
        )}
        <input
            type="text"
            className="sm:py-[8px] w-full px-[12px] pl-0 mb-[10px] text-black-second uppercase focus:border-black border-black/[.3] border-b font-medium outline-transparent"
            {...props}
        />
    </div>
}
