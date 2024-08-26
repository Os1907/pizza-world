'use client'
import UseHydration from '@/Hooks/useHydration';
import { RootState } from '@/Redux/store';
import { useSelector } from 'react-redux'
import Link from 'next/link';
import React from 'react'
import Loading from '@/app/_Components/Loading/Loading';
import { usePathname } from 'next/navigation';

const useOrders = () => useSelector((state: RootState) => state.finalOrder);
interface IlayOut {
    children: React.ReactNode
}
export default function Layout({ children }: IlayOut) {
    const orders = useOrders()
    const {hydration} = UseHydration(orders)
const pathname = usePathname()    

    return (
        <>

            <div className='   grid grid-cols-10 min-h-screen'>
                {
                    hydration ? <> <div className='bg-dark   min-h-screen col-span-4 pt-5 '>
                        <p className='text-body font-bold text-5xl'>
                            <span className="text-main "> | </span>   {"Order's"} List
                        </p>
                        <div className=' mt-3 mx-4 flex flex-col items-center justify-center gap-y-2 '>

                            {
                                orders?.map((order) => {
                                    return (
                                        <div  key={order.id} className={pathname.slice(21) === `${order.id.slice(1) }`? 'bg-main rounded-pixel  flex   justify-between gap-y-2 h-auto  w-full p-5 Gborder border-lightDark transition-all cursor-pointer' : 'bg-lightDark rounded-pixel  flex   justify-between gap-y-2 h-auto  w-full p-5 Gborder hover:border-main transition-all cursor-pointer'}>
                                            <Link href={`/Dashboard/orders/ ${order.id.slice(1)}`} className='w-full'  >
                                            <p className='text-body font-bold text-lg '>
                                                Order : {order?.id}
                                            </p>
                                            <div className='text-end'>

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
                    
                     </> : <Loading shape={'box'}/> 
                }


            </div>





        </>
    )
}
