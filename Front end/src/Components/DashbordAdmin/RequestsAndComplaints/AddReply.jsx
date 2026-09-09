import React from 'react'
import { RiMessage2Line } from 'react-icons/ri'
import { IoPersonOutline, IoCalendarOutline } from 'react-icons/io5'
import { LuClock4 } from 'react-icons/lu'
export default function AddReply() {
  return (
    <>
     <button onClick={() => document.getElementById('ReplyModal').showModal()} className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white sm:flex-1">
        <RiMessage2Line className="h-5 w-5" />
         عرض والرد
    </button>
   <dialog id="ReplyModal" className="modal">

      <div className="modal-box w-[calc(100%-1.5rem)] max-w-2xl p-4 sm:p-6 lg:p-7">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <RiMessage2Line className="h-6 w-6 text-blue-600" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#0B1F4D] sm:text-xl">
                الرد على الشكوى او الطلب
              </h3>

              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                يمكنك الاطلاع على الشكوى وإرسال رد للطالب
              </p>
            </div>

          </div>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost">
              ✕
            </button>
          </form>

        </div>


        {/* بيانات الطالب */}
        <div className="mt-5 rounded-2xl bg-gray-50 p-4">

          <div className="flex items-center gap-3">

            <img
              src="/vextor2.jfif"
              alt=""
              className="h-12 w-12 rounded-full border-2 border-blue-100 object-cover"
            />

            <div className="min-w-0">
              <h4 className="text-sm font-bold text-[#0B1F4D] sm:text-base">
                يوسف عبد السلام مصطفي
              </h4>

              <p className="mt-1 text-xs text-gray-500">
                الفرقة الثالثة - نظم ومعلومات الأعمال
              </p>
            </div>

          </div>


          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs text-gray-500 sm:text-sm">

            <div className="flex items-center gap-2">
              <IoCalendarOutline className="text-blue-500" />
              <span>8 أغسطس 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <LuClock4 className="text-blue-500" />
              <span>10:30 صباحًا</span>
            </div>

          </div>

        </div>


        {/* الشكوى */}
        <div className="mt-5">

          <div className="mb-2 flex items-center justify-between">

            <h4 className="text-sm font-bold text-[#0B1F4D]">
              نص الشكوى
            </h4>

            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
              شكوى
            </span>

          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 text-sm leading-7 text-gray-600">
            تأخر المحاضرة لمدة ساعة بدون إبداء أي سبب من الأستاذ محمد علي
          </div>

        </div>


        {/* الرد */}
        <div className="mt-5">

          <label className="mb-2 block text-sm font-bold text-[#0B1F4D]">
            الرد على الطالب
          </label>

          <textarea
            rows="5"
            placeholder="اكتب ردك هنا..."
            className="w-full resize-none rounded-xl border border-[#E4EAF3] bg-white p-4 text-sm text-[#0B1F4D] outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

        </div>


        {/* Buttons */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <form method="dialog" className="w-full sm:w-auto">
            <button className="w-full rounded-xl border border-gray-200 bg-gray-50 px-6 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100">
              إلغاء
            </button>
          </form>

          <button className="w-full rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto">
            إرسال الرد
          </button>

        </div>

      </div>

    </dialog>

    </>
    
  )
}
