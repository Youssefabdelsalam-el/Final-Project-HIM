import React from 'react'
import { IoBookOutline, IoCalendarOutline } from 'react-icons/io5'
import { BsBuildings } from 'react-icons/bs'
import Cards from './Cards'
import { GoPeople } from 'react-icons/go'
import { FaChalkboardTeacher } from 'react-icons/fa'
import Chart from './Chart'
import QuickActionCards from './QuickActionCards'
import Advertisements from './Advertisements'



export default function HomeAdmin() {
  return (
    <div className='flex flex-col gap-6'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 w-full'>
            {/* الترحيب */}
            <div className='Hello flex flex-col gap-2 min-w-0'>
        
                <div className='flex flex-wrap items-center gap-2 text-[25px] font-bold'>
                    <h1>مرحبا بك</h1>
                    <p>Admin</p>
                </div>
                <p>اليك ملخص شامل لنشاط المعهد اليوم.</p>
            </div>
        
            {/* التارخ */}
            <div className='flex items-center justify-between sm:justify-center gap-3 bg-[#3b5d85] text-white p-3 rounded-2xl w-full sm:w-fit shrink-0'>
            <div>
                 <p>الاربعاء 13 اغسطس 2026</p>
                 9 صفر 1448 هجريا
            </div>
            <IoCalendarOutline className='w-7 h-7' />
                </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
            <Cards number="3" name="التخصصات" Icon={BsBuildings} styleicon="bg-blue-200 text-blue-500 p-3 rounded-full shrink-0" button="عرض الاقسام"/>
            <Cards number="124" name="مادة" Icon={IoBookOutline} styleicon="bg-green-200 text-green-500 p-3 rounded-full shrink-0" button="عرض المواد"/>
            <Cards number="86" name="دكتور" Icon={FaChalkboardTeacher} styleicon="bg-orange-200 text-orange-500 p-3 rounded-full shrink-0" button="عرض الدكاترة"/>
            <Cards number="1284" name="طالب" Icon={GoPeople} styleicon="bg-fuchsia-200 text-fuchsia-500 p-3 rounded-full shrink-0" button="عرض الطالب"/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 sm:gap-5 w-full min-w-0'>
            <QuickActionCards/>
            <Chart/>
        </div>
        <Advertisements/>

    </div>
  )
}
