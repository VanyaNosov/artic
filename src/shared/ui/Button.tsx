import {ButtonHTMLAttributes, FC} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const Button: FC<ButtonProps> = ({ className, ...props}) => (
    (
        <button
            {...props}
            className={`py-3 px-6 sm:py-[20px] sm:px-[40px] text-[17px] font-semibold leading-none rounded-[100px] bg-black text-white border-2 hover:bg-transparent hover:text-black duration-300 ${className}`}
        />
    )
)

