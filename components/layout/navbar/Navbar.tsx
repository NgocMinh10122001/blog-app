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
    icon: <IoLogoFacebook className='w-full h-full' fill='blue'/>
},
{
    name: "ins",
    icon: <PiInstagramLogoFill className='w-full h-full' fill='purple' 
     />
},
{
    name: "youtube",
    icon: <IoLogoYoutube className='w-full h-full' fill='red'
     />
},
{
    name: "tiktok",
    icon: <AiFillTikTok className='w-full h-full' fill='black'
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
    },
    {
        name: "Login",
        path: "/"
    }
]

export default function Navbar() {
   const pathname = usePathname()
  return (
    <div className='flex justify-between items-center h-[100px]'>
      <div className='logo flex gap-[10px] flex-1'>
        {socials.map((social, index) => <div key={index} className='w-6 h-6'>{social.icon}</div>)}
      </div>
      <h1 className='flex-1 text-center'>
        Vibe Zone
      </h1>
      <div className='flex items-center gap-5 flex-1'>
        <ThemeToggle/>
        {links.map((item, index) => <Link key={index} href={item.path} className={`${pathname.includes(item.path) ? "text-red-500" : ""}`}>{item.name}</Link>)}
        <AuthLinks/>
      </div>
    </div>
  )
}
