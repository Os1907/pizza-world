import { Ipizza } from '@/interface/Ipizza'
import Image from 'next/image'
import React from 'react'

interface Iprop {
    bill : Ipizza[]
}
export default function Table( {bill} : Iprop) {

  return (
    <>
    
    <table className="min-w-full   ">
                <thead >
                  <tr className=''>
                    <th className=" text-center">Image</th>
                    <th className=" text-center">Item</th>
                    <th className=" text-center">Comment</th>
                    <th className=" text-center">Quantity</th>
                    <th className=" text-center">Price</th>
                  </tr>
                </thead>
                <tbody >
                  {
                    bill.map(data => {
                      return (
                        <tr key={data.id}>
                          <td className='flex justify-center'>
                            <Image src={data.img} width={60} height={60} alt="pizza" />

                          </td>
                          <td className="text-center font-medium  "> {data.name}</td>
                          <td className="text-center font-medium "> {data.comment ? data.comment : "No Comment"}</td>
                          <td className="text-center font-bold "> <span className='text-lg text-main'> x</span> {data.quantity}</td>
                          <td className="text-center font-bold "> {Math.floor(data.price)} <span className='text-xs'> EGP</span> </td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>

    
    
    
    
    
    
    
    </>
  )
}
