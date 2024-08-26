'use client'
import React, { useEffect, useState } from 'react'

export default function UseHydration(Item:any) {
    const [hydration, setHydration] = useState(false)
    useEffect(() => {
        if (Item) {
            setHydration(true)
        }
    },[Item])
  return {
    hydration
  }
}

