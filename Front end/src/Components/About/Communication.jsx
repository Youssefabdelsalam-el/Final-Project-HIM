import React from 'react'
import { FaPhoneAlt, FaRegClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'

export default function Communication() {
  return (
    <div className=' flex flex-col lg:flex-row items-center lg:items-start justify-around gap-10 bg-[#cacaca7e] py-10 px-5 md:px-10 lg:px-20'>
        <div className='flex flex-col items-center gap-6 w-full lg:w-auto '>
            <h1 className='text-[22px] md:text-[25px] font-extrabold text-[#0345a8]'>معلمومات الاتصال</h1>
            <div className='flex items-start gap-3'>
        
            <div className='flex flex-col items-center gap-8 mt-1'>
                <FaLocationDot className='w-6 h-6 text-[#06a38e]' />
                <FaPhoneAlt className='w-6 h-6 text-[#06a38e]' />
                <MdMail className='w-6 h-6 text-[#06a38e]' />
                <FaRegClock className='w-6 h-6 text-[#06a38e]' />
            </div>
        
                <div className='flex flex-col items-center text-[#9497a5] gap-7'>
                <a href=""><p className='hover:text-[#0345a8] text-[18px]'>المحله الكبرى - الغربية </p></a>
                <p className='hover:text-[#0345a8] text-[16px] md:text-[18px] cursor-pointer"'>01007684480</p>
                <p className='hover:text-[#0345a8] text-[16px] md:text-[18px] cursor-pointer"'>HIM@gmail.com</p>
                <div className=' text-[#9497a5] text-[16px] md:text-[18px] cursor-pointer'>
                    <p >من الاحد الي الاربعاء</p>
                    <p>9:00 ص - 4:00 م</p>
                </div>
            </div>
            </div>
        </div>

        <div className='map w-full md:w-175'>
            <iframe className='w-full md:w-full rounded-[50px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.1996659408824!2d31.115736423775022!3d30.90904267708937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb9f4eb8a57d%3A0x7eeadd7d73abb9a5!2z2KfZhNmF2LnZh9ivINin2YTYudin2YTZiiDZhNmE2KfYr9in2LHYqSDYqNin2YTZhdit2YTYqSDYp9mE2YPYqNix2Yk!5e0!3m2!1sar!2seg!4v1784844900654!5m2!1sar!2seg" width="700" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"/>
        </div>

        <form className='flex flex-col items-center gap-2 w-full md:w-87.5' >
            <h1 className='text-[22px] md:text-[25px] font-extrabold text-[#0345a8]'>تواصل معنا</h1>
            <div className='flex flex-col gap-2 w-full'>

                <div className='bg-white p-2 w-full border border-[#7e7c7c8c] rounded-2xl'>
                    <input className='w-full outline-none' type="text" placeholder='الاسم بالكامل' />
                </div>

                <div className='bg-white p-2 w-full border border-[#7e7c7c8c] rounded-2xl'>
                    <input className='w-full outline-none' type="Email" placeholder='البريد الالكتروني' />
                </div>

                <div className='bg-white p-2 w-full border border-[#7e7c7c8c] rounded-2xl'>
                    <input className='w-full outline-none' type="Phone" placeholder='رقم الهاتف' />
                </div>

                <div className='bg-white p-2 w-full border border-[#7e7c7c8c] rounded-2xl'>
                    <input className='w-full outline-none' type="text" placeholder='االموضوع*' />
                </div>

                <div className='bg-white p-2 w-full border border-[#7e7c7c8c] rounded-2xl'>
                    <textarea className='w-full outline-none resize-none' placeholder="اكتب رسالتك هنا....."></textarea>
                </div>

                <button className='bg-[#0345a8] text-[#ffffff] py-2 rounded-2xl cursor-pointer hover:bg-cyan-300'>ارسال  الرسالة</button>

            </div>
        </form>
    </div>

  )
}
