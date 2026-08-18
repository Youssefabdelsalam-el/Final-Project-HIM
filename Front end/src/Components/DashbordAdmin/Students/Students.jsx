import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GoUpload } from 'react-icons/go'
import { IoIosArrowBack } from 'react-icons/io'
import { IoArrowUpSharp } from 'react-icons/io5'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SearchStudent from './SearchStudent'
import Filter from './Filter'
import TableStudent from './TableStudent'

export default function Students() {
  return (
    <div className='flex flex-col gap-6'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 w-full'>
            {/* العنوان ولينك الانتقال */}
            <div className='flex flex-col gap-4'>
                <h1 className='text-[25px] font-bold'>الطلاب</h1>
                <div className='flex items-center gap-4 text-gray-500'>
                    <AiOutlineHome className='text-blue-600 w-5 h-5' />
                    <IoIosArrowBack />
                    <Link className='hover:text-blue-500' to="/Dashbord Admin">الرئيسة</Link>
                    <IoIosArrowBack />
                    <p>الطلاب</p>
                </div>
            </div>
            {/* الاجراءات */}
            <div className='flex items-center gap-3'>

                <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white font-bold'>
                    <IoArrowUpSharp className='w-5 h-5 text-blue-600 group-hover:text-white' />
                     ترقية الطلاب
                </button>

                <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white font-bold'>
                    <GoUpload className='w-5 h-5 text-blue-600 group-hover:text-white' />
                 استيراد الطلاب
                </button>

                <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl  cursor-pointer bg-blue-600 text-white hover:bg-white hover:text-black font-bold '>
                    <GoUpload className='w-5 h-5 text-white group-hover:text-blue-600 ' />
                 انشاء طالب
                </button>
            </div>
        </div>

        <div className=' flex items-center  gap-5'>
            <SearchStudent/>
             <Filter name="التخصص" Opt1="تخصص عام" Opt2="ادارة اعمال" Opt3="محاسبة ومراجعة" Opt4="نطم ومعلومات الأعمال" />
             <Filter name="الفرقة" Opt1="الفرقة الاولي" Opt2="الفرقة الثانية" Opt3="الفرقة الثالثة" Opt4="الفرقة الرابعة" />
        </div>
        <TableStudent/>
    </div>
  )
}
