'use client'

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import { useCallback } from "react";
import Button from "../navbar/Button";
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import Input from "../inputs/Input";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

import {
    SubmitHandler,
    useForm,
    FieldValues,
} from 'react-hook-form'



const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const { register, setValue, handleSubmit,  clearErrors,
        formState: { errors } } = useForm<FieldValues>({
            defaultValues: {
                name: '',
                email: '',
                password: ''
            }
        });

    
    const onSubmit =  handleSubmit( async(data) => {
       setIsLoading(true);
       console.log(data);
       
       const res = axios.post('/api/register', data);
       const error = (await res).data.error;

       if(!error){
           toast.success('Registered!');
           registerModal.onClose();
           //   loginModal.onOpen();
       }else {
           if(error.code === 'P2002'){
               toast.error('email already registered!');
           }else {
               toast.error('Something went wrong!');
           }
       }
      console.log('loading will end');
      
       setIsLoading(false);
    });


    const authSignIn = (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 p-3 mb-4">
            <Input
                id='name'
                label='Full Name*'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='email'
                label='Email*'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='password'
                label='Password*'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Button
                onClick={() => {
                }}
                label="Continue"
                darkMode
            />
        </form>
    )
    const otherSignin = (
        <div>
            <hr className=" p-4 " />
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
        clearErrors();
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