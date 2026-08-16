import React from 'react'
import { BiTask } from 'react-icons/bi'
import Tasks from './Tasks'
import { FaRegFileLines } from 'react-icons/fa6'
import { GrTasks } from 'react-icons/gr'
import { IoIosArrowBack } from 'react-icons/io'

export default function TaskReminders() {
  return (
    <div className=' w-full bg-white p-3 sm:p-4 md:p-5 flex flex-col gap-4 sm:gap-5 rounded-2xl'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        
            <div className='flex items-center gap-3 sm:gap-5 text-xl sm:text-2xl md:text-[25px] font-bold min-w-0'>
                <BiTask className='w-6 h-6 sm:w-7 sm:h-7 shrink-0' />
                <h1 className='truncate'>المهام المطلوبة</h1>
            </div>
            <button className='text-[#1C5DCC] flex items-center gap-5 cursor-pointer'>عرض جميع المهام
            
                <span>
                    <IoIosArrowBack />
                </span>
            </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full'>
            <Tasks title="Assignment 2" subject="تصميم مواقع" Icon={FaRegFileLines} num="15" remember="تسليمات في انتظار التصحيح"/>
            <Tasks title="Quiz 2" subject="قاعدة البيانات" Icon={GrTasks} num="" remember="الساعة 10:00 صباحا" />
            <Tasks title="Assignment 1" subject="تحليل نظم ومعلومات" Icon={FaRegFileLines} num="4" remember="تسليمات في انتظار التصحيح"/>
            <Tasks title="Quiz 1" subject="تصميم مواقع" Icon={GrTasks} num="" remember="الساعة 9:00 صباحا"/>
            
        </div>

    </div>
  )
}
