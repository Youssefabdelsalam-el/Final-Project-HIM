import React from 'react'
import { LuBookOpenText } from 'react-icons/lu'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import AttendanceChart from "./AttendanceChart";

export default function CardDetail({title , number , about , linke , Icon , titlelink}) {
  return (
    <div className=' bg-white rounded-2xl p-6 flex justify-between items-center w-full h-50'>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-[18px] font-bold'>{title}</h1>
            <h2 className='text-[24px] font-bold'>{number}</h2>
            <p className='text-[15px] text-[#817d7d] '>{about}</p>
            <Link to={linke}><button className='flex items-center gap-2 text-[#2563EB] cursor-pointer'><MdKeyboardArrowRight className='w-6 h-6' />{titlelink}</button></Link>
        </div>
        {title === "نسبه الحضور" ? (
    <AttendanceChart />
) : (
    <div className='bg-[#DBEAFE] p-5 rounded-full'>
        <Icon className='w-8 h-8 md:w-10 md:h-10 text-[#3B82F6]' />
    </div>
)}
    </div>
  )
}