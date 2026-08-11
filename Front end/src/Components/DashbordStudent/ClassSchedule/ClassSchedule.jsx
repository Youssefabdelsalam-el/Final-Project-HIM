import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import Selecter from './Selecter'
import { LuPrinter } from 'react-icons/lu'
import Timetable from './Timetable'

export default function ClassSchedule() {
  return (
    <div className='flex flex-col gap-5'>

    <div className='profile flex items-center gap-3'>
        <div className='bg-[#EAF2FF] text-[#0057D9] p-3 rounded-full'>
            <IoCalendarOutline className='w-9 h-9'  />
        </div>
             
        <div className='flex flex-col gap-2'>
            <h1 className='text-[#0B1F4D] text-[25px] font-bold'>الجدول الدراسي</h1>
            <div>
                <p>الرئيسية / <span> الجدول الدراسي</span></p>
            </div>
        </div>
    </div>
        
        <div className='flex items-center gap-5 justify-center'>
            <Selecter title="اختر التخصص" optiontitle="تخصص" option1="تخصص عام" option2="نظم ومعلومات الاعمال" option3="المحاسبه والمراجعة" option4="ادارة اعمال"/>
            <Selecter title="اختر الفرقة" optiontitle="الفرقة" option1="الاولي" option2="الثانية" option3="الثالثة" option4="الرابعة"/>
            <Selecter title="اختر الجروب" optiontitle="الجروب" option1="الاول" option2="الثاني" option3="الثالث" option4="الرابع"/>
            <Selecter title="الترم" optiontitle="الترم الحالي" option1="الترم الاول" option2="الترم الثاني" />
        </div>

        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 bg-[#c4dafa] p-3 rounded-2xl '>
                <p>الترم الاول </p>
                <div className='flex items-center'>
                    <p>2026</p>
                    <p>-</p>
                    <p>2027</p>
                </div>
            </div>

            <div className='flex items-center gap-2 border-2 text-[#5294f7] border-[#5294f7] hover:bg-[#5294f7] cursor-pointer hover:text-white p-3 rounded-2xl'>
                <LuPrinter />
                <button className='cursor-pointer' >طباعة الجدول</button>
            </div>
        </div>

        <Timetable/>
    </div>
  )
}
