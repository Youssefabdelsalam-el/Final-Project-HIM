import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GoUpload } from 'react-icons/go'
import { IoIosArrowBack, IoIosCheckbox } from 'react-icons/io'
import { IoArrowUpSharp } from 'react-icons/io5'
import { MdOutlineFileUpload, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import SearchStudent from './SearchStudent'
import Filter from './Filter'
import TableStudent from './TableStudent'
import { FiSearch } from 'react-icons/fi'
import Upgradebutton from './Upgradebutton'
import ImportStudentsButton from './ImportStudentsButton'
import CreateStudent from './CreateStudent'

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

                <Upgradebutton/>

                <ImportStudentsButton/>

                <CreateStudent/>
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
