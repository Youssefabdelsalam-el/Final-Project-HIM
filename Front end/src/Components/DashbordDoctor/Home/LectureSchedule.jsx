import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { LuCalendarClock } from 'react-icons/lu'

export default function LectureSchedule() {
  return (
    <div className='w-full bg-white p-3 sm:p-4 md:p-5 flex flex-col gap-4 sm:gap-5 rounded-2xl'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>

            <div className='flex items-center gap-3 sm:gap-5 text-xl sm:text-2xl md:text-[25px] font-bold min-w-0'>
                <LuCalendarClock className='w-6 h-6 sm:w-7 sm:h-7 shrink-0' />
                <h1 className='truncate'>محاضرات اليوم</h1>
            </div>

            <button className='w-full sm:w-auto flex items-center justify-center gap-4 sm:gap-7 p-3 sm:p-4 border border-[#D8E3F5] text-[#1C5DCC] bg-[#F3F7FF] rounded-2xl cursor-pointer hover:bg-[#3b5d85] hover:text-white'>عرض الجدول بالكامل

                <span>
                    <IoIosArrowBack />
                </span>
            </button>

        </div>
        <div className="  w-full overflow-x-auto rounded-2xl border border-base-content/5 bg-base-100 rounded-box">
        <table className="table w-full min-w-175">
        {/* head */}
        <thead className='bg-[#E2E8F1] text-black font-bold text-base sm:text-lg md:text-[20px]'>
            <tr className='h-16 sm:h-20'>
            <th>#</th>
            <th>المادة</th>
            <th>الجروب</th>
            <th>الوقت</th>
            <th>القاعة</th>    
            </tr>
        </thead>
        <tbody className='text-sm sm:text-base md:text-[18px] font-bold'>
            {/* row 1 */}
            <tr className='hover:bg-gray-100'>
            <th>1</th>
            <td>تصميم مواقع</td>
            <td>A</td>
            <td className='flex items-center gap-2 sm:gap-3 whitespace-nowrap'>
                <p>9:00</p>
                <p>-</p>
                <p>11:00</p>
            </td>
            <td>506</td>
            </tr>
            {/* row 2 */}
             <tr className='hover:bg-gray-100'>
            <th>1</th>
            <td>قاعده البيانات</td>
            <td>B</td>
            <td className='flex items-center gap-2 sm:gap-3 whitespace-nowrap'>
                <p>12:00</p>
                <p>-</p>
                <p>2:00</p>
            </td>
            <td>601</td>
            </tr>
            {/* row 3 */}
             <tr className='hover:bg-gray-100'>
            <th>1</th>
            <td>تحليل وتصميم نظم المعلومات</td>
            <td>c</td>
            <td className='flex items-center gap-2 sm:gap-3 whitespace-nowrap'>
                <p>3:00</p>
                <p>-</p>
                <p>5:00</p>
            </td>
            <td>201</td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
  )
}
