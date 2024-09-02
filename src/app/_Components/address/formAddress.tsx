'use client'
import UseInput from '@/Hooks/UseInput'
import React, { FormEvent } from 'react'
import { TbEditCircle, TbSend } from 'react-icons/tb'
import TotalPrice from '../TotalPrice/totalPrice'
import { useDispatch } from 'react-redux'
import { addInfo } from '@/Redux/Slices/UserInfo'

export default function FormAddress() {
const dispatch = useDispatch()
    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const target = e.target as typeof e.target & {
            cName: { value: string };
            cNumber: { value: string };
            cAddress: { value: string };
        };
        const formData = {
            fullName: target.cName.value,
            phoneNumber: target.cNumber.value,
            address: target.cAddress.value,
        };
    
        dispatch(addInfo(formData))
    }
    return (
        <>
                      <div className='mt-10  rounded-pixel2xl   '>
                <h3 className='text-center text-body font-extrabold  text-5xl  '>
                      Please   Complete  Information
                </h3>
                <div className='my-3 flex flex-col items-center mBlur borderGlass w-full  mx-auto rounded-pixel p-4'>

                    <form onSubmit={submitForm} className='flex justify-start items-center w-full  flex-wrap bg-transparent'>

                        <label htmlFor="cName" className='text-body font-bold      px-3 py-1 rounded-pixel '>
                            Full name
                        </label>
                        <input id='cName' type="text" className='bg-blury mBlur Gborder rounded-pixel text-lg font-semibold text-bodypx-3 py-1 focus:outline-0  w-full  active:bg-transparent' />
                        
                        
                        <label htmlFor="cNumber" className='text-body font-bold      px-3 py-1 rounded-pixel '>
                            Phone number
                        </label>
                        <input id='cNumber' type="text" className='bg-blury mBlur Gborder rounded-pixel text-lg font-semibold text-bodypx-3 py-1 focus:outline-0  w-full ' />
                        <label htmlFor="cAddress" className='text-body font-bold      px-3 py-1 rounded-pixel '>
                        Address
                        </label>
                        <input id='cAddress' type="text" className='bg-blury mBlur Gborder rounded-pixel text-lg font-semibold text-bodypx-3 py-1 focus:outline-0  w-full ' />
                       
                    <button type="submit" className='text-body g-blury mBlur Gborder    w-52 mx-auto  rounded-pixel  py-1 my-3 text-sm '> Save Information <TbSend  className='inline'/></button>
                    </form>
                </div>

            </div>


        </>
    )
}
