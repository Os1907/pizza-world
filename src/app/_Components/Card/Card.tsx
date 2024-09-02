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
      <div className="col-span-1 mBlur Gborder rounded-pixel shadow-sm  hover:bg-blury group origin-center hover:border-2 hover:shadow  flex justify-center flex-col items-center pt-1 pb-2 relative overflow-hidden transform hover:scale-110 transition-transform duration-300 will-change-transform hover:z-10">
        <Image src={item.img} alt="pizza" width={150} height={150} className="rounded-full mb-5    transition-all duration-300 group-hover:scale-110   group-hover:rotate-6 " />
        <div className='text-center   p-2  '>
          <p className="text-body   font-bold text-sm lg:text-base ">
            {
              item.name
            }
          </p>
          <p className="text-zinc-300 group-hover:text-body font-medium text-xs duration-1000  transition-all ">
            {
              item.description
            }
          </p>
          <div className="flex justify-center mt-2 items-start rounded-b-pixel2xl transition-all bg-blury Gborder absolute duration-500 group-hover:-top-2 -top-12 right-0 h-10 w-20">
            <p className='text-body  font-semibold text-xs px-1 pt-2'>
              <PiClockCountdownBold className='mb-1 inline ' /> {item.time}
            </p>

          </div>
          <div className="flex justify-between items-center mt-5">

            <div className='text-body text-sm text-start font-bold mx-2  '>
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
