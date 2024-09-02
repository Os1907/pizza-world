import React, { ReactNode } from 'react'
import Navbar from '../_Components/Navbar/Navbar'
import Details from '../_Components/DetailsHome/Details'
import dynamic from 'next/dynamic';
import Linebg from '../_Components/linebg/linebg';
interface IlayOut {
  children: React.ReactNode
}
export default function layout({ children }: IlayOut) {
  const DynamicBill = dynamic(() => import('../_Components/Bill/Bill'), { ssr: false });
  return (
    <>
    <div className='relative overflow-hidden'>
      <div className='text-main'>

      <Linebg />
      </div>
      <div className=" grid grid-cols-6 lg:grid-cols-12">
        <div className="col-span-6 lg:col-span-1">
          <Navbar />
        </div>

        <div className=" mx-4 col-span-6 lg:col-span-8 py-5 ">
          <Details />
          {children}
        </div>
      
        <div className=" col-span-6 lg:col-span-3 ">
          <DynamicBill />
        </div>
      </div>
    </div>




    </>
  )
}
