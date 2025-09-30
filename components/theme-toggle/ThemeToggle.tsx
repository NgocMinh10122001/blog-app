import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
const { theme ,toggleTheme } = useTheme()
  
  return (
    <div className={`w-10 h-5 rounded-[50px] flex justify-between items-center  border-[1px] border-black relative  cursor-pointer ${theme === "light" ? "bg-black" : "bg-white"}`} onClick={toggleTheme}>
      <IoIosMoon size={14} fill='black' className={`ms-[1px] `}/>
      <div className={`w-[15px] h-[15px] rounded-full  absolute  ${theme === "light" ? "left-[1px] bg-white ":"right-[1px]  bg-black"} duration-150`} ></div>
      <IoSunny size={14} fill='yellow' className={`me-[1px] `}/>
    </div>
  )
}
