import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import ContactCaed from './ContactCaed'
import ChangePassword from './ChangePassword'

export default function Settings() {
  return (
     <div className='flex flex-col gap-7'>
        <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 lg:gap-0 w-full'>
            <div className='profile flex items-center gap-3'>
                <div className='bg-[#EAF2FF] text-[#0B1F4D] p-3 rounded-full'>
                    <IoMdSettings className='w-9 h-9'  />
                </div>
    
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[#0B1F4D] text-[25px] font-bold'>الأعدادات</h1>
                    <div>
                    <p>الرئيسية / <span> الأعدادات</span></p>
                    </div>
                </div>
            </div>

       <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full lg:w-auto'>
            {/* الوضع العام */}
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2 text-[20px] font-bold'>
                    <h1>الوضع</h1>
                    <p>:</p>
                </div>
                <div className=' bg-white border border-[#E4EAF3] rounded-2xl px-4 text-[#0B1F4D] font-semibold text-sm shadow-sm outline-none cursor-pointer hover:border-[#0057D9] focus:border-[#0057D9] transition-all duration-200'>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg className="swap-off h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /> </svg>

                        {/* moon icon */}
                        <svg className="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /> </svg>
                    </label>
                </div>
            </div>
            {/* اللغة */}
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-2 text-[20px] font-bold'>
                    <h1>اللغة</h1>
                    <p>:</p>
                </div>
                <div className="relative w-36">
                    <select className="appearance-none w-full h-12 bg-white border border-[#E4EAF3] rounded-2xl px-4 pl-10 text-[#0B1F4D] font-semibold text-sm shadow-sm outline-none cursor-pointer hover:border-[#0057D9] focus:border-[#0057D9] transition-all duration-200">
                        <option>العربية</option>
                        <option>English</option>
                    </select>

                    <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#0057D9]">
                        <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                    </div>
                </div>
            </div>

        </div>
       </div>

       <div className='w-full flex flex-col items-center gap-5 px-4 sm:px-6 md:px-8'>
        <ContactCaed/>
        <ChangePassword/>
       </div>
       
    </div>
  )
}
