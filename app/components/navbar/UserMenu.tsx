'use client'
import { FcMenu } from 'react-icons/fc'
import { FaUserAlt } from 'react-icons/fa'

const UserMenu = () => {

    return (

        <div className='rounded-full  
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

    )
}

export default UserMenu;