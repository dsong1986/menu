'use client'
import { IconType } from "react-icons"
import React from "react";
import { raleway500 } from "@/app/styles/fonts";


interface ButtonProps {
    icon?: IconType;
    label?: string;
    onClick: () => void;
    darkMode?: boolean;
    small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    icon: Icon,
    label,
    onClick,
    small,
    darkMode,
}) => {
    return (
        <button
            onClick={onClick}
            className={`
            flex justify-start
            p-3 rounded-xl
            
            border-[1px]
            border-black
            disabled:cursor-not-allowed
     
            ${darkMode ? "bg-cyan-800" : "bg-white"}     
            ${darkMode ? "hover:bg-cyan-700" : "hover:bg-slate-50"} 
            ${small ? "w-[100px]" : "w-full"}         
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