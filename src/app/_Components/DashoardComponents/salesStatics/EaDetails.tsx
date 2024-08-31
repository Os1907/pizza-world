'use client'
import React from 'react'
import { FaChartSimple } from 'react-icons/fa6';

interface Items { 
    earnings: number;
     revenue: number; 
    expenses: number; 

}

interface Iprop{
    data: Items,
}
export default function EaDetails(props:Iprop) {
    const { earnings , revenue , expenses  } = props.data
  return (
    <>
                <div className='bg-line col-span-6 lg:col-span-2 px-5 lg:px-10 py-3 flex items-center  bg-lightDark rounded-pixel   gap-x-3 '>
            <p className='  bg-main p-3 transition-all  rounded-pixel2xl text-base lg:text-xl text-body '>
                  <FaChartSimple />
                </p>
                <div>
                <p className='text-body font-medium text-base lg:text-xl '>
                Earnings
                </p>
                <p className='text-body font-extrabold  text-lg lg:text-2xl '>
                {earnings} EGP 
                </p>
                </div>
            </div>
            <div className='bg-line col-span-3 lg:col-span-2 px-5 lg:px-10 py-3 flex items-center  bg-lightDark rounded-pixel   gap-x-3 '>
            <p className='  bg-main p-3 transition-all  rounded-pixel2xl text-base lg:text-xl text-body '>
                  <FaChartSimple />
                </p>
                <div>
                <p className='text-body font-medium text-base lg:text-xl '>
                Revenue
                </p>
                <p className='text-body font-extrabold  text-lg lg:text-2xl '>
                {revenue} EGP 
                </p>
                </div>
            </div>
            <div className='bg-line col-span-3 lg:col-span-2 px-5 lg:px-10 py-3 flex items-center  bg-lightDark rounded-pixel   gap-x-3 '>
            <p className='  bg-main p-3 transition-all  rounded-pixel2xl text-base lg:text-xl text-body '>
                  <FaChartSimple />
                </p>
                <div>
                <p className='text-body font-medium text-base lg:text-xl '>
                Expenses
                </p>
                <p className='text-body font-extrabold  text-lg lg:text-2xl '>
                {expenses} EGP 
                </p>
                </div>
            </div>


    
    
    </>
  )
}
