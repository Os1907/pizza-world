import React from 'react'

interface Iprop{
  shape: string
}
export default function Loading({shape}: Iprop) {

  return (
    <div className='min-h-full flex items-center w-full justify-center '>
        <span className={ `${shape}` }></span>
    </div>
  )
}
