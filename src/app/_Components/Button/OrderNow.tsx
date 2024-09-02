'use client'
import { Ipizza } from '@/interface/Ipizza'
import { modifedBill } from '@/Redux/Slices/BillOrder'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '@/Redux/store'

interface Iprop{
  details:Ipizza
}
export default function OrderNow(props:Iprop) {
const Items = useSelector((state: RootState) => state.Bill)
const [isAdded, setIsAdded] = useState(false);
 const Dispatch= useDispatch()
  const {details} = props
  const quantity = 1
  const afterAdded = {
            ...details,
            quantity,
            comment: "",
            price: details.price * quantity ,
            pricePerUnit: details.price,

        }
        useEffect(() => {
          setIsAdded(Items?.filter(item => item.name === details.name).length > 0);
        }, [Items, details.name]);
  return (
    <>
    {
isAdded ? <div>
      <button disabled className=' font-semibold  bg-main  text-body border border-main text-xs lg:text-sm  rounded-pixel px-3 py-1 '>
        Added
      </button> </div>: <div>
                                  <button onClick={()=> Dispatch(modifedBill(afterAdded))} className='bg-blury Gborder font-bold  group-hover:bg-main text-body group-hover:text-body text-xs lg:text-sm   rounded-pixel px-3 py-1 '>
                                    Order now
                                  </button>
                                </div>
    }
                                
    
    </>
  )
}
