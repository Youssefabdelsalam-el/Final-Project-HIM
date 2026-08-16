import React from 'react'
import { IoBookOutline, IoCalendarOutline, IoMegaphoneOutline } from 'react-icons/io5'
import StatsCard from './StatsCard'
import { GoPeople } from 'react-icons/go'
import { LuClipboardPen } from 'react-icons/lu'
import LectureSchedule from './LectureSchedule'
import TaskReminders from './TaskReminders'

export default function HomeDoctor() {
  return (
    <div className='flex flex-col gap-6'>
      {/* الترحيب والتاريخ */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 w-full'>
          {/* الترحيب */}
          <div className='Hello flex flex-col gap-2 min-w-0'>

            <div className='flex flex-wrap items-center gap-2 text-[25px] font-bold'>
              <h1>مرحبا بك</h1>
              <p>د.</p>
              <p>كريم محمد</p>
            </div>
            <p>اليك ملخص نشاطك الاكاديمي ومهامك اليوم.</p>
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

        {/* الكاردات */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          <StatsCard  num ="4"name ="مواد" description="التي تقوم بتدريسها" Icon={IoBookOutline} styleicon="bg-blue-200 text-blue-500 p-3 rounded-full shrink-0" namelink="عرض المواد"/>
          <StatsCard  num ="186"name ="طلاب" description="في جميع موادك" Icon={GoPeople} styleicon="bg-green-200 text-green-500 p-3 rounded-full shrink-0" namelink="عرض الطلاب"/>
          <StatsCard  num ="12"name ="واجبات تحتاج تصحيح" description="تسلم في انتظار التصحيح" Icon={LuClipboardPen} styleicon="bg-orange-200 text-orange-500 p-3 rounded-full shrink-0" namelink="عرض الواجباات"/>
          <StatsCard  num ="5"name ="اعلانات منشورة" description="اعلانات نشطة حاليا" Icon={IoMegaphoneOutline} styleicon="bg-fuchsia-200 text-fuchsia-500 p-3 rounded-full shrink-0" namelink="عرض الاعلانات"/>
        </div>

        <LectureSchedule/>
        <TaskReminders/>
    </div>
  )
}
