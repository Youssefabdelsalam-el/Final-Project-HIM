import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Select() {
  return (
    <div className='flex items-center gap-4'>
        <h1 className='whitespace-nowrap'>المادة :</h1>
   
            <div className="relative w-full sm:w-48">
                <select className=" appearance-none w-full h-12 bg-white border border-[#E4EAF3] rounded-2xl px-3 sm:px-4 pl-9 sm:pl-10 text-[#0B1F4D] font-semibold text-sm shadow-sm outline-none cursor-pointer" >
                    <option value="">اختر المادة</option>
                    <option value="database">Database</option>
                    <option value="web-design">Web Design</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="visual">Visual Programming</option>
                </select>
   
                {/* السهم */}
                <div className="pointer-events-none absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#0057D9]">
                    <MdOutlineKeyboardArrowDown className='w-5 h-5' />
                </div>
            </div>
    </div>
  )
}
