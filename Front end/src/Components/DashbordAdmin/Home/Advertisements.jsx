import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoMegaphoneOutline } from 'react-icons/io5'

export default function Advertisements() {
  return (
    <div className="w-full flex flex-col gap-4 min-w-0 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
        <div className='flex items-center justify-between'>
            <div className="flex items-center gap-4">
                <IoMegaphoneOutline className="w-7 h-7" />
                <h1 className="text-[25px] font-bold">أخر الإعلانات</h1>
            </div>
            <button className='text-[#1C5DCC] border border-[#1c5dcc56] hover:bg-[#1C5DCC] hover:text-white p-3 rounded-3xl flex items-center gap-5 cursor-pointer'>عرض جميع الاعلانات         
                <span>
                    <IoIosArrowBack />
                </span>
            </button>
        </div>

        <ul className='flex flex-col gap-5 border border-gray-400 rounded-3xl p-4'>
            <li className='flex items-center justify-between'>
                <div className='flex items-start gap-5'>
                    <div className='h-3 w-3 bg-blue-700 rounded-full'></div>
                   <div className='flex flex-col gap-1'>
                     <h1 className='text-[20px] font-bold'>اعلان هام</h1>
                     <p className='text-[18px] text-gray-600'>بدء التسجيل الفصل الدراسي الاول  2026 / 2027</p>
                   </div>
                </div>

                <p className='text-[18px] text-gray-600'>12 اغسطس 2026</p>
            </li>

            <li className='flex items-center justify-between'>
                <div className='flex items-start gap-5'>
                    <div className='h-3 w-3 bg-green-700 rounded-full'></div>
                   <div className='flex flex-col gap-1'>
                     <h1 className='text-[20px] font-bold'>اعلان للطلاب</h1>
                     <p className='text-[18px] text-gray-600'>اخر موعد لتسليم الاعمال 20 اغسطس 2026</p>
                   </div>
                </div>

                <p className='text-[18px] text-gray-600'>10 اغسطس 2026</p>
            </li>
            
            <li className='flex items-center justify-between'>
                <div className='flex items-start gap-5'>
                    <div className='h-3 w-3 bg-red-700 rounded-full'></div>
                   <div className='flex flex-col gap-1'>
                     <h1 className='text-[20px] font-bold'>اعلان اداري</h1>
                     <p className='text-[18px] text-gray-600'>اجتماع مجلس الادارة يوم الاحد 18 اغسطس</p>
                   </div>
                </div>

                <p className='text-[18px] text-gray-600'>8 اغسطس 2026</p>
            </li>

            

        </ul>
    </div>
  )
}
