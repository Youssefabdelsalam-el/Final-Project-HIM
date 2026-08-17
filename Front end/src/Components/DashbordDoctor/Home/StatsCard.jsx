import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function StatsCard({num,name,description,Icon,namelink,styleicon}) {
  return (
    <div className='w-full  flex flex-col gap-4 bg-white rounded-2xl p-4'>
       <div className='flex items-center justify-between gap-4 w-full'>
        <div className='flex flex-col items-start gap-2'>
            <h1 className='text-[30px] font-bold'>{num}</h1>
            <p className='text-[18px] font-bold' >{name}</p>
            <p className='text-[#868686] text-sm'>{description}</p>
        </div>
         <div className={styleicon}>
            <Icon className='w-10 h-10'/>
         </div>
       </div>

       <Link to="">
            <div className='flex items-center gap-7 text-blue-600 cursor-pointer'>
                <button className='cursor-pointer'>{namelink}</button>
                <IoIosArrowBack />
            </div>
       </Link>
    </div>
  )
}
