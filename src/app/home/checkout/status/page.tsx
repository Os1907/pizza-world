'use client'

import { RootState } from '@/Redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Status() {
  const orderStatus = useSelector((state: RootState) => state.finalOrder);
  return (
    <>
    {
      orderStatus[0]?.status || orderStatus[0]?.status === "Pending" ? <div className='mt-10 lg:min-h-screen w-1/2 mx-auto '>
        <div className='mBlur Gborder w-full mt-32  flex flex-col items-center justify-center  rounded-pixel bg-light py-4'>
        <div className="dots"></div>
          <div className=' text-4xl flex-col '>
        <p className='text-text font-semibold'>
          Your order {orderStatus[0].status }
        </p>
          </div>
        </div>

      </div> : <></>
    }
    
    
    
    </>
  )
}
