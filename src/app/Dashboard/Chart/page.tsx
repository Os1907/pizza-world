'use client'
import Charts from '@/app/_Components/DashoardComponents/Chart/chart'
import TinyBarChart from '@/app/_Components/DashoardComponents/Chart/TinyBarChart'
import TopOrder from '@/app/_Components/DashoardComponents/Chart/topOrder'
import EaDetails from '@/app/_Components/DashoardComponents/salesStatics/EaDetails'
import Loading from '@/app/_Components/Loading/Loading'
import { calcAverage, calculateTotalEarnings, earningsLastMonth } from '@/helper/statics/statics'
import UseHydration from '@/Hooks/useHydration'
import { useEarning, useItemCount } from '@/Hooks/useSelectors'
import dynamic from 'next/dynamic'
import React from 'react'

const DynamicCharts = dynamic(() => import('@/app/_Components/DashoardComponents/Chart/chart'), { ssr: false });
const DynamicTinyBarChart = dynamic(() => import('@/app/_Components/DashoardComponents/Chart/TinyBarChart'), { ssr: false });
const DynamicTopOrder = dynamic(() => import('@/app/_Components/DashoardComponents/Chart/topOrder'), { ssr: false });

export default function Page() {
    const amounts = useEarning()
    const itemCounts = useItemCount()
    const totalEarningsData = calculateTotalEarnings(amounts)
    const amountslast = earningsLastMonth
    const revenue = calcAverage(amounts, 0.75)
    const expenses = calcAverage(amounts, 0.25)
    const revenueLast = calcAverage(earningsLastMonth, 0.75)
    const expensesLast = calcAverage(earningsLastMonth, 0.25)

    const { hydration } = UseHydration(amounts)


    const codeRepetition = (tag:React.JSX.Element) => {
        return (
            <div className='col-span-6 lg:col-span-3'>
                               {tag}      
            </div>
        )
    }
    return (
        <>
        <section className='min-h-screen bg-dark px-4'>
            {hydration ? (
                <div className='pt-10 pb-14'>
                    <h4 className='text-body px-6 font-extrabold text-center lg:text-start text-4xl lg:text-6xl mb-4'>
                        Sales Statics
                    </h4>
                    <div className="grid grid-cols-6 m-4 gap-4 ">
                        <EaDetails data={totalEarningsData} />
                        <div className='col-span-6'>
                            <DynamicCharts current={amounts} last={amountslast} text={"Earnings Comparison in Current Month and Last Month"} size='2xl' x='Current Month' y='Last Month' />
                        </div>

                        {codeRepetition(<DynamicTinyBarChart current={revenue} last={expenses} text='Comparison between Revenue and Expenses for Current month' />)}
                        {codeRepetition(<DynamicCharts current={revenueLast} last={expensesLast} text='Comparison between Revenue and Expenses for Last month' size='base' x='Revenue' y='Expenses' />)}

                        <div className='col-span-6'>
                            <DynamicTopOrder count={itemCounts} text="Top Orders (% in Sales)" size='2xl' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='min-h-screen flex items-center'>
                    <Loading shape='box' />
                </div>
            )}
        </section>
    </>
    )
}

