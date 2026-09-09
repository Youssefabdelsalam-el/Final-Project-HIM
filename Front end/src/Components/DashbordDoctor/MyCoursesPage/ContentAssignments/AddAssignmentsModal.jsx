import React from 'react'
import { IoAdd, IoClose, IoCloudUploadOutline } from 'react-icons/io5'
import { FaRegFileAlt } from 'react-icons/fa'

export default function AddAssignmentsModal() {
  return (
   <>
    <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:shadow-md"  onClick={()=>document.getElementById('add_assignment_modal').showModal()}>
        <IoAdd className="text-xl" />
         إضافة واجب جديد
    </button>
    <dialog id="add_assignment_modal" className="modal">
      <div className="modal-box max-w-xl p-0">

        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-200 p-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-gray-800">إنشاء واجب جديد</h3>
            <p className="text-sm text-gray-500">قم بإضافة تفاصيل الواجب وموعد التسليم</p>
          </div>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost text-gray-500">
              <IoClose />
            </button>
          </form>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-5 p-5">

          {/* Assignment Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              عنوان الواجب <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center rounded-lg border border-gray-200 focus-within:border-blue-500">
              <input type="text" placeholder="أدخل عنوان الواجب" className="w-full px-4 py-3 text-sm outline-none" />
              <FaRegFileAlt className="mx-3 text-gray-400" />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              وصف الواجب <span className="text-gray-400">(اختياري)</span>
            </label>

            <textarea placeholder="اكتب وصفًا للواجب..." maxLength={500} className="h-24 resize-none rounded-lg border border-gray-200 p-4 text-sm outline-none focus:border-blue-500" />

            <span className="text-xs text-gray-400">0/500</span>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                التاريخ <span className="text-red-500">*</span>
              </label>

              <input type="date" className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                موعد التسليم <span className="text-red-500">*</span>
              </label>

              <input type="time" className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
            </div>

          </div>

          {/* Degree */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              الدرجة <span className="text-red-500">*</span>
            </label>

            <input type="number" placeholder="أدخل الدرجة" className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />

            <span className="text-xs text-gray-400">
              الدرجة من 100
            </span>
          </div>

          {/* File Upload */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              إرفاق ملف <span className="text-gray-400">(اختياري)</span>
            </label>

            <label className="flex h-28 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-200 bg-blue-50/30 transition hover:bg-blue-50">
              <IoCloudUploadOutline className="mb-2 text-3xl text-blue-600" />

              <p className="text-sm font-medium text-blue-600">
                اسحب الملف هنا أو اضغط للاختيار
              </p>

              <p className="mt-1 text-xs text-gray-400">
                PDF, DOC, DOCX, PPT, ZIP (الحد الأقصى 20 MB)
              </p>

              <input type="file" className="hidden" />
            </label>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-gray-200 p-5">

          <form method="dialog">
            <button className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 cursor-pointer">
              إلغاء
            </button>
          </form>

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 cursor-pointer">
            <IoAdd className="text-xl" />
            إنشاء الواجب
          </button>

        </div>

      </div>
    </dialog>
   </>
  )
}
