'use client'
import { poppins400 } from "@/app/styles/fonts";
import { useState, useCallback } from "react";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/navbar/Button";
import {
    SubmitHandler,
    useForm,
    FieldValues,
} from 'react-hook-form'

import axios from "axios";
import { log } from "console";
import { SafeUser } from "@/app/types";
import { toast } from "react-hot-toast"
interface InfoCardProps {
    id: string;
    label: string;
    content?: string;
    desc?: string;
    onClick?: () => void;
    userEmail?: string;

}



const InfoCard: React.FC<InfoCardProps> = ({
    label,
    id,
    content,
    desc,
    onClick,
    userEmail,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const { register, setValue, handleSubmit, clearErrors,
        formState: { errors } } = useForm<FieldValues>({
            defaultValues: {

            }
        });

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);

        data = { ...data, userEmail };
        const res = axios.put('/api/updateInfo', data);
        const error = (await res).data.error;

        if (!error) {
            toast.success('Information Updated!');
            toggleOpen();
        } else {
            toast.error('Something went wrong!');
        }

        setIsLoading(false);
    });

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    if (isOpen) {
        return (
            <>
                <div className="flex flex-row relative gap-20">
                    <div className="flex flex-col ">
                        <div className="font-light">{label}</div>
                        {desc && (<div className="text-gray-500 font-light text-sm ">{desc}</div>)}
                    </div>
                    <div>
                        <div
                            onClick={toggleOpen}
                            className="
                    absolute right-0 
                    underline
                    cursor-pointer

                ">Cancel</div>
                    </div>

                </div>
                <div>
                    <form onSubmit={onSubmit}
                        className="flex flex-col gap-4">
                        <Input
                            id={id}
                            label={label}
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                            placeHolder={content}
                        />

                        <Button
                            label="Save"
                            onClick={() => { }}
                            darkMode
                            small
                        />

                    </form>
                </div>
            </>
        )
    }
    return (
        <div className="flex flex-row relative pb-4">
            <div className={poppins400.className}>
                <div>{label}</div>
                <div className="text-gray-400">{content}</div>
            </div>
            <div className="absolute right-0">

                <div
                    onClick={toggleOpen}
                    className="underline cursor-pointer">Edit</div>
            </div>
        </div>
    )
}

export default InfoCard;