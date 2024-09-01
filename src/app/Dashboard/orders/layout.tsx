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

    const { hydration } = UseHydration(orders)
    const pathname = usePathname()

    return (
        <>

            {
                orders?.length === 0 ? <div className='min-h-screen  flex justify-center items-center flex-col gap-y-5'>
                    <Loading shape={'box'} />
                    <p className='text-center text-body font-bold text-xl lg:text-5xl'> No Orders Yet</p>

                </div> : <>  <div className='   grid grid-cols-10 min-h-screen  pt-4 2xl:px-4 md:px-10 mx-4'>
                    {
                        hydration ? <> <div className='   col-span-10 xl:col-span-4 pt-4 lg:pt-8    '>

                            <p className='text-body font-bold text-5xl'>
                                <span className="text-main "> | </span>
                                {"Order's"} List
                            </p>


                            <div className=' mt-3 mx-1 flex flex-col items-center justify-center gap-y-4 '>

                                {
                                    orders?.map((order) => {
                                        return (
                                            <div key={order.id} className={pathname.slice(20) === `${order.id.slice(1)}` ? 'bg-main rounded-pixel  flex   justify-between gap-y-2 h-auto  w-full p-5 Gborder border-lightDark transition-all cursor-pointer' : ' bg-lightDark rounded-pixel  flex   justify-between gap-y-2 h-auto  w-full p-5 Gborder hover:border-main transition-all cursor-pointer'}>
                                                <Link href={`/Dashboard/orders/${orders.findIndex((item) => item.id === order.id)}_${order.id.slice(1)}`} className='w-full'  >
                                                    <p className='text-body font-bold text-lg '>
                                                        Order : {order?.id}
                                                    </p>
                                                    <div className=' flex justify-between text-end mt-2'>
                                                        <div className='flex gap-x-1 items-center text-body'>
                                                            <IoIosTimer className='text-sm' />
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

                            <div className=" col-span-10 xl:col-span-6   ">

                                {children}

                            </div>

                        </> : <div className="col-span-10">

                            <Loading shape={'box'} />

                        </div>
                    }


                </div> </>
            }






        </>
    )
}
