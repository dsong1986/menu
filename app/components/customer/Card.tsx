
'use client'
import { IconType } from "react-icons"
import React from "react";
import { quicksand } from "@/app/styles/fonts";

import { AiOutlineIdcard } from 'react-icons/ai'

interface CardProps {
    desc?: string;
    icon?: IconType;
    label?: string;
    onClick: () => void;
}
const Card: React.FC<CardProps> = ({
    icon: Icon,
    label,
    desc,
    onClick,

}) => {
    return (
        <div
            onClick={onClick}
            className="
            w-[330px] h-[150px] 
            p-4 
            shadow-[0_3px_6px_rgb(0,0,0,0.2)] 
            rounded-xl 
            cursor-pointer
            ">
            <div className="flex flex-col">
                {Icon && (<Icon size={36} />)}

                <div className="pt-4 font-semibold">
                    {label}
                </div>

                {desc && (<div className="text-neutral-500 text-sm pt-2 " >
                    <div className={quicksand.className}>{desc}</div>
                </div>)}

            </div>
        </div>

    )
}

export default Card;



