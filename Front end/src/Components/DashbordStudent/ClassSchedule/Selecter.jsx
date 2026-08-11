import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function Selecter({title,optiontitle,option1,option2,option3,option4}) {
  return (
    <div className='flex items-center gap-4'>
        <h1 className='whitespace-nowrap'>{title} :</h1>
               
        <div className="relative w-full sm:w-48">
            <select className=" appearance-none w-full h-12 bg-white border border-[#E4EAF3] rounded-2xl px-3 sm:px-4 pl-9 sm:pl-10 text-[#0B1F4D] font-semibold text-sm shadow-sm outline-none cursor-pointer" >
                <option value="">{optiontitle}</option>
                <option value="database">{option1}</option>
                <option value="web-design">{option2}</option>
                <option value="mobile">{option3}</option>
                <option value="visual">{option4}</option>
            </select>
               
            {/* السهم */}
            <div className="pointer-events-none absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#0057D9]">
                    <MdOutlineKeyboardArrowDown className='w-5 h-5' />
             </div>
        </div>
    </div>
  )
}
