'use client'
import React from 'react'
import { RootState } from '@/Redux/store';
import { useSelector } from 'react-redux'
import UseHydration from '@/Hooks/useHydration'
import { usePathname } from 'next/navigation'
import Loading from '@/app/_Components/Loading/Loading';
import AddressInfo from '@/app/_Components/address/addressInfo';
import Table from '@/app/_Components/tableCheck/table';
import { MdPlaylistAddCheckCircle } from 'react-icons/md';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { removeFromOrderList } from '@/Redux/Slices/OrderList';
import { modifyStatus } from '@/Redux/Slices/FinalOrder';
import { increaseEarnings } from '@/Redux/Slices/Earnings';
import { incrementItemCount } from '@/Redux/Slices/itemsCount';
import { Ipizza } from '@/interface/Ipizza';

const useOrders = () => useSelector((state: RootState) => state.orderList);

export default function Page() {
    const order = useOrders()
const pathname = usePathname() 
const path =pathname.slice(18) 
const dispatch = useDispatch() 
const { hydration } = UseHydration(order)
const acceptOrder = (index:number | undefined , amount:number,bill?:Ipizza[])=>{
  dispatch(modifyStatus({index,status:'Preparing '}))
  dispatch(increaseEarnings(amount))
  dispatch(removeFromOrderList(index))
  dispatch(incrementItemCount(bill))

}
const rejectOrder = (index:number | undefined )=>{
  dispatch(modifyStatus({index,status:'Rejected'}))
  dispatch(removeFromOrderList(index))
}
// console.log()
  return (
    <>

{/* {
  hydration  ? <h1 className='text-4xl text-main'>
        {pathname?.slice(21)}
    </h1> :  <Loading shape='loader'/>
} */}
 {
          order?.filter((order) => order.id === `#${pathname.slice(20)}`).map((order) => {
            return (
              <div key={order.id} className='flex justify-center  items-center flex-col text-body p-10 gap-y-3 bg-lightDark Gborder my-4 rounded-pixel2xl shadow '>
                <div className='flex flex-wrap justify-between px-4 border-b border-body gap-y-2 '>
                <AddressInfo Info={order.Info} />
                <p className='font-semibold'>
                  Time : {order?.date?.time.slice(0, 5)}
                </p>
                </div>

                <div className='w-full text-body '>
                    <Table bill={order.bill} />
                </div>

                <div className='text-main  w-full text-end '>
                  <p className='text-xl font-extrabold border-t border-double border-main inline pt-3 '>
                    {  order.totalBill[0].total } EGP

                  </p>

                </div>
                <div className='w-full flex  justify-center gap-x-3 font-semibold'>
            <p onClick={()=> rejectOrder(Number(path.slice(0,1))) } className=' px-5 py-2 hover:px-8 rounded-pixel2xl bg-body text-dark Gborder group transition-all cursor-pointer'>
              Reject Order <FaXmark className='hidden group-hover:inline transition-all '/>
            </p>
              
            <p onClick={()=> acceptOrder(Number(path.slice(0,1)), order.totalBill[0].total, order.bill ) } className=' px-5 py-2 hover:px-8 rounded-pixel2xl bg-main group transition-all cursor-pointer'>
              Accept Order <FaCheck className='hidden group-hover:inline transition-all '/>
            </p>

                </div>
                
                    </div>
        )
        }
      )
    }
    
    
    
    
    </>
  )
}
