'use client'

import { useCallback, useState } from "react";
import { IoMdClose } from 'react-icons/io'
import Button from "../navbar/Button";
import {FcGoogle} from 'react-icons/fc'
import { IconType } from "react-icons";



interface ModalProps {
  isOpen?: boolean;
  title?: string;
  onClose: () => void;
  body?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  body,
}) => {
  if (!isOpen) {
    return null;
  }



  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, []);

  return (

    // turn the while page as a background, darker the background
    <div className="
    justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-auto 
    fixed 
    inset-0 
    z-50 
    bg-neutral-800/70
        "
    >
      {/*  Start the modal main layout */}
      <div className="
      relative 
      w-full
      md:w-4/6
      lg:w-3/6
      xl:w-2/5
      my-6
      mx-auto 
      h-full 
      lg:h-auto
      md:h-auto
      "
      >

        {/* content */}
        <div className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
          <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
          >
            {/* header */}
            <div className="
                flex 
                flex-row
                items-center 
                p-4
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
            >
              <div className="
              font-semibold 
              text-xl 
              text-cyan-800
              ">
                {title}
              </div>

              <div
                onClick={handleClose}
                className="
            absolute 
            right-2  
            bg-cyan-700
            rounded-full
            p-1
            cursor-pointer
            hover:bg-cyan-800
            ">
                <IoMdClose size={26} color="white" />
              </div>
            </div>

            {body}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;