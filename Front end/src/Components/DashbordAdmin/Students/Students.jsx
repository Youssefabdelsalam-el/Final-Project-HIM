import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowBack, } from 'react-icons/io'
import { Link } from 'react-router-dom'
import SearchStudent from './SearchStudent'
import Filter from './Filter'
import TableStudent from './TableStudent'
import Upgradebutton from './Upgradebutton'
import ImportStudentsButton from './ImportStudentsButton'
import CreateStudent from './CreateStudent'

export default function Students() {
  return (
    <div className='flex flex-col gap-5 sm:gap-6 w-full min-w-0'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 w-full'>
            {/* العنوان ولينك الانتقال */}
            <div className='flex flex-col gap-3 sm:gap-4 min-w-0'>
                <h1 className='text-xl sm:text-2xl md:text-[25px] font-bold'>الطلاب</h1>
                <div className='flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500'>
                    <AiOutlineHome className='text-blue-600 w-5 h-5' />
                    <IoIosArrowBack />
                    <Link className='hover:text-blue-500' to="/Dashbord Admin">الرئيسة</Link>
                    <IoIosArrowBack />
                    <p>الطلاب</p>
                </div>
            </div>
            {/* الاجراءات */}
            <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto'>
                <Upgradebutton/>
                <ImportStudentsButton/>
                <CreateStudent/>
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-5 w-full'>
            <SearchStudent/>
             <Filter name="التخصص" Opt1="تخصص عام" Opt2="ادارة اعمال" Opt3="محاسبة ومراجعة" Opt4="نطم ومعلومات الأعمال" />
             <Filter name="الفرقة" Opt1="الفرقة الاولي" Opt2="الفرقة الثانية" Opt3="الفرقة الثالثة" Opt4="الفرقة الرابعة" />
        </div>
        <TableStudent/>
    </div>
  )
}
