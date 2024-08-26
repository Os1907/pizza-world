import Card from '@/app/_Components/Card/Card'
import { Items } from '@/helper/Items/Items'
import React from 'react'

export default function Dessert() {
    const {dessert}  = Items
  return (
    <>
    <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 py-3">

            {
                dessert?.map((item)=> {
                    return (
            <Card item={item} key={item.id}/>
                    )
                })
            }
        </div>
    </section>
    
    
    </>
  )
}
