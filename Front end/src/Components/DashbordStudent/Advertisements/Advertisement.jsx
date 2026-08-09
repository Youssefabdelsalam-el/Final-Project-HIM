import React from 'react'
import { FcAdvertising } from 'react-icons/fc'
import Card from './Card'


export default function Advertisement() {
  return (
    <div className='flex flex-col gap-7'>
        <div className='profile flex items-center gap-3'>
            <div className='bg-[#EAF2FF] text-[#0B1F4D] p-3 rounded-full'>
                <FcAdvertising className='w-9 h-9'  />
            </div>
            
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#0B1F4D] text-[25px] font-bold'>الإعلانات</h1>
                <div>
                <p>الرئيسية / <span> الإعلانات</span></p>
                </div>
            </div>
        </div>
        <Card/>
        <Card/>
    </div>
  )
}
