'use client'
import React from 'react'
import { RootState } from '@/Redux/store';
import { useSelector } from 'react-redux'
import UseHydration from '@/Hooks/useHydration'
import { usePathname } from 'next/navigation'
import Loading from '@/app/_Components/Loading/Loading';
import AddressInfo from '@/app/_Components/address/addressInfo';
import Table from '@/app/_Components/tableCheck/table';

const useOrders = () => useSelector((state: RootState) => state.finalOrder);

export default function Page() {
    const order = useOrders()
const pathname = usePathname()    
const { hydration } = UseHydration(order)

  return (
    <>

{/* {
  hydration  ? <h1 className='text-4xl text-main'>
        {pathname?.slice(21)}
    </h1> :  <Loading shape='loader'/>
} */}
 {
          order?.filter((order) => order.id === `#${pathname.slice(21)}`).map((order) => {
            return (
              <div key={order.id} className='flex justify-center  items-center flex-col text-body p-10 gap-y-3 bg-lightDark Gborder m-4 rounded-pixel2xl '>
                <div className='flex flex-wrap justify-between px-4 border-b border-body  '>
                <AddressInfo Info={order.Info} />
                </div>

                <div className='w-full text-body '>
                    <Table bill={order.bill} />
                </div>
                
                <div></div>
                
                    </div>
        )
        }
      )
    }
    
    
    
    
    </>
  )
}
