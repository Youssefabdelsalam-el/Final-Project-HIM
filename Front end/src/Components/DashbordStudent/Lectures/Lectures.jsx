import React from 'react'
import {PiVideoCameraBold } from 'react-icons/pi'
import TitelPage from '../TitelPage'
import { IoMdPlayCircle } from 'react-icons/io'
import { FaFilePdf, FaRegCalendarAlt } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import Select from '../Select'
import Search from '../Search'

export default function Lectures() {
  return (
    <div className='w-full flex flex-col gap-5 px-2 sm:px-4 md:px-6'>
       <TitelPage titel="المحاضرات" description="استعرض محاضرتك حسب المادة" Icon={PiVideoCameraBold}/>
      <div className='w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4'>
        <Search placeholder="ابحث عن المحاضرة"/>
        <Select/>
      </div>
      
      <div className='w-full min-w-0 border rounded-2xl border-[#b3b3b37e] p-2 sm:p-3 md:p-4 overflow-hidden'>

        <ul className="list bg-base-100 rounded-3xl shadow-md">
          
          
          <li className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-3 sm:p-4 border-b border-[#E4EAF3] last:border-b-0'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full lg:w-[55%]'>
                    {/* عنوان المحاضرة */}
                  <div className='flex items-center gap-3 min-w-0 '>
                    {/* ايقونه المحاضرة */}

                    <div className='bg-[#95bef5] p-2 rounded-2xl'>
                      <IoMdPlayCircle className='w-7 h-7 text-[#012ffa]' />
                    </div>

                    {/* عنوان المحاضره */}

                    <div className='flex flex-col gap-1'>
                      {/* اسم المحاضره */}
                      <h1 className='text-base sm:text-[18px] font-bold truncate'>HTML</h1>
                      {/* اسم المادة */}
                      <p className='text-[15px] bg-[#bcd5f5] rounded-2xl p-1 text-[#012ffa] font-bold'>Web Design</p>
                    </div>
                  </div>

                  {/* التاريخ */}
                  <div className='flex flex-col items-start sm:items-center gap-1 text-sm sm:text-base shrink-0'>
                    <div className='flex items-center gap-2'>
                      <FaRegCalendarAlt />
                      <p>تاريخ الرفع</p>
                    </div>
                    <p>15 اكتوبر 2026</p>
                  </div>
                </div>

              {/* الزراير */}
              <div className='flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto'>

                 <div className='flex items-center justify-center gap-2 p-2.5 sm:p-3 border border-[#94949462] rounded-2xl text-[#012ffa] hover:bg-[#012ffa] hover:text-white cursor-pointer '>
                  <IoMdPlayCircle className='w-5 h-5' />
                  <button className='text-sm sm:text-[15px] font-bold cursor-pointer'>مشاهدة</button>
                </div>

                <div className='flex items-center justify-center gap-2 p-2.5 sm:p-3 border border-[#94949462] rounded-2xl text-[#012ffa] hover:bg-[#012ffa] hover:text-white cursor-pointer '>
                  <FiDownload className='w-5 h-5' />
                  <button className='text-sm sm:text-[15px] font-bold cursor-pointer'>تحميل</button>
                </div>


              </div>
          </li>

          <li className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-3 sm:p-4 border-b border-[#E4EAF3] last:border-b-0'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full lg:w-[55%]'>
                    {/* عنوان المحاضرة */}
                  <div className='flex items-center gap-3 min-w-0 '>
                    {/* ايقونه المحاضرة */}

                    <div className='bg-[#f5b5b5] p-2 rounded-2xl'>
                      <FaFilePdf  className='w-7 h-7 text-[#fa0101]' />
                    </div>

                    {/* عنوان المحاضره */}

                    <div className='flex flex-col gap-1'>
                      {/* اسم المحاضره */}
                      <h1 className='text-base sm:text-[18px] font-bold truncate'>CSS</h1>
                      {/* اسم المادة */}
                      <p className='text-[15px] bg-[#bcd5f5] rounded-2xl p-1 text-[#012ffa] font-bold'>Web Design</p>
                    </div>
                  </div>

                  {/* التاريخ */}
                  <div className='flex flex-col items-start sm:items-center gap-1 text-sm sm:text-base shrink-0'>
                    <div className='flex items-center gap-2'>
                      <FaRegCalendarAlt />
                      <p>تاريخ الرفع</p>
                    </div>
                    <p>15 اكتوبر 2026</p>
                  </div>
                </div>

              {/* الزراير */}
              <div className='flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto'>

                <div className='flex items-center justify-center gap-2 p-2.5 sm:p-3 border border-[#94949462] rounded-2xl text-[#012ffa] hover:bg-[#012ffa] hover:text-white cursor-pointer '>
                  <FiDownload className='w-5 h-5' />
                  <button className='text-sm sm:text-[15px] font-bold cursor-pointer'>تحميل</button>
                </div>

              </div>
          </li>

           <li className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-3 sm:p-4 border-b border-[#E4EAF3] last:border-b-0'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full lg:w-[55%]'>
                    {/* عنوان المحاضرة */}
                  <div className='flex items-center gap-3 min-w-0 '>
                    {/* ايقونه المحاضرة */}

                    <div className='bg-[#95bef5] p-2 rounded-2xl'>
                      <IoMdPlayCircle className='w-7 h-7 text-[#012ffa]' />
                    </div>

                    {/* عنوان المحاضره */}

                    <div className='flex flex-col gap-1'>
                      {/* اسم المحاضره */}
                      <h1 className='text-base sm:text-[18px] font-bold truncate'>HTML</h1>
                      {/* اسم المادة */}
                      <p className='text-[15px] bg-[#bcd5f5] rounded-2xl p-1 text-[#012ffa] font-bold'>Web Design</p>
                    </div>
                  </div>

                  {/* التاريخ */}
                  <div className='flex flex-col items-start sm:items-center gap-1 text-sm sm:text-base shrink-0'>
                    <div className='flex items-center gap-2'>
                      <FaRegCalendarAlt />
                      <p>تاريخ الرفع</p>
                    </div>
                    <p>15 اكتوبر 2026</p>
                  </div>
                </div>

              {/* الزراير */}
              <div className='flex flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto'>

                <div className='flex items-center justify-center gap-2 p-2.5 sm:p-3 border border-[#94949462] rounded-2xl text-[#012ffa] hover:bg-[#012ffa] hover:text-white cursor-pointer '>
                  <IoMdPlayCircle className='w-5 h-5' />
                  <button className='text-sm sm:text-[15px] font-bold cursor-pointer'>مشاهدة</button>
                </div>

                <div className='flex items-center justify-center gap-2 p-2.5 sm:p-3 border border-[#94949462] rounded-2xl text-[#012ffa] hover:bg-[#012ffa] hover:text-white cursor-pointer '>
                  <FiDownload className='w-5 h-5' />
                  <button className='text-sm sm:text-[15px] font-bold cursor-pointer'>تحميل</button>
                </div>

              </div>
          </li>

        </ul>
      </div>
    </div>
  )
}
