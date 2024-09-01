'use client'
import React from 'react'
import Image from "next/image";
import { PiArrowsCounterClockwiseBold, PiUserBold } from 'react-icons/pi';
import { MdFastfood, MdPreview } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiClipboardList } from 'react-icons/hi';
import { FaChartSimple } from 'react-icons/fa6';
import { TbReportSearch } from 'react-icons/tb';


export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      <aside className=' flex justify-center lg:justify-start  gap-x-5  lg:flex-col items-center   bg-main   lg:w-32  lg:mx-0 py-3 lg:py-0  lg:pb-5  px-4  lg:min-h-screen lg:fixed     '>

        <Image src="/Images/wlogo.png" className="lg:my-12  px-1 size-14 " alt="logo" width={80} height={80} />



          {
            pathname.includes("Dashboard") ? <div  className='bg-dark  text-body rounded-pixel w-full lg:w-auto   text-lg lg:mt-5  inline-flex py-1 lg:py-4 px-2  lg:flex-col items-center justify-center gap-y-4'>
              <Link href='/Dashboard/orders'>

                <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                  <HiClipboardList />
                </p>
              </Link>
              <Link href='/Dashboard/Chart'>

                <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                  <FaChartSimple />
                </p>
              </Link>
              <Link href='/Dashboard/Report'>

                <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                  <TbReportSearch />
                </p>
              </Link>


              {/* <MdPreview /> */}

              <Link href={pathname.includes("Dashboard") ? '/home' : '/Dashboard/orders'}>
                <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                  <PiArrowsCounterClockwiseBold />
                </p>
              </Link>
            </div> : <div  className='bg-text  text-body rounded-pixel w-full lg:w-auto   text-lg lg:mt-5  inline-flex lg:py-4 px-2  lg:flex-col items-center justify-center gap-y-4'>

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
              <Link href={pathname.includes("Dashboard") ? '/home' : '/Dashboard/orders'}>
                <p className='  hover:bg-main2 transition-all cursor-pointer rounded-pixel p-2'>
                  <PiArrowsCounterClockwiseBold />
                </p>
              </Link>
            </div>
          }




      </aside>

    </>
  )
}
