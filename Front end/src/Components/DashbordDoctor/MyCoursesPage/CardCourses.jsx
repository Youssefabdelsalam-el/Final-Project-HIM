import React from 'react'
import { FiUser, FiUsers, FiBookOpen, FiCalendar, FiArrowLeft } from 'react-icons/fi'
import { IoBookOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function CardCourses() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:shadow-md">

      {/* الهيدر */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 text-blue-600 p-2.5 sm:p-3 rounded-2xl shrink-0">
            <IoBookOutline className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-blue-600 truncate">
            English
          </h2>
        </div>
      </div>

      {/* تفاصيل الكورس */}
      <div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">

        {/* الفرقة */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-gray-500">
            <FiBookOpen className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            <span className="text-xs sm:text-sm">الفرقة:</span>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[#0B1F4D]">
            الأولى
          </span>
        </div>

        {/* التخصص */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-gray-500">
            <FiUser className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            <span className="text-xs sm:text-sm">التخصص:</span>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[#0B1F4D] truncate max-w-37.5 text-left">
            نظم ومعلومات
          </span>
        </div>

        {/* الترم */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-gray-500">
            <FiCalendar className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
            <span className="text-xs sm:text-sm">الترم:</span>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[#0B1F4D]">
            الأول
          </span>
        </div>

      </div>

      {/* خط فاصل */}
      <div className="my-4 sm:my-5 border-t border-gray-100"></div>

      {/* زر الدخول */}
      <Link 
        to="CourseDetails" 
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
      >
        <span>دخول المقرر</span>
        <FiArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>

    </div>
  )
}
