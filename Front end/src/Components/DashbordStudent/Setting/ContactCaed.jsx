import React from 'react'
import { BsFillPhoneFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { IoPersonOutline } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

export default function ContactCaed() {
  return (

    <div className='w-full max-w-6xl bg-white rounded-2xl border border-[#E4EAF3] shadow-sm p-6 md:p-8 flex flex-col gap-6'>

      {/* العنوان */}
      <div className='flex items-start gap-3 border-b border-[#E4EAF3] pb-4'>
        <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-[#EAF2FF]'>
          <IoPersonOutline className='w-5 h-5 text-[#0057D9]' />
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className='text-[20px] font-bold text-[#0B1F4D]'>
            البيانات الشخصية
          </h1>

          <p className='text-sm text-[#6B7890]'>
            قم بتحديث معلومات التواصل الخاصة بك
          </p>
        </div>
      </div>

      {/* البيانات */}

      {/* البريد الالكتروني */}
      <div className='flex flex-col gap-2'>
        <label className='text-sm font-bold text-[#0B1F4D]'>
          البريد الالكتروني
        </label>

        <div className='flex items-center gap-3 border border-[#E4EAF3] bg-white h-11 px-3 rounded-xl shadow-sm focus-within:border-[#0057D9] focus-within:ring-2 focus-within:ring-[#0057D9]/10 transition-all'>
          <MdEmail className='text-[#0057D9] w-5 h-5 shrink-0' />

          <input
            className='w-full h-full outline-none text-sm text-[#0B1F4D]'
            type="emali"
          />
        </div>
      </div>

      {/* رثم الهاتف*/}
      <div className='flex flex-col gap-2'>
        <label className='text-sm font-bold text-[#0B1F4D]'>
          رقم الهاتفي
        </label>

        <div className='flex items-center gap-3 border border-[#E4EAF3] bg-white h-11 px-3 rounded-xl shadow-sm focus-within:border-[#0057D9] focus-within:ring-2 focus-within:ring-[#0057D9]/10 transition-all'>
          <BsFillPhoneFill className='text-[#0057D9] w-5 h-5 shrink-0' />

          <input
            className='w-full h-full outline-none text-sm text-[#0B1F4D]'
            type="text"
          />
        </div>
      </div>

      {/* العنوان*/}
      <div className='flex flex-col gap-2'>
        <label className='text-sm font-bold text-[#0B1F4D]'>
          العنوان
        </label>

        <div className='flex items-center gap-3 border border-[#E4EAF3] bg-white h-11 px-3 rounded-xl shadow-sm focus-within:border-[#0057D9] focus-within:ring-2 focus-within:ring-[#0057D9]/10 transition-all'>
          <FaLocationDot className='text-[#0057D9] w-5 h-5 shrink-0' />

          <input
            className='w-full h-full outline-none text-sm text-[#0B1F4D]'
            type="text"
          />
        </div>
      </div>

    </div>
  )
}