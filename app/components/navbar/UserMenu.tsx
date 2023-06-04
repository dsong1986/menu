'use client'
import { FcMenu } from 'react-icons/fc'
import { FaUserAlt } from 'react-icons/fa'
import { useCallback, useState } from 'react'
import MenuItem from './MenuItem'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import LoginModal from '../modals/LoginModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { SafeUser } from '@/app/types'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from "react";


interface UserMenuProp {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProp> = ({
    currentUser,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const router = useRouter();
    const ref = useRef(null);


    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (isOpen && ref.current && !ref.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref, isOpen]);

    const toggleOpen = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

  
   

    return (
        <div ref={ref}
            className='relative'>
            <div
                onClick={toggleOpen}

                className='rounded-full  
            border-[1px] h-12 
            flex flex-row 
            items-center
            px-4
            py-2
            hover:shadow-xl
            cursor-pointer
            border-cyan-900 
            gap-2
            '>
                <FcMenu size={26} />
                <div className='
                    hidden 
                    md:flex
                    rounded-full
                    bg-cyan-900 
                    w-[35px]
                    h-[35px]
                    items-center
                    justify-center
                    '>
                    <FaUserAlt size={20} color="white" />
                </div>

            </div>
            {isOpen && (
                <div className='
                    absolute
                    right-0
                    w-[240px]
                    bg-white
                    rounded-xl
                    border-[1px]
                    top-14
                    shadow-xl
                    py-2
                    flex
                    flex-col
                    gap-2
                    '>
                    {currentUser && <MenuItem onClick={() => { setIsOpen(false);router.push('/customer/account') }} label="Account" />}
                    {!currentUser && <MenuItem onClick={() => { loginModal.onOpen(); setIsOpen(false) }} label="Log in" fontWeight />}
                    {!currentUser && <MenuItem onClick={() => { registerModal.onOpen(); setIsOpen(false) }} label="Sign up" />}
                    {currentUser && <MenuItem onClick={() => { signOut(); setIsOpen(false) }} label="Sign out" />}
                    <hr />
                    <MenuItem onClick={() => { }} label="Contact us" />
                    <MenuItem onClick={() => { }} label="Help" />
                    <hr />
                    <MenuItem onClick={() => { setIsOpen(false);router.push('/business/restaurants')}} label="Be a partner restaurant" />
                    <MenuItem onClick={() => { }} label="Careers" />
                </div>
            )}
        </div>
    )
}

export default UserMenu;