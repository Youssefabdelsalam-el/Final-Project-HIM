import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import DeletTable from './DeletTable'

export default function CardTable() {
  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">

    {/* Header */}

    <div className="mb-5 flex items-start justify-between">

        <div className="flex min-w-0 items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 sm:h-12 sm:w-12">
                <IoCalendarOutline className="h-6 w-6 text-blue-600" />
            </div>

            <div className="min-w-0">

                <h3 className="truncate text-sm font-bold text-[#0B1F4D] sm:text-base">
                    الفرقة الثالثة
                </h3>

                <p className="mt-1 truncate text-xs text-slate-500 sm:text-sm">
                    نظم ومعلومات
                </p>

            </div>

        </div>
    </div>


    {/* Data */}

    <div className="flex flex-col gap-3">

        <div className="flex items-center justify-between gap-3">

            <span className="shrink-0 text-xs text-slate-500 sm:text-sm">
                السنة الدراسية:
            </span>

            <span className="text-right text-xs font-semibold text-[#0B1F4D] sm:text-sm">
                2026/2027
            </span>

        </div>


        <div className="flex items-center justify-between">

            <span className="shrink-0 text-xs text-slate-500 sm:text-sm">
                الترم:
            </span>

            <span className="text-right text-xs font-semibold text-[#0B1F4D] sm:text-sm">
                الأول
            </span>

        </div>


        <div className="flex items-center justify-between">

            <span className="shrink-0 text-xs text-slate-500 sm:text-sm">
                عدد المحاضرات:
            </span>

            <span className="text-right text-xs font-semibold text-[#0B1F4D] sm:text-sm">
                18
            </span>

        </div>

        <div className="flex items-center justify-between">

            <span className="shrink-0 text-xs text-slate-500 sm:text-sm">
                الجروب:
            </span>

            <span className="text-right text-xs font-semibold text-[#0B1F4D] sm:text-sm">
                A
            </span>

        </div>

    </div>


    {/* Buttons */}

    <div className="mt-5 flex flex-col gap-2 border-t border-gray-100 pt-4 sm:flex-row sm:gap-3">

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 py-2.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white sm:text-sm cursor-pointer ">

            تعديل الجدول

        </button>


        <DeletTable/>

    </div>

</div>
  )
}
