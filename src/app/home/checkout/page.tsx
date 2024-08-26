'use client'
import React from 'react'
import AddressInfo from '@/app/_Components/address/addressInfo';
import FormAddress from '@/app/_Components/address/formAddress';
import TotalPrice from '@/app/_Components/TotalPrice/totalPrice'
import { clearBill } from '@/Redux/Slices/BillOrder';
import { addFinalOrder } from '@/Redux/Slices/finalOrder';
import { clearTotalBill } from '@/Redux/Slices/totalBill';
import { RootState } from '@/Redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Table from '@/app/_Components/tableCheck/table';

const useBill = () => useSelector((state: RootState) => state.Bill);
const useInfo = () => useSelector((state: RootState) => state.UserInfo);
const useTotalBill = () => useSelector((state: RootState) => state.totalBill);
const useFinalOrder = () => useSelector((state: RootState) => state.finalOrder);

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
  return () => {
    dispatch(clearBill());
    dispatch(clearTotalBill());
    dispatch(addFinalOrder({ bill, Info, totalBill, ...orderInfo }))
  }
}


export default function Page() {
  const info = useInfo();
  const bill = useBill();
  const checkOut = useCheckOutAction();
  return (
    <>
      <div className=' mx-4 lg:my-10  rounded-pixel py-2 px-4 lg:px-8 lg:mx-auto bg-white '>


        {
          info?.fullName && bill?.length != 0 ? <>
            <h3 className='text-start lg:text-center text-text  font-extrabold text-3xl  lg:text-5xl mt-4 mb-3'>
              <span className='text-main text-4xl lg:text-6xl'>|</span>  Order Details
            </h3>
            <div className='text-text'>

            <AddressInfo Info={info} />
            </div>

            <div className='flex flex-col gap-y-3  bg-body rounded-pixel p-3 text-text'>
              <Table bill={bill} />
            </div>

            <div className='my-3'>
              <TotalPrice items={bill} />
            </div>

            <div className='my-4 flex justify-center '>
              <Link href="/home/checkout/status" >
                <button onClick={() => checkOut()} className='text-text border-text border font-bold    w-52 hover:w-64 bg-body rounded-pixel px-3 py-1 my-3  transition-all hover:px-8 hover:shadow-xl'> Complete Order <IoCheckmarkDoneCircle className='inline' /></button>
              </Link>
            </div>
            
          </> : (
            <FormAddress />
          )
        }


      </div>
    </>
  )
}
