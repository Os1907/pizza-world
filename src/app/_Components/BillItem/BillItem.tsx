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

                        <p className='text-body  font-semibold text-sm  text-start'>
                            {props.items.name}
                        </p>
                        <div className='flex items-center text-body text-sm'>
                            <BsFillPlusCircleFill className='cursor-pointer' onClick={() =>  setQuantity(quantity + 1)} />
                            <span className='mx-3 font-medium text-base' > {quantity}</span>
                            <FaCircleMinus className='cursor-pointer' onClick={() => setQuantity(quantity - 1) } />
                        </div>

                    </div>

                </div>




<span onClick={() => dispatch(removeBill(props.Index))}  className='text-body cursor-pointer'>
<svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z" fill="currentColor"></path>                            </svg>                        
</span>

                <div className='w-full mx-4 text-xs text-body text-center mb-2'>

                    <span>
                        {text}
                    </span>
                </div>
                     <div className='w-full'>
                        <form onSubmit={handleSubmit} className='bg-blury  Gborder rounded-pixel flex  '>

                            <input type="text"
                                value={value} onChange={(e) => setvalue(e.target.value)} placeholder='add comment' className=' focus:outline-0 bg-transparent  text-body font-semibold  rounded-pixel w-full px-3 py-1 text-xs placeholder:font-medium   placeholder:text-body placeholder:text-xs ' />
                            <button type="submit" className='text-body text-xs pr-3'>
                            <svg width="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">                            <path d="M21.4354 2.58198C20.9352 2.0686 20.1949 1.87734 19.5046 2.07866L3.408 6.75952C2.6797 6.96186 2.16349 7.54269 2.02443 8.28055C1.88237 9.0315 2.37858 9.98479 3.02684 10.3834L8.0599 13.4768C8.57611 13.7939 9.24238 13.7144 9.66956 13.2835L15.4329 7.4843C15.723 7.18231 16.2032 7.18231 16.4934 7.4843C16.7835 7.77623 16.7835 8.24935 16.4934 8.55134L10.72 14.3516C10.2918 14.7814 10.2118 15.4508 10.5269 15.9702L13.6022 21.0538C13.9623 21.6577 14.5826 22 15.2628 22C15.3429 22 15.4329 22 15.513 21.9899C16.2933 21.8893 16.9135 21.3558 17.1436 20.6008L21.9156 4.52479C22.1257 3.84028 21.9356 3.09537 21.4354 2.58198Z" fill="currentColor"></path>                            </svg>                        

                            </button>
                        </form>

                    </div> 
               

            </div>





        </>
    )
}
