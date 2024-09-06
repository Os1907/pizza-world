import Image from 'next/image'
import React from 'react'
import OrderNow from '../Button/OrderNow'
import { Ipizza } from '@/interface/Ipizza'
import { CiClock1 } from 'react-icons/ci'
import { PiClockCountdownBold } from 'react-icons/pi'

interface Iprop {
  item: Ipizza
}
export default function Card(props: Iprop) {
  const { item } = props
  return (
    <>
      <div className="col-span-1   rounded-pixel shadow-sm  bg-gradient-to-t to-mainRed from-main_orange border-main_orange  group origin-center  flex justify-center flex-col items-center pt-1 pb-2 relative overflow-hidden transform hover:scale-110 transition-transform duration-300 will-change-transform hover:z-10">
        <Image src={item.img} alt="pizza" width={150} height={150} className="rounded-full  lg:mb-5 size-24 lg:size-36   transition-all duration-300 group-hover:scale-110   group-hover:rotate-6 " />
        <div className='text-center  p-1  lg:p-2  '>
          <p className="text-body   font-bold text-sm lg:text-base ">
            {
              item.name
            }
          </p>
          <p className="text-zinc-300 group-hover:text-body font-medium text-xs duration-1000  transition-all line-clamp-3 hover:line-clamp-none   lg:line-clamp-none">
            {
              item.description
            }
          </p>
          <div className="flex justify-center mt-2 items-start rounded-b-pixel2xl transition-all bg-main_orange Gborder absolute duration-500 group-hover:-top-2 -top-12 -right-2 h-7 lg:h-10 w-20">
            <p className='text-body  font-semibold text-[10px] px-1 pt-2'>
              <PiClockCountdownBold className='mb-1 inline ' /> {item.time}
            </p>

          </div>
          <div className="flex justify-center lg:justify-between items-center mt-5 flex-wrap gap-y-1">

            <div className='text-body text-xs lg:text-sm text-start font-bold mx-2  '>
              <span>
                {item.price} EGP
              </span>

            </div>
            <OrderNow details={item} />

          </div>

        </div>

      </div>



    </>
  )
}
