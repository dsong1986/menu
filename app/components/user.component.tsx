"use client";

import { useSession } from "next-auth/react";

export default function isLoggedIn(){
    const { data: session } = useSession();
    if(!session?.user) return false;
    return true;
}