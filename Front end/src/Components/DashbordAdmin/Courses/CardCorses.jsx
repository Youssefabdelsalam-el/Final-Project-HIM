import React from 'react'
import { GoPeople } from 'react-icons/go'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { LuGraduationCap } from 'react-icons/lu'
import { PiStudent } from 'react-icons/pi'
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri'

export default function CardCorses() {
  return (
   <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

            <div className="title p-5 border-b border-gray-100">
                <p className="text-sm text-gray-400 mb-1">اسم المادة</p>

                <div className="flex items-center justify-between gap-3">
                    <h1 className="text-xl font-bold text-gray-800">قاعدة البيانات</h1>

                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                        مادة
                    </span>
                </div>
            </div>

            <div className="p-5 space-y-5">

                <div className=" Doctors flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex items-center gap-2 min-w-30 text-gray-600">
                        <GoPeople className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">الدكاترة</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-gray-800 bg-gray-50 px-3 py-1.5 rounded-lg">أحمد محمد</span>
                        <span className="text-gray-300">-</span>
                        <span className="font-semibold text-gray-800 bg-gray-50 px-3 py-1.5 rounded-lg">إسراء علي</span>
                    </div>
                </div>

                <div className="Specialization flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex items-center gap-2 min-w-30 text-gray-600">
                        <LuGraduationCap className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">التخصصات</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="font-semibold text-gray-800 bg-gray-50 px-3 py-1.5 rounded-lg">
                            نظم ومعلومات الأعمال
                        </span>
                    </div>
                </div>

                <div className="level flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex items-center gap-2 min-w-30 text-gray-600">
                        <PiStudent className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">الفرق</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="font-semibold text-gray-800 bg-gray-50 px-3 py-1.5 rounded-lg">الأولى</span>
                        <span className="font-semibold text-gray-800 bg-gray-50 px-3 py-1.5 rounded-lg">الثانية</span>
                    </div>
                </div>


                <div className="term flex flex-col sm:flex-row sm:items-start gap-3">
                    <div className="flex items-center gap-2 min-w-30 text-gray-600">
                        <IoCalendarClearOutline className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium">الترم</span>
                    </div>

                    <span className="font-semibold text-gray-800 bg-gray-50 px-3 py-1.5 rounded-lg w-fit">
                        الأول
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-3 p-5 pt-0">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-blue-100 bg-blue-50 text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer">
                    <RiEdit2Line className="w-4 h-4" />
                    تعديل
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-red-100 bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-600 hover:text-white transition-all duration-200 cursor-pointer">
                    <RiDeleteBinLine className="w-4 h-4" />
                    حذف
                </button>
            </div>

        </div>
  )
}
