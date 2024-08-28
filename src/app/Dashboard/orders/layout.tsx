'use client'
import UseHydration from '@/Hooks/useHydration';
import { RootState } from '@/Redux/store';
import { useSelector } from 'react-redux'
import Link from 'next/link';
import React from 'react'
import Loading from '@/app/_Components/Loading/Loading';
import { usePathname } from 'next/navigation';
import { IoIosTimer } from 'react-icons/io';

const useOrders = () => useSelector((state: RootState) => state.orderList);
const useEarning = () => useSelector((state: RootState) => state.Earnings);

interface IlayOut {
    children: React.ReactNode
}
export default function Layout({ children }: IlayOut) {
    const orders = useOrders()
    const earnings = useEarning()

    const {hydration} = UseHydration(orders)
const pathname = usePathname()    

    return (
        <>

            <div className='   grid grid-cols-10 min-h-screen '>
                {
                    hydration ? <> <div className='bg-dark   min-h-screen col-span-4 pt-8 px-4 '>
                        <p className='text-body font-bold text-5xl'>
                            <span className="text-main "> | </span>   {"Order's"} List
                        </p>
                        <p className='text-body font-extrabold text-3xl'>
                            {
                                earnings[3]?.amount
                            }
                        </p>
                        <div className=' mt-3 mx-1 flex flex-col items-center justify-center gap-y-4 '>

                            {
                                orders?.map((order) => {
                                    return (
                                        <div  key={order.id} className={pathname.slice(21) === `${order.id.slice(1) }`? 'bg-main rounded-pixel  flex   justify-between gap-y-2 h-auto  w-full p-5 Gborder border-lightDark transition-all cursor-pointer' : 'bg-lightDark rounded-pixel  flex   justify-between gap-y-2 h-auto  w-full p-5 Gborder hover:border-main transition-all cursor-pointer'}>
                                            <Link href={`/Dashboard/orders/ ${order.id.slice(1)}`} className='w-full'  >
                                            <p className='text-body font-bold text-lg '>
                                                Order : {order?.id}
                                            </p>
                                            <div className=' flex justify-between text-end mt-2'>
                                                <div className='flex gap-x-1 items-center text-body'>
                                                <IoIosTimer className='text-sm'/>
                                                <p className=' font-semibold text-sm'>
                                                    {order?.date?.time.slice(0, 5)}
                                                </p>
                                                <p className='font-medium text-xs mx-2 '>
                                                    {order?.date?.day},{order?.date?.month}
                                                </p>

                                                </div>

                                            <p className='text-body font-bold '>
                                                {order?.totalBill[0].total} EGP
                                            </p>
                                            </div>
                                         </Link>
                                        </div>
                                    )
                                }
                                )
                            }




                        </div>

                    </div>
                    <div className="col-span-6 ">
                        {children}

                    </div>
                    
                     </> : <div className="col-span-10">

                         <Loading shape={'box'}/> 
                     </div>
                }


            </div>





        </>
    )
}
