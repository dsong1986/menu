'use client'

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import { useCallback } from "react";
import Button from "../navbar/Button";
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import Input from "../inputs/Input";
import { useState } from "react";
import {
    SubmitHandler,
    useForm,
    FieldValues,
} from 'react-hook-form'

// type FormData = {
//     name: string;
//     email: string;
//     password: string;
// }

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const authSignIn = (
        <div className="flex flex-col p-4 gap-2">
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='name'
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='password'
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Button
                onClick={() => { }}
                label="Continue"
                darkMode
            />
        </div>
    )
    const otherSignin =  (
        <div>
            <hr className="p-2" />
            <div className="flex flex-col gap-2">
                <Button
                    onClick={() => { }}
                    label="sign in with google"
                    icon={FcGoogle}
                />
                <Button
                    onClick={() => { }}
                    label="sign in with Github"
                    icon={AiFillGithub}
                />
            </div>
        </div>
    )

    const bodyContent = (
        <div className="flex flex-col py-4 mb-2">
            {authSignIn}
            {otherSignin}
        </div>
    );

    const handleClose = useCallback(() => {
        // clearErrors();
        setTimeout(() => {
            registerModal.onClose();
        }, 300)
    }, [registerModal.onClose]);

    return (
        <Modal
            isOpen={registerModal.isOpen}
            title="Sign up"
            onClose={handleClose}
            body={bodyContent}
        />
    )
}

export default RegisterModal;