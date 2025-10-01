"use client"

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IoLogoFacebook } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import ThemeToggle from '@/components/theme-toggle/ThemeToggle';
import AuthLinks from '@/components/auth-links/AuthLinks';

const socials = [{
    name: "facebook",
    icon: <IoLogoFacebook className='w-full h-full' fill='#0984e3'/>
},
{
    name: "ins",
    icon: <PiInstagramLogoFill className='w-full h-full' fill='#fd79a8' 
     />
},
{
    name: "youtube",
    icon: <IoLogoYoutube className='w-full h-full' fill='#d63031'
     />
},
{
    name: "tiktok",
    icon: <AiFillTikTok className='w-full h-full' fill='#2d3436'
     />
},
]

const links = [
    {
        name: "Homepage",
        path: "/"
    },
     {
        name: "Contact",
        path: "/"
    },
     {
        name: "About",
        path: "/"
    }
]

export default function Navbar() {
   const pathname = usePathname()
  return (
    <div className='flex justify-between items-center h-[100px] relative z-[99]'>
      <div className='logo hidden lg:flex gap-[10px] flex-1 '>
        {socials.map((social, index) => <div key={index} className='w-6 h-6'>{social.icon}</div>)}
      </div>
      <h1 className='flex-1 text-start lg:text-center md:text-2xl lg:text-[32px] xl:text-4xl font-bold'>
       My Blog App
      </h1>
      <div className='flex items-center max-sm:justify-end text-[18px] gap-[15px] xl:text-xl xl:gap-5 flex-1'>
        <ThemeToggle/>
        {links.map((item, index) => <Link key={index} href={item.path} className={` max-sm:hidden ${pathname.includes(item.path) ? "text-red-500" : ""} `}>{item.name}</Link>)}
        <AuthLinks links = {links}/>
      </div>
    </div>
  )
}
