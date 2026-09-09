import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CreateTable from './CreateTable'
import CardTable from './CardTable'
import FilterTapleClass from './FilterTapleClass'
import { IoCalendarSharp } from 'react-icons/io5'

export default function ClassSchedules() {
  return (
    <div className=' w-full flex flex-col gap-7'>
        <div className='flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
            {/* العنوان ولينك الانتقال */}
            <div className='flex flex-col gap-3 sm:gap-4 min-w-0'>
                 <div className='flex items-center gap-3'>
                        <div className='text-blue-600 bg-blue-100 p-3 rounded-4xl'>
                        <IoCalendarSharp className='w-7 h-7' />
                        </div>
                        <h1 className='text-xl sm:text-2xl md:text-[25px] font-bold'>الجدول الدراسي</h1>
                    </div>
                <div className='flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500'>
                    <AiOutlineHome className='text-blue-600 w-5 h-5' />
                    <IoIosArrowBack />
                    <Link className='hover:text-blue-500' to="/Dashbord Admin">الرئيسة</Link>
                    <IoIosArrowBack />
                    <p>الجدول الدراسي</p>
                </div>
            </div>

            {/* انشاء الجدول */}
            <div className='w-full lg:w-auto'>
                <CreateTable/>
            </div>
        </div>
        <div className='filter-header grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
            <FilterTapleClass title="السنه الدراسية" option1="2026/2027"/>
            <FilterTapleClass title="الترم" option1="الترم الاول" option2="الترم الثاني"/>
            <FilterTapleClass title="الفرقة" option1="الفرقة الولى" option2="الفرقة الثانية" option3="الفرقة الثالثة" option4="الفرقة الرابعة" />
            <FilterTapleClass title="التخصص" option1="تخصص عام" option2=" نظم ومعلومات الاعمال" option3="ادارة الاعمال" option4=" المحاسبة والمراجعة" />
            <FilterTapleClass title="الجروب" option1="جروب A" option2="جروب B" option3="جروب C" option4="جروب D" />
        </div>
        <div className='grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <CardTable/>
            <CardTable/>
        </div>
    </div>
  )
}
