import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
export default function DeletTable() {
  return (
    <>
    <button className="flex w-full items-center justify-center gap-2 rounded-xl border transitio sm:text-sm border-red-100 bg-red-50 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-500 hover:text-white cursor-pointer" onClick={()=>document.getElementById('my_modal_DeletTable').showModal()}>

     حذف الجدول

    </button>

    <dialog id="my_modal_DeletTable" className="modal">
        <div className="modal-box flex flex-col gap-5 w-[calc(100%-1.5rem)] max-w-md p-4 sm:p-6">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
             <h3 className="flex items-center gap-3 pr-6 text-lg sm:text-xl font-bold text-[#0B1F4D]">
                <RiDeleteBinLine className='text-red-600 w-8 h-8' />
                 حذف الجدول الدراسي
            </h3>
            <div className='flex flex-col items-center gap-5'>
               <div className='flex h-20 w-20 items-center justify-center rounded-full bg-red-100 sm:h-24 sm:w-24'>
                 <RiDeleteBinLine className='h-12 w-12 text-red-600 sm:h-16 sm:w-16' />
               </div>
    
               <div className='flex flex-col gap-5 w-full'>
                <p className='text-center text-[16px] font-bold'>هل انت متأكد من حذف الجدول</p>
                <div className='flex flex-col gap-2 rounded-xl bg-gray-50 p-3 sm:p-4'>
                    <p className=' ttext-sm font-bold text-slate-700 sm:text-base'>الفرقة الثالثة</p>
                
                    <p className=' text-base font-bold wrap-break-words'>نظم ومعلومات الاعمال</p>
                
                    <p className=' text-base font-bold wrap-break-words'>الترم الاول</p>
                
                    <div className='flex items-center gap-2'>
                        <p className=' text-base font-bold wrap-break-words'>جروب</p>
                        <p className=' text-base font-bold wrap-break-words'>A</p>
                    </div>
                </div>
    
                <div className='flex flex-col items-center gap-1.5 rounded-2xl bg-red-50 p-3 text-center text-sm font-bold leading-6 text-red-600 sm:gap-2 sm:p-4 sm:text-base'>
                    <p>لا يمكن التراجع عن هذه الاجراء</p>
                    <p>وسيتم حذف جميع بياناته من النظام</p>
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
