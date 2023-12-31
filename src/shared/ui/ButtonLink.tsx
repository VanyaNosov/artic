import {AnchorHTMLAttributes, FC} from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string
}

export const ButtonLink: FC<ButtonLinkProps> = ({ className, ...props}) => (
    (
        <a
            {...props}
            className={`py-[20px] px-[40px] text-[17px] font-semibold leading-none rounded-[100px] bg-black text-white ${className}`}
        />
    )
)

