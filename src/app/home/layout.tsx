import React, { ReactNode } from 'react'
import Navbar from '../_Components/Navbar/Navbar'
import Details from '../_Components/DetailsHome/Details'
import Bill from '../_Components/Bill/Bill'
import dynamic from 'next/dynamic';
interface IlayOut {
  children: React.ReactNode
}
export default function layout({ children }: IlayOut) {
  const DynamicBill = dynamic(() => import('../_Components/Bill/Bill'), { ssr: false });
  return (
    <>
      <div className=" grid grid-cols-6 lg:grid-cols-12">
        <div className="col-span-6 lg:col-span-1">
          <Navbar />
        </div>

        <div className=" mx-4 col-span-6 lg:col-span-8 ">
          <Details />
          {children}
        </div>
      
        <div className=" col-span-6 lg:col-span-3 ">
          <DynamicBill />
        </div>
      </div>




    </>
  )
}
