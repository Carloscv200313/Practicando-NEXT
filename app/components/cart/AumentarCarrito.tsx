"use client"
import React, { useState } from 'react'

export const AumentarCarrito = () => {
    const [contador, setcontado] = useState(0);
    return (
        <div className='flex flex-col items-center justify-center'>
            <span className='text-7xl font-bold'>{contador} </span>
            <div>
                <button onClick={()=>{setcontado(contador+1)}} className='bg-red-500 rounded-xl p-4 m-3 font-mono font-semibold text-2xl'>+1</button>
                <button onClick={()=>{setcontado(contador-1)}} className='bg-blue-900 rounded-xl p-4 m-3 font-mono font-semibold text-2xl'>-1</button>
            </div>
        </div>
    )
}
