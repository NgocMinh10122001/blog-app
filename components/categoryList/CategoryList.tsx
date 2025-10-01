import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./categoryList.css"

interface CatRes {
  _id : string,
  slug: string,
  title : string,
  img : string
}

const getData = async ():Promise<CatRes[]> => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json() as Promise<CatRes[]>;
};



const CategoryList = async () => {
  const data = await getData();
  return (
    <div className=''>
      <h2 className='my-[50px] text-[36px] font-bold'>Popular Categories</h2>
      <div className='flex flex-wrap justify-start gap-5'>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`flex items-center gap-[10px] capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-[10px]  ${item.slug} `}
            key={item._id}
          >
            {item.img && (
              <div className='w-[32px] h-[32px] rounded-full overflow-hidden relative'>
                <Image
                src={`/imgs${item.img}`}
                alt=""
                fill
                className={"object-cover"}
              />
              </div>
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
