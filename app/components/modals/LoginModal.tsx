'use client'

import { useCallback, useState } from "react"
import Modal from "./Modal"
import useLoginModal from "@/app/hooks/useLoginModal"
import { useForm, FieldValues } from "react-hook-form"
import Button from "../navbar/Button"
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import Input from "../inputs/Input"
import { signIn, signOut, useSession } from "next-auth/react"
import { toast } from "react-hot-toast"
import { useRouter } from 'next/navigation';


const LoginModal = () => {

    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);
   
    const router = useRouter();

    const { data: session, status } = useSession()

    console.log(session);
    
    const userEmail = session?.user?.email
   if(session){
        console.log('I have some sessions');
        console.log(session);
        
   }



    

    //  Two inputs, email + password
    //  default value is set to be an empty string.
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });


    const onSubmit = handleSubmit(async(data) => {
        setIsLoading(true);
      
        // console.log(data);
     
        signIn('credentials', { 
            ...data, 
            redirect: false,
          })
          .then((callback) => {
            setIsLoading(false);
      
            if (callback?.ok) {
              toast.success('Logged in');
            //   router.refresh();
              loginModal.onClose();
            }
            
            if (callback?.error) {
              toast.error(callback.error);
            }
          });
        
    });

    const authLogin = (
        <form onSubmit={onSubmit}
            className="flex flex-col gap-4 p-3 mb-4">
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
                label="Continue"
                onClick={() => { }}
                darkMode
            />

        </form>
    )

    const otherLogins = (
        <div className="flex flex-col gap-2">
            <Button
                icon={FcGoogle}
                label="Login in with Google"
                onClick={() => { }}
            />
            <Button
                icon={AiFillGithub}
                label="Login in with Github"
                onClick={() => {
                    signIn('github')
                    // router.refresh();
                    // router.push('/hello')
                }}
            />
             <Button
                icon={AiFillGithub}
                label="sign out"
                onClick={() => {
                    signOut();
                 
                }}
            />
        </div>
    )

    const bodyContent = (
        <div className="py-3">
            {authLogin}
            <hr className="p-4" />
            {otherLogins}
        </div>

    )

    const handleClose = useCallback(() => {
        // clearErrors();
        setTimeout(() => {
            loginModal.onClose();
        }, 300)
    }, [loginModal.onClose]);

    return (

        <Modal
            isOpen={loginModal.isOpen}
            title="Log in"
            onClose={handleClose}
            body={bodyContent}
        />
    )
}

export default LoginModal