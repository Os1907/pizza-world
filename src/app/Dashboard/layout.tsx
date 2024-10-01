import React, { ReactNode } from 'react'
import Navbar from '../_Components/Navbar/Navbar'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
interface IlayOut {
    children: React.ReactNode
}
export default function layout({ children }: IlayOut) {
    const cookieStore = cookies()
    const token = cookieStore?.get('token')?.value
    if (!token) {
      redirect('/login')
    }
    
    return (
        <>

            <section className='bg-dark min-h-screen '>
                <div className="grid grid-cols-12 ">

                    <div className=" lg:col-span-1 col-span-12  ">
                        <Navbar />
                        
                    </div>

                    <div className='col-span-12 lg:col-span-11  bg-orangeSvg'>
                        {children}
                    </div>

                </div>

            </section>







        </>
    )
}
