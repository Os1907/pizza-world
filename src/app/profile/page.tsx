'use client'
import { IfinalOrder } from '@/interface/FinalOrder';
import { RootState } from '@/Redux/store';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../_Components/Navbar/Navbar';
import Table from '../_Components/tableCheck/table';
import { IoMdNavigate } from 'react-icons/io';
import { PiArrowFatUpFill } from 'react-icons/pi';

const useOrder = () => useSelector((state: RootState) => state.finalOrder);
const useUserInfor = () => useSelector((state: RootState) => state.UserInfo);
export default function Profile() {
  const order = useOrder()
  const userInformation = useUserInfor()

  const [latest, setLatest] = useState<IfinalOrder[]>()
  const [userName, setUserName] = useState<string | undefined>('');
  // To handel hydration Problem
  useEffect(() => {
    if (userInformation) {
      setUserName(userInformation.fullName?.toUpperCase());
    }
  }, [userInformation]);

  useEffect(() => {
    if (order.find((item) => item.status === "Pending")) {
      setLatest(order);
    } else {
      setLatest([]);
    }
  }, [order]);



  return (
    <>
      <div>
        <Navbar />
      </div>
      <section>
        <div className=' mx-4 lg:mx-20 lg:my-10  rounded-pixel py-2 px-4 lg:px-8   flex flex-col items-center justify-center  '>
          <Image src={`https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=${userName}`} width={100} height={100} alt="profile/icon" className='rounded-pixel2xl' />
          <p className='text-start lg:text-center text-text  font-extrabold text-3xl  lg:text-5xl mt-4 mb-3'>
            {userName}
          </p>
          <div className='w-auto  py-2 px-5  mx-auto rounded-pixel bg-white   font-semibold  flex  gap-x-5 '>
            <p className=' px-5 py-1 hover:px-8 rounded-pixel border-body border bg-text text-body cursor-pointer hover:bg-body hover:text-text transition-all'>
              latest Orders
            </p>
            <p className=' px-5 py-1 hover:px-8 rounded-pixel border-text border bg-body cursor-pointer text-text hover:bg-text hover:text-body transition-all'>
              Completed Orders
            </p>
          </div>
          <div className="grid grid-cols-4  w-full px-40 gap-x-4">

            {
              latest?.map(item => {
                return (
                  <div key={item?.id} className={item?.status === "Pending" ? "col-span-4 lg:col-span-2 flex flex-col items-center  bg-white  my-3 py-3 px-6 rounded-pixel text-text  gap-y-3 border-main border relative  overflow-hidden" : " col-span-4 lg:col-span-2 flex flex-col items-center  bg-white  my-3 py-3 px-6 rounded-pixel text-text  gap-y-3 relative  overflow-hidden"}>
                    <div className="flex justify-center mt-2 items-start rounded-b-pixel2xl transition-all bg-main animate-pulse absolute -top-2 right-0 h-10 w-20">
                      <p className='text-body  font-semibold text-xs px-1 pt-2'>
                        {item?.status}
                      </p>

                    </div>
                   
                    <p className='text-sm font-bold '>
                      {item?.id}
                    </p>

                    <div className='text-sm'>
                      <details className="group">
                        <summary className="flex justify-between flex-col items-center  font-medium cursor-pointer list-none">
                          <div className='flex font-bold text-lg '>

                            <p> See Order Items</p>
                            <span className="transition group-open:rotate-180 mx-5 mt-1">
                            <PiArrowFatUpFill />
                            </span>
                          </div>
                          <div className="transition hidden  group-open:block ">
                            <Table key={item?.id} bill={item?.bill} />
                          </div>
                        </summary>

                      </details>

                    </div>

                    <p className="border-dashed border-t-2  border-main pt-3 font-bold uppercase">
                      total :  {item.totalBill[0]?.total} EGP
                    </p>

                  </div>

                )

              })
            }


          </div>
        </div>
      </section>

    </>
  )
}
