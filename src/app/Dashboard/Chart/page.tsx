'use client'
import EaDetails from '@/app/_Components/DashoardComponents/EaDetails'
import { useEarning } from '@/Hooks/useSelectors'
import React from 'react'
import { FaChartSimple } from 'react-icons/fa6'

export default function Page() {
    const amounts = useEarning()
    
     const earningsDetails = ():{earnings :number , revenue :number , expenses :number  }=>{
         const earnings= amounts.reduce((a, b) => a + b.amount, 0) 
         const revenue= earnings * 0.40
         const expenses = earnings * 0.60
         return {  earnings, revenue, expenses  }
     }
    const earningsData = earningsDetails()
  return (
    <>
    <section className=' min-h-screen'>

    <div className='mt-10 mb-14 '>
        <h4 className='text-body px-6 font-extrabold text-6xl '>
            Sales Statics
        </h4>
        <div className="grid grid-cols-3 m-4 gap-x-4 ">
            <EaDetails data={earningsData}/>

        </div>

    </div>
    </section>
    
    
    </>
  )
}
