import React from 'react'

import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

export default function ThemeToggle() {
  return (
    <div className='w-10 h-5 rounded-[50px] flex justify-between items-center bg-black relative cursor-pointer'>
      <IoSunny size={14} fill='yellow'/>
      <div className='w-[15px] h-[15px] rounded-full bg-white absolute left-[1px]'></div>
      <IoIosMoon size={14} fill='yellow'/>
    </div>
  )
}
