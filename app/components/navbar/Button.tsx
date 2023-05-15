'use client'
import { IconType } from "react-icons"
import React from "react";
import { raleway500 } from "@/app/styles/fonts";


interface ButtonProps {
    icon?: IconType;
    label?: string;
    onClick: () => void;
    darkMode?: boolean
}

const Button: React.FC<ButtonProps> = ({
    icon: Icon,
    label,
    onClick,
    darkMode,
}) => {
    return (
        <button
            onClick={onClick}
            className={`
            flex justify-start
            p-3 rounded-xl
            mx-4
            border-[1px]
            border-black
            disabled:cursor-not-allowed
     
            ${darkMode ? "bg-cyan-800" : "bg-white"}     
            ${darkMode ? "hover:bg-cyan-700" : "hover:bg-slate-50"}          
        `}>
            <div className="
            w-full 
            flex
            flex-row
            items-center
            justify-center
            relative
            ">
                <div className=" absolute
                        left-0
                        ">{Icon && (
                        <Icon
                            size={24}
                        />
                    )}</div>
                <div className={`${darkMode ? "text-white" : "text-black"}`}>
                    <div className={raleway500.className}>{label}</div>
                </div>
            </div>
        </button>

    )
}

export default Button;