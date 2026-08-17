import React from 'react'
import { Link } from 'react-router-dom'

export default function ActionCard({Icon,styleicon,name,int}) {
  return (
    <Link to='' className='w-full min-w-0'>
        <div className='w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors text-center'>
            <div className={styleicon}>
                 <Icon className='w-7 h-7 sm:w-10 sm:h-10' />
            </div>
   
            <h1 className='text-base sm:text-[18px] font-bold wrap-break-word'>{name}</h1>
            <p className='text-sm sm:text-[16px] font-medium text-gray-500 wrap-break-word'> {int}</p>
   
        </div>
    </Link>
  )
}
