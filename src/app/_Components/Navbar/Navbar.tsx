'use client'
import React from 'react'
import Image from "next/image";
import { PiArrowsCounterClockwiseBold, PiUserBold } from 'react-icons/pi';
import { MdFastfood } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiClipboardList } from 'react-icons/hi';
import { FaChartSimple } from 'react-icons/fa6';


export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      <aside className=' flex    lg:flex-col items-center rounded-pixel  lg:rounded-none my-5 lg:my-0 lg:min-h-screen  lg:mx-0  lg:pb-5  px-4     relative  lg:fixed '>
      
        <Image src="/Images/logo.png" className="lg:my-5 w- 14 px- 1 size-14 " alt="logo" width={80} height={80} />

        <div className='bg-main  text-body rounded-pixel w-full lg:w-auto   text-lg lg:mt-5  inline-flex lg:py-4 px-2  lg:flex-col items-center justify-center gap-y-4'>


      {
        pathname.includes("Dashboard") ?   <div>
        <Link href='/Dashboard/orders'>

          <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
            <HiClipboardList />
          </p>
        </Link>
        <Link href='/Dashboard/orders'>

<p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
  <FaChartSimple />
</p>
</Link>
<Link href={ pathname.includes("Dashboard") ? '/home':'/Dashboard/orders'}>
              <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                <PiArrowsCounterClockwiseBold />
              </p>
            </Link>
      </div> :  <div>

            <Link href='/home'>

              <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                <MdFastfood />
              </p>
            </Link>
            <Link href='/profile'>

              <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                <PiUserBold />
              </p>
            </Link>
            <Link href={ pathname.includes("Dashboard") ? '/home':'/Dashboard/orders'}>
              <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                <PiArrowsCounterClockwiseBold />
              </p>
            </Link>
          </div>
      }
         

         

        </div>
      </aside>

    </>
  )
}
