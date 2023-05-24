'use client'

import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Container from "@/app/components/Container";
import Card from "@/app/components/customer/Card";
import {AiOutlineIdcard} from 'react-icons/ai' 
import { IconType } from "react-icons";
import { MdNotificationsNone, MdOutlinePayment, MdOutlineCardGiftcard } from 'react-icons/md'
import Link from "next/link";
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function AccountPage() {

    const { data: session } = useSession();

    const loginModal = useLoginModal();
    const router = useRouter();

    useEffect(() => {
        if (session === null) {
            loginModal.onOpen();
            router.push('/');
        }
      }, [session])



    return (
        <Container>
            <div className="pt-10 pb-5 text-3xl font-bold px-5">Account</div>
            <div className="
                grid grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3
                px-5 
                justify-between 
                gap-5
                ">
           
                <Card 
                    icon = {AiOutlineIdcard}
                    label = "Personal info"
                    desc = "Provide personal details and how we can reach you"
                    onClick={()=>router.push('/customer/account/personal-info')}
                />
                <Card
                    onClick={()=>{}}
                    icon = {MdNotificationsNone}
                    label = "Notifications"
                    desc = "Choose notification preferences and how you want to be contacted"
                />
                <Card 
                    onClick={()=>{}}
                    label = "Payments"
                    desc = "Review payments"
                    icon = {MdOutlinePayment}
                />
                <Card 
                    onClick={()=>{}}
                    label = "Referral credit"
                    desc = "your referral credit and coupons. "
                    icon = {MdOutlineCardGiftcard}
                />
            </div>
        </Container>

    )
}