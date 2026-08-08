import React, { useState , useRef } from 'react'
import { LuBookOpen, LuMonitorCog } from 'react-icons/lu'
import CardSubjects from './CardSubjects'
import { PiCodeFill } from 'react-icons/pi'
import { BiSolidCylinder } from 'react-icons/bi'
import { TbTopologyRing2 } from 'react-icons/tb'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function AcademicSubjects() {
    const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <>
    <div className='bg-[#ffffff] p-4 md:p-5 rounded-2xl flex flex-col gap-4 w-full'>
        <div className='flex items-center justify-between text-[#1300c0]'>
            <h1 className='text-[15px] font-bold'>المواد الدراسية</h1>
            <LuBookOpen  className="w-5 h-5 md:w-6 md:h-6" />
        </div>

        <div className='flex items-center justify-between overflow-hidden px-4'>
            <div className='flex gap-4 transition-transform duration-500'style={{transform: `translateX(${currentIndex * 25}%)`}}>
                <CardSubjects subject="تصميم مواقع" doctor="محمد سعيد" Icon={PiCodeFill} styleicon="w-10 h-10 text-[#6338D8] " bgicon="bg-[#F0E9FF] p-5 rounded-4xl"/>
                <CardSubjects subject="تحليل بيانات" doctor="احمد علي" Icon={BiSolidCylinder} styleicon="w-10 h-10 text-[#48B98A] " bgicon="bg-[#E4F8EF] p-5 rounded-4xl"/>
                <CardSubjects subject="نظام التشغيل" doctor="خالد محمود" Icon={LuMonitorCog} styleicon="w-10 h-10 text-[#F5A623] " bgicon="bg-[#FFF3DD] p-5 rounded-4xl"/>
                <CardSubjects subject="الشبكات" doctor="علي حسن" Icon={TbTopologyRing2} styleicon="w-10 h-10 text-[#0055B8] " bgicon="bg-[#E8F3FF] p-5 rounded-4xl"/>
                <CardSubjects subject="الشبكات" doctor="علي حسن" Icon={TbTopologyRing2} styleicon="w-10 h-10 text-[#0055B8] " bgicon="bg-[#E8F3FF] p-5 rounded-4xl"/>
                <CardSubjects subject="الشبكات" doctor="علي حسن" Icon={TbTopologyRing2} styleicon="w-10 h-10 text-[#0055B8] " bgicon="bg-[#E8F3FF] p-5 rounded-4xl"/>
                <CardSubjects subject="الشبكات" doctor="علي حسن" Icon={TbTopologyRing2} styleicon="w-10 h-10 text-[#0055B8] " bgicon="bg-[#E8F3FF] p-5 rounded-4xl"/>
                <CardSubjects subject="الشبكات" doctor="علي حسن" Icon={TbTopologyRing2} styleicon="w-10 h-10 text-[#0055B8] " bgicon="bg-[#E8F3FF] p-5 rounded-4xl"/>
            </div>
        </div>

        <div className='flex items-center justify-between'>
            <button onClick={() => setCurrentIndex(0)} className='bg-[#d3d3d36c] p-2 rounded-full'>
                <IoIosArrowForward className='w-5 h-5' />
            </button>

            <div className='flex items-center gap-1'>
                <div className='bg-[#0205db] rounded-full w-2 h-2'></div>
                <div className='bg-[#0205db] rounded-full w-2 h-2'></div>
                <div className='bg-[#0205db] rounded-full w-2 h-2'></div>
                <div className='bg-[#0205db] rounded-full w-2 h-2'></div>
                <div className='bg-[#0205db] rounded-full w-2 h-2'></div>
            </div>

            <button  onClick={() => setCurrentIndex(1)} className='bg-[#d3d3d36c] p-2 rounded-full'>
                <IoIosArrowBack className='w-5 h-5' />
            </button>
        </div>
        
    </div>
    </>
  )
}