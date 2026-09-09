import React from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { IoCalendarOutline, IoPersonSharp } from 'react-icons/io5'
import { LuClock4 } from 'react-icons/lu'
import { RiDeleteBinLine, RiEdit2Fill } from 'react-icons/ri'

export default function CardAd() {
  return (
   <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5 lg:p-6">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex min-w-0 w-full items-start gap-3 sm:gap-4 lg:flex-1">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#faaf0e3a] text-[#c28502] sm:h-14 sm:w-14">
                <BsExclamationCircle className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>

            <div className="min-w-0 flex-1">

                <h1 className="wrap-break-word text-base font-bold text-[#0326ec] sm:text-lg lg:text-xl">
                    تعطيل الدراسة غدا
                </h1>

                <p className="mt-2 wrap-break-word text-sm font-semibold leading-6 text-gray-700 sm:text-base">
                    تم تعطيل الدراسة غدا لسوء الاحوال الجوية
                </p>

                <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-500 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-3">

                    <div className="flex min-w-0 items-center gap-2">
                        <IoPersonSharp className="shrink-0" />
                        <span className="whitespace-nowrap">موجه إلى:</span>
                        <span className="font-semibold text-gray-700">الكل</span>
                    </div>

                    <div className="flex min-w-0 items-center gap-2">
                        <IoCalendarOutline className="shrink-0" />
                        <span className="whitespace-nowrap">8 اغسطس 2026</span>
                    </div>

                    <div className="flex min-w-0 items-center gap-2">
                        <LuClock4 className="shrink-0" />
                        <span className="whitespace-nowrap">10:30 صباحا</span>
                    </div>

                </div>

            </div>
        </div>

        <div className="flex w-full shrink-0 items-center gap-3 lg:w-auto">

            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white cursor-pointer sm:flex-none sm:px-5">
                <RiEdit2Fill className="h-5 w-5" />
               
            </button>

            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 p-3 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white cursor-pointer sm:flex-none sm:px-5">
                <RiDeleteBinLine className="h-5 w-5" />
                
            </button>

        </div>

    </div>
</div>
  )
}
