import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import UploadGradesButton from './UploadGradesButton'
import CardGrades from './CardGrades'
import Filter from './Filter'
import { FaChartSimple } from 'react-icons/fa6'

export default function Grades() {
  return (
    <div className=' w-full flex flex-col gap-7'>
        <div className='flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
            {/* العنوان ولينك الانتقال */}
            <div className='flex flex-col gap-3 sm:gap-4 min-w-0'>
                 <div className='flex items-center gap-3'>
                        <div className='text-blue-600 bg-blue-100 p-3 rounded-4xl'>
                        <FaChartSimple className='w-7 h-7' />
                        </div>
                        <h1 className='text-xl sm:text-2xl md:text-[25px] font-bold'>الدرجات</h1>
                    </div>
                 <p className='text-sm sm:text-base text-gray-500'>عرض وادارة جميع نتائج الامتحانات المرفوعة علي المنصة</p>
                <div className='flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500'>
                    <AiOutlineHome className='text-blue-600 w-5 h-5' />
                    <IoIosArrowBack />
                    <Link className='hover:text-blue-500' to="/Dashbord Admin">الرئيسة</Link>
                    <IoIosArrowBack />
                    <p> الدرجات</p>
                </div>
            </div>

            {/* رفع النتيجة*/}
            <div className='w-full lg:w-auto'>
                <UploadGradesButton/>
            </div>
        </div>

        <Filter/>
        {/* الكاردات */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <CardGrades/>
            <CardGrades/>
            <CardGrades/>
            <CardGrades/>
            <CardGrades/>
            <CardGrades/>
            <CardGrades/>
            <CardGrades/>
        </div>
    </div>   

  )
}
