'use client'
import { RootState } from '@/Redux/store'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BillItem from '../BillItem/BillItem'
import TotalPrice from '../TotalPrice/totalPrice'
import "../../Css/animation.css";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiSolidNavigation } from 'react-icons/bi'

export default function Bill() {
    const item = useSelector((state: RootState) => state.Bill);
    const pathname = usePathname()
    return (
        <>
            {
                item.length != 0  && pathname.includes("checkout") != true ? <div className='  mx-5 wdithh  '>

                    <div className='bg-white   rounded-pixel flex     flex-col gap-y-4 min-h-36 my-5   p-5 border-textBorder border   '>

                        <p className='text-text text-xl font-bold  text-start'>
                            <span className='text-text font-extrabold'>|</span>   Order Details
                        </p>

                        {
                            item.map(data => <BillItem key={data.id} items={data} Index={item.findIndex((product) => product.name === data.name)} />)
                        }
                        <TotalPrice items={item} />
                        <div className=' flex justify-center '>
                            <Link href="/home/checkout" >
                            <button className=' shadow-sm py-1 px-5 font-semibold border-text border  group text-text bg-light bg-body rounded-pixel  transition-all'>
                                CheckOut <BiSolidNavigation className=' mb-1 text-lg rotate-45 hidden group-hover:inline transition-all ' />

                            </button>
                            </Link>

                        </div>
                    </div>

                </div>
                    : <></>
            }



        </>
    )
}
