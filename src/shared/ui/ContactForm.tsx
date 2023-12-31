import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from "@emailjs/browser"

import * as z from "zod"
import { CgSpinner } from 'react-icons/cg'
import toast from 'react-hot-toast'

const ContactFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be more than 1 letter"
    }),
    company: z.string().min(2, {
        message: "Name must be more than 1 letter"
    }),
    email: z.string().email(),
    description: z.string().min(2, {
        message: "Descr must be more than 1 letter"
    }),
})

type FormValues = z.infer<typeof ContactFormSchema>


const ContactForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { t } = useTranslation()

    const { register, handleSubmit, reset,
        formState: { isSubmitting, isValid }
    } = useForm<FormValues>({
        resolver: zodResolver(ContactFormSchema), defaultValues: {
            name: "",
            description: "",
            email: "",
            company: ""
        }
    })

    const onSubmit: SubmitHandler<FormValues> = async (values) => {
        const template = import.meta.env.VITE_TEMPLATE1
        const serviceId = import.meta.env.VITE_SERVICE_ID
        const publicKey = import.meta.env.VITE_PUBLIC_KEY

        setIsLoading(true)

        emailjs.send(serviceId, template, {
            name: values.name,
            to_name: "Valentine",
            email: values.email,
            to_email: "v.khqritknove.000@gmail.com",
            description: values.description,
            company: values.company,
        }, publicKey).then(() => {
            toast.success(t("form.message"))
            reset();
        }, (error) => {
            console.log(error);
            toast.error("Something went wrong")
        }).finally(() => setIsLoading(false))
    }

    return (
        <form method="POST" className="sm:w-[70%] mx-auto"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4">
                <label
                    htmlFor="name"
                    className="text-gray text-[12px] font-semibold tracking-[1px] uppercase mb-[10px]"
                >
                    {t('contacts.name')}
                </label>
                <input
                    type="text"
                    id="name"
                    className="md:h-[45] h-[40] py-[8px] w-full px-[12px] pl-0 mb-[10px] text-black-second uppercase focus:border-black border-black/[.3] border-b font-medium outline-transparent"
                    required
                    maxLength={256}
                    {...register("name")}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label
                    htmlFor="email"
                    className="text-gray text-[12px] font-semibold tracking-[1px] uppercase mb-[10px]"
                >
                    {t('contacts.email')}
                </label>
                <input
                    type="email"
                    id="email"
                    className="md:h-[45] h-[40] py-[8px] w-full px-[12px] pl-0 mb-[10px] text-black-second uppercase focus:border-black border-black/[.3] border-b font-medium outline-transparent"
                    required
                    {...register("email")}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label
                    htmlFor="company"
                    className="text-gray text-[12px] font-semibold tracking-[1px] uppercase mb-[10px]"
                >
                    {t('contacts.company')}
                </label>
                <input
                    type="text"
                    id="company"
                    className="md:h-[45] h-[40] py-[8px] w-full px-[12px] pl-0 mb-[10px] text-black-second uppercase focus:border-black border-black/[.3] border-b font-medium outline-transparent"
                    required
                    {...register("company")}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label
                    htmlFor="description"
                    className="text-gray text-[12px] font-semibold tracking-[1px] uppercase mb-[10px]"
                >
                    {t('contacts.descr')}
                </label>
                <textarea
                    id="description"
                    className="w-full md:h-[45] h-[40] pt-[8px] pb-[78px] px-[12px] pl-0 mb-[10px] text-black-second uppercase focus:border-black border-black/[.3] border-b font-medium outline-transparent"
                    required
                    maxLength={5000}
                    {...register("description")}
                ></textarea>
            </div>
            <button
                disabled={isLoading || !isValid || isSubmitting}
                type="submit"
                className="w-full py-[20px] px-[40px] text-[17px] font-semibold leading-none rounded-[100px] bg-black border-2 border-black hover:bg-transparent text-white duration-300 hover:text-black disabled:bg-transparent disabled:text-black disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <CgSpinner size={26} className='animate-spin mx-auto' />
                ) : t('contacts.buttonText')}
            </button>
        </form>
    )
}

export default ContactForm