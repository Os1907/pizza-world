'use client';
import UseInput from '@/Hooks/UseInput'
import { Ipizza } from '@/interface/Ipizza';
import {  modiQuantity,  removeBill } from '@/Redux/Slices/BillOrder';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { FaCircleMinus } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md';
import { TbSend } from 'react-icons/tb'
import { useDispatch } from 'react-redux';

interface Iprop {
    items: Ipizza,
    Index: number
}
export default function BillItem(props: Iprop) {

    const {text, value, setvalue, handleSubmit } = UseInput()
    const [quantity, setQuantity] = useState(props.items.quantity ? props.items.quantity : 1);

    const dispatch = useDispatch()

    useEffect(() => {
        const afterAdded = {
            ...props.items,
            quantity: quantity,
            comment: text,
            price: props.items.price * quantity,
            index:props.Index
        }
        if (quantity === 0) {
            dispatch(removeBill(props.Index))
        } else{

            dispatch(modiQuantity(afterAdded))
        }

    }, [text , quantity])

    return (
        <>

            <div className='flex items-center justify-between flex-wrap border-t border-white pt-2'>

                <div className='flex items-center justify-center '>

                    <Image src={props.items.img} width={60} height={60} alt="pizza" />

                    <div>

                        <p className='text-text  font-semibold text-sm  text-start'>
                            {props.items.name}
                        </p>
                        <div className='flex items-center text-text text-sm'>
                            <BsFillPlusCircleFill className='cursor-pointer' onClick={() =>  setQuantity(quantity + 1)} />
                            <span className='mx-3 font-medium text-base' > {quantity}</span>
                            <FaCircleMinus className='cursor-pointer' onClick={() => setQuantity(quantity - 1) } />
                        </div>

                    </div>

                </div>





                <MdDelete onClick={() => dispatch(removeBill(props.Index))} className='text-text cursor-pointer' />

                <div className='w-full mx-4 text-xs text-text text-center mb-2'>

                    <span>
                        {text}
                    </span>
                </div>
                     <div className='w-full'>
                        <form onSubmit={handleSubmit} className='bg-body border-text border rounded-pixel flex  '>

                            <input type="text"
                                value={value} onChange={(e) => setvalue(e.target.value)} placeholder='add comment' className=' focus:outline-0 bg-transparent  text-text font-semibold  rounded-pixel w-full px-3 py-1 text-xs placeholder:font-semibold placeholder:uppercase  placeholder:text-text placeholder:text-xs ' />
                            <button type="submit" className='text-text text-xs pr-3'><TbSend /></button>
                        </form>

                    </div> 
               

            </div>





        </>
    )
}
