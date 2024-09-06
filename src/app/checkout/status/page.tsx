'use client'

import { RootState } from '@/Redux/store';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Status() {
  const orderStatus = useSelector((state: RootState) => state.finalOrder);
  return (
    <>
    {
      orderStatus[0]?.status  === "Pending" ? <div className='relative lg:min-h-screen  flex items-center justify-center bg-gradient-to-t to-mainRed from-main_orange w-full'>
         <Link href={"/home"}>
          <div className=' Gborder  bg-blury mBlur  text-body flex  items-center fixed px-5 py-3  rounded-full -translate-x-1/2 left-1/2 top-20  gap-x-1 group'>
            <svg width="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="currentColor"></path>                            </svg>                        
            <span className='  text-xl '>
                Home
            </span>
          </div>
            </Link>
        <div className='mBlur Gborder  mt-10  flex flex-col items-center justify-center w-1/2 mx-auto  rounded-pixel bg-light py-4'>
        <div className="dots"></div>
          <div className=' text-4xl flex-col '>
        <p className='text-body font-bold'>
          Your order {orderStatus[0].status }
        </p>
          </div>
         
        </div>

      </div> : <></>
    }
    
    
    
    </>
  )
}
