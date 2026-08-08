import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import { GiTrophyCup } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { LuBookOpenText } from 'react-icons/lu'


export default function Statistics() {
  return (
   <div className='py-5 mb-7.5'>
               
        <div className= "bg-[#0A192F] p-5 sm:p-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-20 text-[#ffff]">
       
            <div className='flex flex-col items-center gap-2 w-[40%] sm:w-55'>
                <GiTrophyCup  className='w-8 h-8 text-[#e0b90b]' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-[25px] font-extrabold'>6+</h1>
                    <p>عاما من الخبرة</p>
                </div>
            </div>
       
            <div className='flex flex-col items-center gap-2 w-full sm:w-55 '>
                <LuBookOpenText className='w-8 h-8 text-[#7a0de0]' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-[25px] font-extrabold'>3+</h1>
                    <p>اقسام علميه</p>
                </div>
            </div>
       
            <div className='flex flex-col items-center gap-2 w-full sm:w-55 '>
                <IoIosPeople className='w-8 h-8 text-[#009688]' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-[25px] font-extrabold'>180+</h1>
                    <p>اعضاء هيئة التدريس</p>
                </div>
            </div>
       
            <div className='flex flex-col items-center gap-2 w-full sm:w-55 '>
                <FaUserGraduate className='w-8 h-8 text-[#009688]' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-[25px] font-extrabold'>5200+</h1>
                    <p>عدد الطلاب</p>
                </div>
            </div>
        </div>
       
    </div>
  )
}
