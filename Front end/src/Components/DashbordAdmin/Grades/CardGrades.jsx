import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { RiEdit2Fill } from 'react-icons/ri'
import DeletCardGrafe from './DeletCardGrafe'
import { MdStackedBarChart } from 'react-icons/md'
import { LuBookOpenText } from 'react-icons/lu'
import { RxPeople } from 'react-icons/rx'
import { IoPersonOutline } from 'react-icons/io5'
import { FaRegClock } from 'react-icons/fa'

export default function CardGrades() {
  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">

    {/* Header */}
    <div className="flex items-start gap-4 border-b border-gray-100 pb-5">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <MdStackedBarChart className="h-6 w-6 text-blue-600" />
        </div>

        <div className="min-w-0">
            <h1 className="text-base font-bold leading-7 text-[#0B1F4D] sm:text-lg">
                درجة امتحان - فاينال - نظم ومعلومات الأعمال - الفرقة الثانية
            </h1>

            <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                تفاصيل نتيجة الامتحان
            </p>
        </div>

    </div>


    {/* تفاصيل الكارد */}
    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-1">

        {/* السنة الدراسية */}
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

            <CiCalendar className="h-5 w-5 shrink-0 text-blue-600" />

            <div className="min-w-0">
                <p className="text-xs text-gray-400">
                    السنة الدراسية
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                    2026/2027
                </p>
            </div>

        </div>


        {/* الفرقة */}
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

            <RxPeople className="h-5 w-5 shrink-0 text-blue-600" />

            <div className="min-w-0">
                <p className="text-xs text-gray-400">
                    الفرقة
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                    الثانية
                </p>
            </div>

        </div>


        {/* التخصص */}
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

            <LuBookOpenText className="h-5 w-5 shrink-0 text-blue-600" />

            <div className="min-w-0">
                <p className="text-xs text-gray-400">
                    التخصص
                </p>

                <p className="mt-1 truncate text-sm font-semibold text-[#0B1F4D]">
                    نظم ومعلومات الأعمال
                </p>
            </div>

        </div>

        {/* الترم */}

        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

            <CiCalendar className="h-5 w-5 shrink-0 text-blue-600" />

            <div className="min-w-0">
                <p className="text-xs text-gray-400">
                   الترم
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                    الترم الاول
                </p>
            </div>

        </div>


        {/* عدد الطلاب */}
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">

            <IoPersonOutline className="h-5 w-5 shrink-0 text-blue-600" />

            <div className="min-w-0">
                <p className="text-xs text-gray-400">
                    عدد الطلاب
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                    186 طالب
                </p>
            </div>

        </div>


        {/* تاريخ الرفع */}
        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3 sm:col-span-2">

            <FaRegClock className="h-5 w-5 shrink-0 text-blue-600" />

            <div className="min-w-0">
                <p className="text-xs text-gray-400">
                    تاريخ الرفع
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                    15/6/2026 - 9:30 ص
                </p>
            </div>

        </div>

    </div>


    {/* Actions */}
    <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white cursor-pointer">

            <RiEdit2Fill className="h-5 w-5" />

            تعديل

        </button>
        <DeletCardGrafe/>

    </div>

</div>
  )
}
