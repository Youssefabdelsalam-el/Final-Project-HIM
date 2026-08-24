import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function SearchStudent() {
  return (
    <div className='relative flex items-center bg-white p-2 w-full md:w-80 lg:w-96 border border-[#7e7c7c8c] rounded-3xl'>
        <input className='w-full outline-none px-2 text-sm sm:text-base' type="text" placeholder="ابحث عن الطالب" />
        <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ' />
    </div>
  )
}
