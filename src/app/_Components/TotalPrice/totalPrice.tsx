'use client'
import { Ipizza } from '@/interface/Ipizza';
import { addTotalBill } from '@/Redux/Slices/totalBill';
import { RootState } from '@/Redux/store';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

interface Iprop {
  items: Ipizza[],
}
export default function TotalPrice(props:Iprop) {
    const totalItems  = props.items.reduce((a, b) => a + b.price, 0) 
    const Delivery = 29
    const total = totalItems + (totalItems * 0.14) + Delivery
    const dispatch = useDispatch()
    useEffect(()=>{
      
          const priceDetalis={
              totalItems : Math.round(totalItems ),
              Delivery:  29,
              total:Math.round(total)
          }

     dispatch( addTotalBill(priceDetalis),)
     
    },[total])
  return (
    <>
    {
      props.items.length != 0 ?<div className='border-t border-double border-text font-medium '>

    <div className='text-text mt-2 flex justify-between'> 
      <p className="text-sm">
      Items Price  
      </p>  
      <p className="text-sm font-semibold">
      {Math.round(totalItems )} EGP
      </p>  

      </div>
      <div  className='text-text mt-2 flex justify-between'> 
      <p className="text-sm">
      Tax(14%)   
      </p>  
      <p className="text-sm font-semibold">
      {Math.round(totalItems * 0.14 )} EGP
      </p>  

      </div>
      <div  className='text-text mt-2 flex justify-between'> 
      <p className="text-sm">
      Delivery   
      </p>  
      <p className="text-sm  font-semibold">
      {Delivery} EGP
      </p>  

      </div>
      
      <div className='text-text border-t border-double border-text font-bold flex justify-between  pt-2 mt-2'> 
      <p className="text-sm">
      Total Price 
      </p>  
      <p className="text-sm font-semibold">
      {Math.round(total)} EGP
      </p>  
      
      </div>

    </div> : <></>
    }
    
    
    
    </>
  )
}
