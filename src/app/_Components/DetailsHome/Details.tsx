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
                
                  <p className='text-3xl lg:text-5xl font-extrabold'>
                  <span className="text-main "> | </span>   Welcome ,  {userName} 
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
