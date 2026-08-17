import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Cards({number,name,Icon,styleicon,button}) {
  return (
    <div className='w-full  flex flex-col gap-4 bg-white rounded-2xl p-4'>
        <div className='flex items-center justify-between gap-4 w-full'>
            <div className='flex flex-col items-start gap-2'>
                <h1 className='text-[30px] font-bold'>{number}</h1>
                <p className='text-[15px] font-bold'>{name}</p>
            </div>

            <div className={styleicon} >
                <Icon  className='w-10 h-10' />
            </div>

        </div>

        <Link to="">
            <div className='flex items-center gap-7 text-blue-600 cursor-pointer'>
                <button className='cursor-pointer'>{button}</button>
                <IoIosArrowBack />
            </div>
        </Link>
    </div>
  )
}
