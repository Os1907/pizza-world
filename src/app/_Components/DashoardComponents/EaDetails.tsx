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
                <div className='col-span-1 px-10 py-3 flex items-center Gborder bg-lightDark rounded-pixel   gap-x-3 hover:border-main transition-all duration-500 hover:shadow-md hover:shadow-main'>
            <p className='  bg-main p-3 transition-all  rounded-pixel2xl text-xl text-body '>
                  <FaChartSimple />
                </p>
                <div>
                <p className='text-body font-medium text-xl '>
                Earnings
                </p>
                <p className='text-body font-extrabold text-2xl '>
                {earnings} EGP 
                </p>
                </div>
            </div>
            <div className='col-span-1 px-10 py-3 flex items-center Gborder bg-lightDark rounded-pixel   gap-x-3 hover:border-main transition-all duration-500'>
            <p className='  bg-main p-3 transition-all  rounded-pixel2xl text-xl text-body '>
                  <FaChartSimple />
                </p>
                <div>
                <p className='text-body font-medium text-xl '>
                Revenue
                </p>
                <p className='text-body font-extrabold text-2xl '>
                {revenue} EGP 
                </p>
                </div>
            </div>
            <div className='col-span-1 px-10 py-3 flex items-center Gborder bg-lightDark rounded-pixel   gap-x-3 hover:border-main transition-all duration-500'>
            <p className='  bg-main p-3 transition-all  rounded-pixel2xl text-xl text-body '>
                  <FaChartSimple />
                </p>
                <div>
                <p className='text-body font-medium text-xl '>
                Expenses
                </p>
                <p className='text-body font-extrabold text-2xl '>
                {expenses} EGP 
                </p>
                </div>
            </div>


    
    
    </>
  )
}
