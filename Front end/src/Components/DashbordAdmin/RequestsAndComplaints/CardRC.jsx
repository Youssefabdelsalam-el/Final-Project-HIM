import React from 'react'
import { IoPersonOutline, IoCalendarOutline } from 'react-icons/io5'
import { LuClock4 } from 'react-icons/lu'
import { RiMessage2Line } from 'react-icons/ri'
import AddReply from './AddReply'

export default function CardRC() {
  return (
    <>
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">

      {/* بيانات الطالب + الحالة */}
      <div className="flex flex-col gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-start sm:justify-between">

        {/* الطالب */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">

          <img
            className="h-14 w-14 shrink-0 rounded-full border-2 border-[#0C44AC] object-cover sm:h-16 sm:w-16"
            src="/vextor2.jfif"
            alt=""
          />

          <div className="flex min-w-0 flex-col gap-2">

            <h1 className="truncate text-sm font-bold text-[#0B1F4D] sm:text-base">
              يوسف عبد السلام مصطفي
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm">
              <span>الفرقة الثالثة</span>
              <span>-</span>
              <span>نظم ومعلومات الأعمال</span>
            </div>

          </div>
        </div>

        {/* الحالة */}
        <span className="w-fit rounded-full bg-yellow-50 px-4 py-1.5 text-xs font-bold text-yellow-600">
          قيد المراجعة
        </span>

      </div>


      {/* محتوى الشكوى */}
      <div className="flex flex-col gap-4 py-5">

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50">
            <RiMessage2Line className="h-5 w-5 text-red-500" />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              نوع الرسالة
            </p>

            <h2 className="text-sm font-bold text-red-600 sm:text-base">
              شكوى
            </h2>
          </div>
        </div>


        {/* نص الشكوى */}
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm font-semibold leading-7 text-gray-700">
            تأخر المحاضرة لمدة ساعة بدون إبداء أي سبب من الأستاذ محمد علي
          </p>
        </div>


        {/* معلومات الشكوى */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-gray-500 sm:text-sm">

          <div className="flex items-center gap-2">
            <IoCalendarOutline className="h-4 w-4 text-blue-500" />
            <span>8 أغسطس 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <LuClock4 className="h-4 w-4 text-blue-500" />
            <span>10:30 صباحًا</span>
          </div>

        </div>

      </div>


      {/* الأزرار */}
      <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row">

       <AddReply/>
      </div>

    </div>

    <div className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">

      {/* بيانات الطالب + الحالة */}
      <div className="flex flex-col gap-4 border-b border-gray-100 pb-4 sm:flex-row sm:items-start sm:justify-between">

        {/* الطالب */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">

          <img
            className="h-14 w-14 shrink-0 rounded-full border-2 border-[#0C44AC] object-cover sm:h-16 sm:w-16"
            src="/vextor2.jfif"
            alt=""
          />

          <div className="flex min-w-0 flex-col gap-2">

            <h1 className="truncate text-sm font-bold text-[#0B1F4D] sm:text-base">
              يوسف عبد السلام مصطفي
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm">
              <span>الفرقة الثالثة</span>
              <span>-</span>
              <span>نظم ومعلومات الأعمال</span>
            </div>

          </div>
        </div>

        {/* الحالة */}
        <span className="w-fit rounded-full bg-green-50 px-4 py-1.5 text-xs font-bold text-green-600">
         تم الرد
        </span>

      </div>


      {/* محتوى الشكوى */}
      <div className="flex flex-col gap-4 py-5">

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
            <RiMessage2Line className="h-5 w-5 text-green-500" />
          </div>

          <div>
            <p className="text-xs text-gray-400">
              نوع الرسالة
            </p>

            <h2 className="text-sm font-bold text-green-600 sm:text-base">
              طلب
            </h2>
          </div>
        </div>


        {/* نص الشكوى */}
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm font-semibold leading-7 text-gray-700">
           اريد الاستفسار عن امكانيه تسجيل ماده اضافية مع المواد الموجوده في الجدول الدراسي وهل يسمح النظام بذالك
          </p>
        </div>


        {/* معلومات الشكوى */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-gray-500 sm:text-sm">

          <div className="flex items-center gap-2">
            <IoCalendarOutline className="h-4 w-4 text-blue-500" />
            <span>8 أغسطس 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <LuClock4 className="h-4 w-4 text-blue-500" />
            <span>10:30 صباحًا</span>
          </div>

        </div>

      </div>


      {/* الأزرار */}
      <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row">

       <AddReply/>
      </div>

    </div>
    </>
  )
}