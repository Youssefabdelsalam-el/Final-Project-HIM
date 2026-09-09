import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function DeletCardGrafe() {
  return (
    <>
    <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white cursor-pointer" onClick={()=>document.getElementById('my_modal_DeletCardGrafe').showModal()}>
    
        <RiDeleteBinLine className="h-5 w-5" />
    
         حذف
    
    </button>
    <dialog id="my_modal_DeletCardGrafe" className="modal">
        <div className="modal-box flex flex-col gap-5 w-[calc(100%-1.5rem)] max-w-md p-4 sm:p-6">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
             <h3 className="flex items-center gap-3 pr-6 text-lg sm:text-xl font-bold text-[#0B1F4D]">
                <RiDeleteBinLine className='text-red-600 w-8 h-8' />
                 حذف  النتيجة
            </h3>
            <div className='flex flex-col items-center gap-5'>
               <div className='flex h-20 w-20 items-center justify-center rounded-full bg-red-100 sm:h-24 sm:w-24'>
                 <RiDeleteBinLine className='h-12 w-12 text-red-600 sm:h-16 sm:w-16' />
               </div>
    
               <div className='flex flex-col gap-5 w-full'>
                <p className='text-center text-[16px] font-bold'>هل انت متأكد من حذف النتيجة</p>
                <p className='text-center text-gray-400 text-[16px] font-bold'>لن يتمكن الطلاب من الوصول الي هذة النتيجة بعد حذفها</p>
                <div className='flex flex-col gap-2 rounded-xl bg-gray-50 p-3 sm:p-4'>

                    <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                         عنوان المحاضرة
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                             درجة امتحان - فاينال - نظم ومعلومات الأعمال - الفرقة الثانية
                        </p>
                    </div>
                
                    <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                        السنة الدراسية
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                             2026/2027
                        </p>
                    </div>
                
                    <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                       الفرقة
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                           الثانية
                        </p>
                    </div>
                
                    <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                       التخصص
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                            نظم ومعلومات الاعمال
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                       عدد الطلاب
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                            186 طالب
                        </p>
                    </div>

                    <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                      تاريخ الرفع
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#0B1F4D]">
                           15/6/2026 - 9:30 ص
                        </p>
                    </div>
                </div>
    
                <div className='flex w-full flex-col-reverse gap-3 sm:flex-row sm:justify-center'>
                    <button className='w-full cursor-pointer rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700 sm:w-auto '>حذف</button>
                    <form method="dialog" className="w-full sm:w-auto">
                        <button className='w-full cursor-pointer rounded-xl border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-100 sm:w-auto'>
                            إلغاء
                        </button>
                    </form>
                </div>
               </div>
            </div>
        </div>
        </dialog>
    </>
  )
}
