'use client'
import Image from "next/image";
import { quicksand } from "@/app/styles/fonts";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push('/')} 
            className="
            flex flex-row 
            gap-2 rounded-xl 
            bg-slate-50 p-2 
            border-[1px] 
            cursor-pointer
            ">
        <Image
            src='/images/menu.png'
            width={50}
            height={50}
            alt="company logo"
        />
        <div className="
        hidden 
        md:flex  
        text-3xl font-bold text-teal-600  
        items-end
        ">
            <div className={quicksand.className}>Umenu</div> 
        </div>
        </div>
    );

}

export default Logo;