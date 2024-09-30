'use client'
import React from 'react'
import AddressInfo from '@/app/_Components/address/addressInfo';
import FormAddress from '@/app/_Components/address/formAddress';
import TotalPrice from '@/app/_Components/TotalPrice/totalPrice'
import { clearBill } from '@/Redux/Slices/BillOrder';
import { addFinalOrder } from '@/Redux/Slices/FinalOrder';
import { clearTotalBill } from '@/Redux/Slices/totalBill';
import Link from 'next/link';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import Table from '@/app/_Components/tableCheck/table';
import { useBill, useInfo, useTotalBill } from '@/Hooks/useSelectors';
import { addToOrderList } from '@/Redux/Slices/OrderList';
import { useDate } from '@/Hooks/useDate';
import UseHydration from '@/Hooks/useHydration';
import Loading from '../_Components/Loading/Loading';
import Linebg from '../_Components/linebg/linebg';

const useOrderInfo = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return {
    status: "Pending",
    id: `#${hours}${minutes}${seconds}ODR${Math.floor(Math.random() * 1000)}`,
  };
};

const useCheckOutAction = () => {
  const dispatch = useDispatch();
  const bill = useBill();
  const Info = useInfo();
  const totalBill = useTotalBill();
  const orderInfo = useOrderInfo();
  const date = useDate()
  return () => {
    dispatch(clearBill());
    dispatch(clearTotalBill());
    dispatch(addFinalOrder({ bill, Info, totalBill, ...orderInfo }))
    dispatch(addToOrderList({ bill, Info, totalBill, ...orderInfo, date }))
  }
}


export default function Page() {
  const info = useInfo();
  const bill = useBill();
  const checkOut = useCheckOutAction();
  const { hydration } = UseHydration(info)
  return (
    <>

      {
        hydration ? <div className='py-10 relative bg-gradient-to-t to-mainRed from-main_orange min-h-screen '>
          {/* <div className='text-main'>
            <Linebg/>
          </div> */}
            <Link href={"/home"}>
          <div className='bg-gradient-to-t to-mainRed from-main_orange  text-body flex  items-center relative w-32 px-2 py-2  rounded-full -translate-x-1/2 left-1/2 gap-x-1 group'>
            <svg width="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="currentColor"></path>                            </svg>                        
            <span className='inline text-xl '>
                Home
            </span>
          </div>
            </Link>
          <div className=' mx-4  lg:mx-auto lg:w-1/2  rounded-pixel py-2 px-4 lg:px-8  relative  z-1 bg-main_orange  mBlur Gborder mt-16'>
            {
              info?.fullName && bill?.length != 0 ? <div className=''>
                <h3 className='text-start lg:text-center text-body  font-extrabold text-3xl  lg:text-5xl mt-4 mb-3'>
                  <span className='text-4xl lg:text-6xl'>|</span>  Order Details
                </h3>
                <div className='text-body'>

                  <AddressInfo Info={info} />
                </div>

                <div className='flex flex-col gap-y-3  bg-blury  mBlur Gborder rounded-pixel p-3 text-body'>
                  <Table bill={bill} />
                </div>

                <div className='my-3 '>
                  <TotalPrice items={bill} />
                </div>

                <div className='my-4 flex justify-center '>
                  <Link href="/checkout/status" >
                    <button onClick={() => checkOut()} className='text-body  font-semibold    w-52 hover:w-64 bg-blury  mBlur Gborder  rounded-pixel px-3 py-1 my-3  transition-all hover:px-8 '> Complete Order <IoCheckmarkDoneCircle className='inline' /></button>
                  </Link>
                </div>

              </div> : (
                <div className=''>

                  <FormAddress />
                </div>
              )
            }


          </div>
        </div> : <div className='min-h-screen flex items-center bg-gradient-to-t to-mainRed from-main_orange'><Loading shape="box" /></div>
      }

    </>
  )
}
