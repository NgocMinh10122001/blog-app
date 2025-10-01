"use client"
import { useTheme } from '@/context/ThemeContext';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface AuthLinksProps {
  name: string,
  path: string
}

export default function AuthLinks({links}:{links: AuthLinksProps[]}) {
     const [open, setOpen] = useState(false);
     const {theme} = useTheme()
     const { status } = useSession();


     useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
    {status === "unauthenticated" ? (
        <Link href="/login" className="max-sm:hidden">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="max-sm:hidden">
            Write
          </Link>
          <span className="cursor-pointer" 
          onClick={ () => signOut()}
          >
            Logout
          </span>
        </>
      )}
      <div className={`sm:hidden flex flex-col w-5 h-4 justify-between cursor-pointer relative`} onClick={() => setOpen(!open)}>
        <div className={`${theme === "light" ? "bg-black":"bg-white"} w-full h-[2px] absolute ${open ? "rotate-45 top-1/2 -translate-y-1/2":"top-0 rotate-0"} duration-150`}></div>
        <div className={`${theme === "light" ? "bg-black":"bg-white"} w-full h-[2px] absolute top-1/2 -translate-y-1/2 ${open ? "translate-x-1/2 opacity-0":"translate-x-0 opacity-100"} duration-150`}></div>
        <div className={`${theme === "light" ? "bg-black":"bg-white"} w-full h-[2px] absolute ${open ? "-rotate-45 top-1/2 -translate-y-1/2":"bottom-0 rotate-0"} duration-150`}></div>
      </div>
      {open && <div className={`flex sm:hidden absolute top-[100px] flex-col w-full h-[calc(100vh-100px)] items-center justify-center text-4xl gap-[50px] z-10 ${theme === "light" ? "bg-white":"bg-[#0f172a]"}`}>
        {links.map((item, index) => <Link key={index} href={item.path} className={` `}>{item.name}</Link>)}
        {status === "unauthenticated" ? (
        <Link href="/login" className="">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className="">
            Write
          </Link>
          <span className="" 
          onClick={() => signOut()}
          >
            Logout
          </span>
        </>
      )}
        </div>}
    </>
  )
}
