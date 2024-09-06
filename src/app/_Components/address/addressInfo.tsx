import { Iuser } from '@/interface/Iuser'
import React from 'react'

interface Iprop{
    Info:Iuser
}
export default function AddressInfo({Info}:Iprop) {
  return (
    <>
               
                <p className=' text-sm lg:text-base font-semibold   '><span className=' font-extrabold mx-1'> Full Name :  </span> {Info?.fullName}</p>
                <p className=' text-sm lg:text-base font-semibold  '><span className=' font-extrabold mx-1'> Phone Number : </span> {Info?.phoneNumber}</p>
                <p className=' text-sm lg:text-base font-semibold mb-3  '><span className='font-extrabold mx-1'> Address :  </span> {Info?.address}</p>
               
    
    
    
    </>
  )
}
