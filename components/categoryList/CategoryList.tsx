import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  const data=[1,2,3,4,5,6]
  return (
    <div className=''>
      <h1 className='my-[50px]'>Popular Categories</h1>
      <div className='flex flex-wrap justify-start gap-5'>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`flex items-center gap-[10px] capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-[10px]  bg-[#57c4ff31] `}
            key={item}
          >
            
              <Image
                src={"/imgs/ph.jpg"}
                alt=""
                width={32}
                height={32}
                className='rounded-[50%]'
              />
        
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
