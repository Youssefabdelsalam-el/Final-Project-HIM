import React from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { IoCalendarOutline, IoPersonSharp } from 'react-icons/io5'
import { LuClock4 } from 'react-icons/lu'

export default function Card() {
  return (
    <div>

        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-8 bg-white p-4 sm:p-5 border border-[#1101f14b] rounded-2xl shadow-lg w-full'>
            {/* ايقون */}
            <div className='flex items-start sm:items-center gap-4 sm:gap-6 w-full lg:flex-1'>
                <div className='bg-[#faaf0e3a] text-[#c28502] p-3 rounded-2xl shrink-0'> 
                    <BsExclamationCircle className='w-8 h-8 sm:w-10 sm:h-10' />
                </div>

                <div className='flex flex-col items-start gap-2 sm:gap-3 min-w-0'>
                    <h1 className='text-base sm:text-[20px] font-bold text-[#0326ec]'>تغير موعد محاضرة تصميم المواقع</h1>
                    <p className='font-bold text-sm sm:text-base leading-6'> تم تعير موعد محاضره تصميم المواقع ليوم الاحد اساعة 12:00 بدل اساعه 10:00</p>
                </div>
            </div>
            
            <div className='flex flex-col gap-3 w-full lg:w-auto lg:min-w-50 text-sm sm:text-base'>
                {/* من المرسل */}
                <div className='flex items-center gap-2'>
                    <IoPersonSharp  />
                    <p>د/</p>
                    <p>احمد محمد</p>
                </div>

                {/* متي ارسل الرسالة */}
                <div className='flex items-center gap-2'>
                    <IoCalendarOutline />
                    <p>8 اغسطس 2026</p>
                </div>

                {/* في اي وقت ارسل الرسالة */}
                 <div className='flex items-center gap-2'>
                    <LuClock4 />
                    <p>10:30 صباحا</p>
                </div> 

            </div>
        </div>



    </div>
  )
}
