import {FaShoppingCart} from 'react-icons/fa'
const ShoppingCart = () => {
    return (
        <div className="">
            <div className='
            rounded-full 
            bg-rose-500 
            w-16 h-full 
            flex flex-row 
            items-center justify-start 
            p-2
            cursor-pointer
            '>
                <FaShoppingCart color={'white'} size = {22} />
            </div>
        </div>
    )
}

export default ShoppingCart;