'use client'
import { RootState } from '@/Redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { CiPizza } from "react-icons/ci";
import { LuDessert } from "react-icons/lu";
import { useSelector } from 'react-redux';

export default function Details() {
const pathname = usePathname()
const userInformation=useSelector((state:RootState)=>state.UserInfo)
const [userName, setUserName] = useState<string | undefined>('');
// To handel hydration Problem
useEffect(() => {
  if (userInformation) {
    setUserName(userInformation.fullName?.toUpperCase());
  }
}, [userInformation]);
  return (
    <>
    
    { pathname.includes('checkout') ? <> </>: <main className=" rounded-pixel2xl   pt-5 relative px-4  ">
              <div className="text-body   ">
                {/* <div className='overflow-hidden  h-52 sm:h-72 lg:h-80 mb-5  flex items-center justify-center relative  '>
                  <Image src="/Images/Pizza/Hawaiian/new.png" alt="pizza" height={80} width={80} className=" w-full md:w-3/4 hover:scale-105 transition-all  " />
                 
                  <p className='absolute top-0 lg:top-8 left-4 lg:left-0 text-5xl lg:text-6xl font-extrabold bg-gradient-to-l md:bg-gradient-to-r from-blue-900 to-text md:from-main  md:to-yellow-500 bg-clip-text text-transparent w-52 '>
                    TRY OUR NEW PIZAA
                  </p>
                    <span className='bg-gradient-to-l md:bg-gradient-to-r from-blue-900 to-text md:from-main  md:to-yellow-500 text-body text-xs absolute bottom-0 lg:bottom-4 left-4 lg:left-0  px-3 rounded-pixel2xl  animate-pulse'>
                        Limited Time
                    </span>
                </div> */}
                  <p className='text-3xl lg:text-5xl font-extrabold'>
                  <span className="text-main "> | </span>   Welcome ,  {userName} !
                  </p>
                  <p className="text-body_light text-sm ml-1 mt-3">
                    {"Don't"} forget to visit us {"let's"} enjoy with most delicious pizza !
                  </p>
              </div>
              <div className=''> 
                <p className="text-body text-base lg:text-xl font-medium ml-1">
                  Find your favorite { pathname === '/home'  ? "Pizza" : "Dessert" }
                </p>
              </div>
              <div className="my-2 flex  mx-1  gap-x-5" >
                <Link href={'/home'}>
                
                <p className={ pathname === '/home'  ?  "text-body text-lg border-b-2 font-medium border-main" : "text-body text-lg "}>
                <CiPizza  className="inline mb-1"/>Pizza
                </p>
                </Link>

                <Link href={'/home/dessert'}>

                <p className={ pathname ===  '/home/dessert' ?  "text-body text-lg border-b-2 font-medium border-main" : "text-body text-lg "}>
                <LuDessert  className="inline mb-1"/>  Dessert
                </p>
                </Link>
                
              </div>
             
             </main>
     }
        
    
    </>
  )
}
