import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function FilterTapleClass({title,option1,option2,option3,option4}) {
  return (
    <>
    <div className='flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:gap-3'>
        <label className='shrink-0 whitespace-nowrap text-sm font-semibold text-slate-700'>{title} :</label>
                             
        <div className="relative w-full sm:w-48">
            <select className=" appearance-none w-full h-12 bg-white border border-[#E4EAF3] rounded-2xl px-4 pl-10 text-[#0B1F4D] font-semibold text-sm outline-none cursor-pointer" >
                <option >{title}</option>
                <option >{option1}</option>
                {option2 && (
                <option value="option3">
                    {option2}
                </option>
            )}

                {option3 && (
                <option value="option3">
                    {option3}
                </option>
            )}
               {option4 && (
                <option value="option3">
                    {option4}
                </option>
            )}
            </select>
       
            {/* السهم */}
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0057D9]">
                <MdOutlineKeyboardArrowDown className='w-5 h-5' />
            </div>
        </div>
    </div>
    </>
  )
}
