import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function DeleteStudentModal() {
  return (
    <>
    <button className='text-red-600 border-red-200 shadow border p-1 cursor-pointer hover:bg-gray-300'onClick={()=>document.getElementById('my_modal_6').showModal()}>
        <RiDeleteBinLine className='w-6 h-6' />
    </button>
    <dialog id="my_modal_6" className="modal">
    <div className="modal-box w-7/12 max-w-4xl min-h-90 flex flex-col gap-5 py-4">
        <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
         <h3 className="flex items-center gap-4 text-[20px] font-bold text-lg">
            <RiDeleteBinLine className='text-red-600 w-8 h-8' />
             حذف الطالب
        </h3>
        <div className='flex flex-col items-center gap-5'>
           <div className='bg-red-200 p-3 rounded-full'>
             <RiDeleteBinLine className='text-red-600 w-20 h-20' />
           </div>

           <div className='flex flex-col gap-5 w-full'>
            <p className='text-center text-[16px] font-bold'>هل انت متأكد من حذف</p>
            <div className='flex items-center justify-center gap-2'>
                <p className=' text-[16px] font-bold'>الطالب</p>
                <p className=' text-[16px] font-bold'>يوسف عبد السلام مصطفي السمان</p>
            </div>

            <div className='bg-red-100 text-red-600 p-2 flex flex-col gap-2 items-center text-[16px] font-bold '>
                <p>لا يمكن التراجع عن هذه الاجراء</p>
                <p>وسيتم حذف جميع بياناته من النظام</p>
            </div>

            <div className='flex items-center justify-center gap-3'>
                <button className='py-3 px-7 bg-red-600 hover:bg-red-700 cursor-pointer text-white rounded-2xl '>حذف</button>
                <form method="dialog">
                    <button className='border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl transition-all text-sm'>
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
