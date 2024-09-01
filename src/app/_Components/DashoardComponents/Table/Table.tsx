import { data } from '@/helper/report/report'
import React from 'react'

const ReportTable = () => {
  return (
    <>
  
        
      <div className="overflow-x-auto relative  m-4 lg:mr-24 lg:ml-24      ">
        <table className="w-full text-sm text-left   border-body border ">
          <thead className="text-xs text-body uppercase bg-main   ">
            <tr>
              <th  className="py-3 px-6">Order Id</th>
              <th  className="py-3 px-6">Customer</th>
              <th  className="py-3 px-6">Price</th>
              <th  className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody className=' text-body uppercase '>
            
            {
                data.map((item)=> {
                   return (
                    <tr key={`${item.orderId}+${item.name}`} className=" border-t border-body  ">
              <td className="py-4 px-6">{item.orderId}</td>
              <td className="py-4 px-6">{item.name}</td>
              <td className="py-4 px-6">{item.price} EGP</td>
              <td className="py-4 px-6">{item.status}</td>
            </tr>

                   ) 
                })
            }
            
          </tbody>
        </table>
      </div>



    
    
    
    
    
    
    
    </>
  )
}

export default ReportTable