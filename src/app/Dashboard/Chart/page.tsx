'use client'
import Charts from '@/app/_Components/DashoardComponents/Chart/chart'
import TinyBarChart from '@/app/_Components/DashoardComponents/Chart/TinyBarChart'
import EaDetails from '@/app/_Components/DashoardComponents/salesStatics/EaDetails'
import Loading from '@/app/_Components/Loading/Loading'
import { calcAverage, calculateTotalEarnings, earningsLastMonth } from '@/helper/statics/statics'
import UseHydration from '@/Hooks/useHydration'
import { useEarning } from '@/Hooks/useSelectors'
import React from 'react'

export default function Page() {
    const amounts = useEarning()
    const totalEarningsData = calculateTotalEarnings(amounts)
    const amountslast = earningsLastMonth
    const revenue = calcAverage(amounts, 0.75)
    const expenses = calcAverage(amounts, 0.25)
    const revenueLast = calcAverage(earningsLastMonth, 0.75)
    const expensesLast = calcAverage(earningsLastMonth, 0.25)


    const { hydration } = UseHydration(amounts)
    return (
        <>
            <section className=' min-h-screen bg-dark px-4'>

                {
                    hydration ? <div className='pt-10 pb-14  '>
                        <h4 className='text-body px-6 font-extrabold text-center lg:text-start text-4xl lg:text-6xl mb-4'>
                            Sales Statics
                        </h4>
                        <div className="grid grid-cols-6 m-4 gap-4 ">
                            <EaDetails data={totalEarningsData} />
                            <div className='col-span-6 lg:col-span-6'>
                                
                                <Charts current={amounts} last={amountslast} text={"Earnings Comparison in Current Month  and Last Month"} />
                            </div>
                            <div className='col-span-6 lg:col-span-3'>
                                
                                    
                                <TinyBarChart current={revenue} last={expenses} text='Comparison between Revenue and Expenses for Last month' />
                            </div>
                            <div className='col-span-6 lg:col-span-3'>
                               
                                <Charts current={revenueLast} last={expensesLast} text=' Comparison between Revenue and Expenses for Last month' />

                            </div>


                        </div>

                    </div> : <Loading shape='box' />
                }


            </section>


        </>
    )
}
