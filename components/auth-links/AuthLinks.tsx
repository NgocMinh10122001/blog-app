"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function AuthLinks() {
     const [open, setOpen] = useState(false);

  const status  = "unauthenticated";
  return (
    <>
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
        //   onClick={signOut}
          >
            Logout
          </span>
        </>
      )}
    </>
  )
}
