import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import Select from '../Select'
import TableTests from './TableTests'

export default function Tests() {
  return (
    <div className='flex flex-col gap-8  '>
    
        <div className='profile flex items-center gap-3'>
            <div className='bg-[#EAF2FF] text-[#0057D9] p-3 rounded-full'>
                <IoCalendarOutline className='w-9 h-9'  />
            </div>
                 
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#0B1F4D] text-[25px] font-bold'>الأختبار</h1>
                <div>
                    <p>الرئيسية / <span> الاختبار</span></p>
                </div>
            </div>
        </div>

        <Select/>

        <TableTests/>
    </div>
  )
}
