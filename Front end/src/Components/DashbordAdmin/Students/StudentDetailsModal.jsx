import React from 'react'
import { FaRegEye } from 'react-icons/fa'
import { IoEyeOutline } from 'react-icons/io5'

export default function StudentDetailsModal() {
  return (
    <>
        <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 ' onClick={()=>document.getElementById('my_modal_4').showModal()}>
            <IoEyeOutline className='w-6 h-6' />
        </button>
        <dialog id="my_modal_4" className="modal" dir="rtl">
    <div className="modal-box w-11/12 sm:w-10/12 md:w-8/12 max-w-4xl min-h-110 flex flex-col gap-5 py-6 sm:py-10">
        
        <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute left-3 top-3 text-gray-400 hover:bg-gray-100 transition-colors">✕</button>
        </form>

        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <FaRegEye className='text-blue-600 w-6 h-6' />
            <h3 className="text-lg font-bold text-gray-800">عرض بيانات الطالب</h3>
        </div>

        <div className='flex flex-col gap-4 bg-gray-50/60 p-4 rounded-xl border border-gray-100'>
            
            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm py-2 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 sm:w-1/3 shrink-0'>الاسم كامل</span>
                <span className='font-bold text-gray-800 sm:w-2/3 wrap-break-words'>يوسف عبد السلام مصطفي السمان</span>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm py-2 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 sm:w-1/3 shrink-0'>كود الطالب</span>
                <span className='font-bold text-gray-800 sm:w-2/3 wrap-break-words'>537573547</span>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm py-2 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 sm:w-1/3 shrink-0'>الرقم القومي</span>
                <span className='font-bold text-gray-800 sm:w-2/3 wrap-break-words'>30653794645</span>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm py-2 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 sm:w-1/3 shrink-0'>التخصص</span>
                <span className='font-bold text-gray-800 sm:w-2/3 wrap-break-words'>نظم ومعلومات الأعمال</span>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm py-2 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 sm:w-1/3 shrink-0'>الفرقة</span>
                <span className='font-bold text-gray-800 sm:w-2/3 wrap-break-words'>الفرقة الثالثة</span>
            </div>

        </div>
        
        <div className='flex justify-end pt-2'>
            <form method="dialog">
                <button className='border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-2 px-6 rounded-xl transition-all text-sm'>
                    إغلاق
                </button>
            </form>
        </div>

    </div>
</dialog>
    </>
  )
}
