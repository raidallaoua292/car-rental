"use clinet";

import Image from "next/image";
import { CustomButtonProps } from "@/types";


const CustomButton = ({title, containerStyles, handleClick, btnType, rightIcon, textStyles, isDisabled}:CustomButtonProps) => {
  return (
    <button 
      disabled={false}
      type={btnType ? btnType : "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image 
            src={rightIcon}
            fill
            alt="right icon"
            className="object-contain"
          />
        </div>
      )
      }
    </button>
  )
}

export default CustomButton