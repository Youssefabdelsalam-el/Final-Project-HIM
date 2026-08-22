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
    <div className="modal-box w-11/12 max-w-lg p-6 bg-white rounded-2xl shadow-xl flex flex-col gap-5">
        
        <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute left-3 top-3 text-gray-400 hover:bg-gray-100 transition-colors">✕</button>
        </form>

        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <FaRegEye className='text-blue-600 w-6 h-6' />
            <h3 className="text-lg font-bold text-gray-800">عرض بيانات الطالب</h3>
        </div>

        <div className='flex flex-col gap-4 bg-gray-50/60 p-4 rounded-xl border border-gray-100'>
            
            <div className='flex items-center justify-between text-sm py-1 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 w-1/3'>الاسم كامل</span>
                <span className='font-bold text-gray-800 w-2/3 text-left dir-rtl'>يوسف عبد السلام مصطفي السمان</span>
            </div>

            <div className='flex items-center justify-between text-sm py-1 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 w-1/3'>كود الطالب</span>
                <span className='font-bold text-gray-800 w-2/3 text-left dir-rtl'>537573547</span>
            </div>

            <div className='flex items-center justify-between text-sm py-1 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 w-1/3'>الرقم القومي</span>
                <span className='font-bold text-gray-800 w-2/3 text-left dir-rtl'>30653794645</span>
            </div>

            <div className='flex items-center justify-between text-sm py-1 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 w-1/3'>التخصص</span>
                <span className='font-bold text-gray-800 w-2/3 text-left dir-rtl'>نظم ومعلومات الأعمال</span>
            </div>

            <div className='flex items-center justify-between text-sm py-1 border-b border-gray-200/60 last:border-0'>
                <span className='font-semibold text-gray-500 w-1/3'>الفرقة</span>
                <span className='font-bold text-gray-800 w-2/3 text-left dir-rtl'>الفرقة الثالثة</span>
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
