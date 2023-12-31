import { ChangeEventHandler, useCallback, useContext } from 'react'
import { RadioButtonIconItem } from '@/shared/ui/RadioButton'
import Phone from '@/shared/assets/contact/phone.svg?react'
import WhatsApp from '@/shared/assets/contact/whatsapp.svg?react'
import Telegram from '@/shared/assets/contact/telegram.svg?react'
import Viber from '@/shared/assets/contact/viber.svg?react'
import Email from '@/shared/assets/contact/email.svg?react'
import { OrderFormConstructorContext } from '../../model/context/orderFormConstructorContext.ts'
import { RadioButtons } from '@/shared/ui/RadioButtons.tsx'
import { Input } from '@/shared/ui/Input.tsx'
import { useTranslation } from 'react-i18next'

export interface ContactInfo {
    preferredContact?: string
    firstname?: string
    email?: string
    phone?: string
}

const prefferedContactList: RadioButtonIconItem[] = [
    {
        value: 'step5.text1',
        Icon: Phone,
    },
    {
        value: 'WhatsApp',
        Icon: WhatsApp,
    },
    {
        value: 'Telegram',
        Icon: Telegram,
    },
    {
        value: 'Viber',
        Icon: Viber,
    },
    {
        value: 'E-mail',
        Icon: Email,
    },
]

export const ContactInfoOrderStep = () => {
    const { contactInfo, handleState } = useContext(OrderFormConstructorContext)
    const {t} = useTranslation();

    const onChange = useCallback(
        (value: string) => {
            handleState?.({
                contactInfo: {
                    preferredContact: value,
                },
            })
        },
        [handleState]
    )

    const onChangeInput: ChangeEventHandler<HTMLInputElement> = useCallback(
        (event) => {
            const name = event.target.name
            handleState?.({
                contactInfo: {
                    [name]: event.target.value,
                },
            })
        },
        [handleState]
    )

    return (
        <div>
            <RadioButtons
                title={'form.title5'}
                buttons={prefferedContactList}
                onChange={onChange}
                defaultValue={contactInfo?.preferredContact}
                className={'md:gap-[40px] gap-[10px] md:mb-[50px] sm:mb-10 mb-5 '}
            />
            <div className={'grid md:grid-cols-2 gap-5'}>
                <Input
                    label={"step5.text2"}
                    type={'text'}
                    name={'firstname'}
                    className={'md:col-span-1'}
                    required
                    value={contactInfo?.firstname}
                    onChange={onChangeInput}
                />
                <Input
                    label={'step5.text3'}
                    name={'email'}
                    type={'email'}
                    className={'md:col-span-1'}
                    required
                    value={contactInfo?.email}
                    onChange={onChangeInput}
                />
                <Input
                    label={'step5.text4'}
                    name={'phone'}
                    type={'tel'}
                    className={'md:col-span-2 '}
                    required
                    value={contactInfo?.phone}
                    onChange={onChangeInput}
                />
            </div>
            <p
                className={
                    'text-[11px] leading-[120%] text-[#8B93A1] text-center'
                }
            >
                {t("step5.text5")}
            </p>
        </div>
    )
}
