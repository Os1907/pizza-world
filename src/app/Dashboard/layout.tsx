import React, { ReactNode } from 'react'
import Navbar from '../_Components/Navbar/Navbar'
interface IlayOut {
    children: React.ReactNode
}
export default function layout({ children }: IlayOut) {
    return (
        <>

            <section className='bg-dark min-h-screen '>
                <div className="grid grid-cols-12 ">

                    <div className="col-span-6 lg:col-span-1  ">
                        <div className="bg-lightDark border-r border-zinc-800  min-h-full w-24">

                        <Navbar />
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-11 py-3'>
                        {children}
                    </div>

                </div>

            </section>







        </>
    )
}
