import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CreateDoctor from './CreateDoctor'
import CardCorses from './CardCorses'
import { FaBookOpenReader } from 'react-icons/fa6'

export default function Courses() {
  return (
    <div className='flex flex-col gap-5 sm:gap-6 w-full min-w-0'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 w-full'>
            {/* العنوان ولينك الانتقال */}
            <div className='flex flex-col gap-3 sm:gap-4 min-w-0'>
                 <div className='flex items-center gap-3'>
                        <div className='text-blue-600 bg-blue-100 p-3 rounded-4xl'>
                        <FaBookOpenReader className='w-7 h-7' />
                        </div>
                        <h1 className='text-xl sm:text-2xl md:text-[25px] font-bold'>المواد الدراسية</h1>
                    </div>
                <div className='flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500'>
                    <AiOutlineHome className='text-blue-600 w-5 h-5' />
                    <IoIosArrowBack />
                    <Link className='hover:text-blue-500' to="/Dashbord Admin">الرئيسة</Link>
                    <IoIosArrowBack />
                    <p>المواد</p>
                </div>
            </div>

            {/* انشاء الدكتور */}

            <CreateDoctor/>
        </div>
         {/* كاردات المواد */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch'>
            <CardCorses/>
            <CardCorses/>
            <CardCorses/>
            <CardCorses/>
            <CardCorses/>
            <CardCorses/>
         </div>
    </div>
  )
}
