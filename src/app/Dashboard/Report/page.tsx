import ReportTable from '@/app/_Components/DashoardComponents/Table/Table'
import React from 'react'

const page = () => {
  return (
    <>
    <div className=' bg-bg min-h-screen '>
    <h3 className='text-center text-body  uppercase font-extrabold my-5 text-5xl '>
             Orders Report
        </h3>
<ReportTable/>
    </div>
    
    
    
    </>
  )
}

export default page

