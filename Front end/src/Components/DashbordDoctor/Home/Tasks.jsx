import React from 'react'
import { FaRegFileLines } from 'react-icons/fa6'


export default function Tasks({title,subject,Icon,num,remember}) {
  return (
    <div className='w-full flex flex-col overflow-x-auto xl:flex-row gap-3 p-3 sm:p-4 rounded-2xl shadow-xl border-l-3 border-orange-600'>
        <div className='flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-1'>
            <Icon className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 text-orange-600'/> 
    
            <div>
                <h1 className='text-lg sm:text-xl md:text-[23px] font-bold truncate'>{title}</h1>
                <p className='text-sm sm:text-base md:text-[19px] font-medium text-[#9c9a9a] truncate'>{subject}</p>
            </div>
        </div>
    
        <div className='shrink-0 text-sm sm:text-base md:text-[20px] font-bold'>
            <div className='flex items-center gap-1 sm:gap-2 whitespace-nowrap'>
                <span>{num}</span>
                <h1>{remember}</h1>
            </div>
        </div>
    </div>
  )
}
