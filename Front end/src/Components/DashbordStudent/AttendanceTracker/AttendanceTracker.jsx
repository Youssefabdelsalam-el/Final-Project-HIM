import React from 'react'
import { BsFillPersonXFill, BsPersonCheckFill } from 'react-icons/bs'
import { CiWarning } from 'react-icons/ci'
import { LuUsersRound } from 'react-icons/lu'
import { MdEditCalendar } from 'react-icons/md'
import Details from './Details'
import TableData from './TableData'

export default function AttendanceTracker() {
  return (
    <div className='flex flex-col gap-7'>
        <div className='profile flex items-center gap-3'>
            <div className='bg-[#EAF2FF] text-[#0057D9] p-3 rounded-full'>
                <LuUsersRound className='w-9 h-9'  />
            </div>
                    
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#0B1F4D] text-[25px] font-bold'>الحضور والغياب</h1>
                <div>
                <p>الرئيسية / <span> الحضور والغياب</span></p>
                </div>
            </div>
        </div>

        <Details/>

        <TableData/>
        
    </div>
  )
}
