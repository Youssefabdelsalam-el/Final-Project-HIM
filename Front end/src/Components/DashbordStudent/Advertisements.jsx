import React from 'react'
import { IoMegaphoneOutline } from 'react-icons/io5'

export default function Advertisements() {
  return (
    <div className='bg-[#ffffff] p-4 md:p-5 rounded-2xl flex flex-col gap-4 w-full'>
        <ul className='flex flex-col gap-2'>
            <li className='flex items-center justify-between text-[#1300c0]'>
                <h1 className='text-[15px] font-bold'>الاعلانات الاخيرة</h1>
                <IoMegaphoneOutline className="w-5 h-5 md:w-6 md:h-6" />
            </li>

            <li className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
                <div className='flex items-start gap-3 md:gap-5 flex-1'>

                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>

                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-[#160bb4] text-sm md:text-lg lg:text-xl font-bold leading-relaxed'>تم تاجيل محاضرة الشبكات</h1>
                        <p className='text-gray-500 text-xs md:text-sm lg:text-base'>الي يوم الاربع القادم</p>
                    </div>
                </div>

                <div className='self-end sm:self-auto flex flex-col items-center justify-center min-w-15 border border-gray-200 rounded-lg py-2 px-3 '>
                    <p className='text-lg md:text-xl font-bold'>18</p>
                    <p className="text-xs md:text-sm text-gray-500">مايو</p>
                </div>
            </li>

            <div className='w-full h-0.5 bg-[#cccccc7e]'></div>

            <li className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
                <div className='flex items-start gap-3 md:gap-5 flex-1'>

                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>

                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-[#160bb4] text-sm md:text-lg lg:text-xl font-bold leading-relaxed'>فتح باب التسجيل في الدورات التدريبية</h1>
                        <p className='text-gray-500 text-xs md:text-sm lg:text-base'>بادر بالتسجيل الان</p>
                    </div>
                </div>

                <div className='self-end sm:self-auto flex flex-col items-center justify-center min-w-15 border border-gray-200 rounded-lg py-2 px-3 '>
                    <p className='text-lg md:text-xl font-bold'>16</p>
                    <p className="text-xs md:text-sm text-gray-500">مايو</p>
                </div>
            </li>

            <div className='w-full h-0.5 bg-[#cccccc7e]'></div>

            <li className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
                <div className='flex items-start gap-3 md:gap-5 flex-1'>

                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>

                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='text-[#160bb4] text-sm md:text-lg lg:text-xl font-bold leading-relaxed'>تم  رفع محاضره تصميم المواقع</h1>
                        <p className='text-gray-500 text-xs md:text-sm lg:text-base'>تأكد من تحميلها</p>
                    </div>
                </div>

                <div className='self-end sm:self-auto flex flex-col items-center justify-center min-w-15 border border-gray-200 rounded-lg py-2 px-3 '>
                    <p className='text-lg md:text-xl font-bold'>15</p>
                    <p className="text-xs md:text-sm text-gray-500">مايو</p>
                </div>
            </li>
        </ul>
    </div>
  )
}
