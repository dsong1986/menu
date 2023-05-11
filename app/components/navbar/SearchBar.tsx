import { useSearchParams } from 'next/navigation';
import { BiSearch } from 'react-icons/bi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useCallback, useState } from 'react';
import { IconType } from 'react-icons';
import { useRef } from 'react';
const SearchBar = () => {

    const inputRef = useRef<HTMLLinkElement>(null);
    const [icon, setIcon] = useState('search')

    const focus = () => {
        if (inputRef.current != null) {
            inputRef.current.focus();
        }
        setIcon('arrow');
    };

    const blur = () => {
        if (inputRef.current != null) {
            inputRef.current.blur();
        }
        setIcon('search')
    }

    return (
        <div className="
        rounded-full border-[1px]  
        w-1/2  md:w-1/3 
        h-12
        flex flex-row 
        bg-neutral-100
        items-center
        px-2
        hover:shadow-lg
        ">
            {
                icon === "arrow" ? <AiOutlineArrowLeft size={24} className=' w-1/6' /> : <BiSearch size={24} className=' w-1/6' />
            }
            <form className="w-full h-full flex items-center">
                <input
                    ref={inputRef}
                    onClick={focus}
                    onBlur={blur}


                    className={`
                bg-transparent
                focus: outline-none
                form-control mr-sm-2
                w-full
                h-full
                `}
                    type="search"
                    placeholder={'Search restraunts, dishes'}
                    aria-label="Search"

                />
            </form>
        </div>


    )
}

export default SearchBar;