import { FC } from 'react'
import { classNames } from '../../../utils/classNames.ts'
import { RadioButtonItem, RadioButtonProps } from './RadioButton.tsx'
import { useTranslation } from 'react-i18next'
export interface RadioButtonIconItem extends RadioButtonItem {
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

interface RadioButtonIconProps extends RadioButtonProps {
    item: RadioButtonIconItem
}

export const RadioButtonIcon: FC<RadioButtonIconProps> = ({
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
        <div>
            <div className={'hidden sm:block mb-[10px] text-[14px] text-gray text-center'}>
                {t(item.value)}
            </div>
            <label
                htmlFor={`radio${groupNumber}-${index}`}
                className={classNames(
                    [
                        'flex items-center justify-center w-[40px] sm:w-[64px] h-[40px] sm:h-[64px] bg-[#fff] border-[1px] border-[solid] border-[#CCD1D8] rounded-[100%] cursor-pointer [transition:all_0.4s_ease] group',
                        className,
                    ],
                    {
                        'bg-[#F43563] border-[1px] border-[solid] border-[#F43563] [box-shadow:0px_10px_20px_rgba(244,_53,_99,_0.2)]':
                            isChecked,
                    }
                )}
            >
                <item.Icon className='sm:group-hover:scale-125 sm:duration-300'/>
            </label>
        </div>
    </>
}
