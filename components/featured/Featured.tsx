import Image from 'next/image'
import React from 'react'

export default function Featured() {
  return (
    <div className='mt-[30px] '>
      <h1 className='text-[96px] font-light '>
        <b className='font-bold'>Hey, Iam dev here!</b> Discover my stories creative ideas.
      </h1>
      <div className='flex justify-between gap-[50px] mt-[60px]'>
        <div className='flex-1 relative h-[500px] rounded-md overflow-hidden'>
          <Image src ="/imgs/ph.jpg" alt='' fill className='object-cover'/>
        </div>
        <div className='flex-1 !space-y-5 flex flex-col justify-center'>
          <h2 className='text-[40px] font-bold'>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h2>
          <p className='text-xl font-light opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, natus? Eveniet officiis debitis aperiam, quibusdam mollitia harum obcaecati sapiente adipisci, itaque repudiandae voluptatem architecto in laudantium deserunt error ducimus magni!</p>
          <button className={`px-5 py-4 rounded-md border-none w-max text-black bg-[#dfe6e9] cursor-pointer`}>Read more</button>
        </div>
      </div>
    </div>
  )
}
