'use client'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useState } from 'react'
import { SafeUser } from '@/app/types'


interface AddRestaurantProps {
    currentUser: SafeUser | null;
}

 const AddRestaurant:React.FC<AddRestaurantProps> = (
    currentUser,
 ) => {
    
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false); 
  
    const clickHandler = async() => {
        setIsLoading(true);
        console.log('clicked');

        const restaurant = await axios.post('/api/addBusiness', currentUser);
        console.log(restaurant.data.bId);
        router.push(`/business/addBusiness/${restaurant.data.bId}/about-your-business` )
        setIsLoading(false);
    }

    return (
        <div  
                onClick={clickHandler} 
                className="
                border-[1px]
                w-[200px]
                border-black
                rounded-xl
                py-2
                text-sm
                cursor-pointer
                hover:bg-neutral-50
                flex
                flex-row
                gap-2
                items-center
                justify-center
                ">
                  <AiOutlinePlus size = {20}/>
                Add your business 
            </div>
     
    )

}

export default AddRestaurant