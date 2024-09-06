'use client'
import { IfinalOrder } from '@/interface/iFinalOrder';
import { RootState } from '@/Redux/store';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../_Components/Navbar/Navbar';
import Table from '../_Components/tableCheck/table';
import { IoMdNavigate } from 'react-icons/io';
import { PiArrowFatUpFill } from 'react-icons/pi';
import UseHydration from '@/Hooks/useHydration';
import Loading from '../_Components/Loading/Loading';
import { Iuser } from '@/interface/Iuser';

const useOrder = () => useSelector((state: RootState) => state.finalOrder);
const useUserInfor = () => useSelector((state: RootState) => state.UserInfo);
export default function Profile() {
  const order = useOrder()
  const userInformation = useUserInfor()

  const [latest, setLatest] = useState<IfinalOrder[]>()
  const [userName, setUserName] = useState<Iuser | undefined>();
  // const [orderUser, setOrderUser] = useState<string | undefined>('');
  // To handel hydration Problem
  useEffect(() => {
    if (userInformation) {
      setUserName(userInformation);
    }
    // setLatest(order);
  }, [userInformation]);
  // console.log(    )
  
  // useEffect(() => {
  //   if (order.find((item) => item.status === "Pending")) {
  //     setLatest(order);
  //   } else {
  //     setLatest([]);
  //   }
  // }, [order]);

const { hydration } = UseHydration(order)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section>
        {
          hydration ? <div className='min-h-screen   bg-gradient-to-t to-mainRed from-main_orange '>

           <div className=' mx-4 lg:mx-20 lg:py-10  rounded-pixel py-2 px-4 lg:px-8   flex flex-col items-center justify-center '>
            <div className='flex items-center bg-blury mBlur Gborder gap-x-3 py-4 px-6 rounded-full  '>

          <Image src={`https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=${userInformation?.fullName}`} width={65} height={65} alt="profile/icon" className='rounded-pixel2xl' />
          <div className='flex flex-col justify-center items-start'>

          <p className='text-start lg:text-center text-body  font-extrabold text-md  lg:text-xl'>
           {userInformation?.fullName}
          </p>
          <p className='text-start lg:text-center text-body  font-semibold text-xs  '>
            {userInformation?.address}
          </p>
          <p className='text-start lg:text-center text-body  font-semibold text-xs  '>
            {userInformation?.phoneNumber}
          </p>
          </div>
            </div>
          <div className='w-auto  py-2 px-5  mx-auto rounded-pixel bg-blury  mBlur Gborder   font-semibold  flex  gap-x-5 mt-3 '>
            <p className=' px-5 py-1 rounded-pixel bg-blury  mBlur  text-body '>
              latest Orders
            </p>
           
          </div>
          <div className="grid grid-cols-4  w-full lg:px-20  xl:px-40 gap-x-4 ">

            {
              order?.filter((order) => order.Info.fullName === userInformation.fullName).map(item => {
                return (
                  <div key={item?.id} className={item?.status === "Pending" ? "col-span-4  lg:col-span-2 flex flex-col items-center  bg-blury mBlur Gbroder  my-3 py-3 px-6 rounded-pixel text-body  gap-y-3 border-main border relative  overflow-hidden" : " col-span-4 lg:col-span-2 flex flex-col items-center  bg-blury mBlur Gbroder  my-3 py-3 px-6 rounded-pixel text-body border border-text  gap-y-3 relative  overflow-hidden"}>
                    <div className={ item?.status != "Pending" ? "flex justify-center mt-2 items-start rounded-b-pixel2xl transition-all bg-text absolute -top-2 right-0 h-10 w-20":"flex justify-center mt-2 items-start rounded-b-pixel2xl transition-all bg-main animate-pulse absolute -top-2 right-0 h-10 w-20"}>
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
                          <div className='flex font-bold text-sm lg:text-lg '>

                            <p> See Order Items</p>
                            <span className="transition group-open:rotate-180 mx-2 mt-1 ">
                            <svg width="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0066 13.165L12.3607 13.1634C13.7652 13.1513 15.0183 13.0666 15.8124 12.9206C15.8267 12.9206 16.6143 12.7613 16.8764 12.6599C17.2554 12.5006 17.577 12.2126 17.7808 11.8515C17.9262 11.5624 18 11.2592 18 10.9417C17.9884 10.6922 17.8629 10.2806 17.7576 9.98692L17.664 9.74283C17.0218 8.12612 14.9234 5.03561 13.6402 3.85199L13.5505 3.76473L13.1302 3.37527C12.8085 3.12982 12.4153 3 11.9923 3C11.6134 3 11.2344 3.11563 10.9282 3.3469C10.829 3.41614 10.7017 3.52766 10.5942 3.62693L10.1974 4.006C8.87572 5.31046 7.02183 8.13485 6.40756 9.59883C6.39435 9.59883 6.01432 10.5086 6 10.9417V10.9995C6 11.6639 6.37892 12.2846 6.99137 12.6021C7.1588 12.6888 7.48678 12.772 7.77483 12.8352L8.31871 12.949C9.19332 13.0788 10.535 13.165 12.0066 13.165ZM10.4817 19.4967C10.4817 20.3269 11.1613 21 11.9996 21C12.8378 21 13.5175 20.3269 13.5175 19.4967L13.1903 15.7975C13.1903 15.1463 12.6583 14.6183 11.9996 14.6183C11.3419 14.6183 10.8088 15.1463 10.8088 15.7975L10.4817 19.4967Z" fill="currentColor"></path>                            </svg>                        
                            </span>
                          </div>
                          <div className="transition hidden  group-open:block ">
                            <Table key={item?.id} bill={item?.bill} />
                          </div>
                        </summary>

                      </details>

                    </div>

                    <p className=" border-t-2  border-body pt-3 font-bold uppercase text-xs lg:text-base">
                      total :  {item.totalBill[0]?.total} EGP
                    </p>

                  </div>

                )

              }).reverse()
            }


          </div>
        </div> </div>: <div className='min-h-screen flex items-center bg-gradient-to-t to-mainRed from-main_orange'>
              <Loading shape={'box'}/>
        </div>
        }
        
      </section>

    </>
  )
}
