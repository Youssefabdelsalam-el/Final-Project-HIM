import React from 'react'
import { FaFileExcel } from 'react-icons/fa'
import { GoUpload } from 'react-icons/go'
import { RiUploadCloud2Line } from 'react-icons/ri'

export default function ImportStudentsButton() {
    
  return (
    // استيراد الطلاب
    <>
    <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white font-bold' onClick={()=>document.getElementById('my_modal_2').showModal()}>
        <GoUpload className='w-5 h-5 text-blue-600 group-hover:text-white' />
         استيراد الطلاب
        </button>

        <dialog id="my_modal_2" className="modal">
            <div className="modal-box w-11/12 sm:w-10/12 max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col gap-5 py-6 sm:py-10">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="flex items-center gap-4 text-[20px] font-bold text-lg">
                <RiUploadCloud2Line className='text-blue-600 w-8 h-8' />
                استرداد الطلاب
            </h3>
            
            <div className='bg-[#dfeaffda] p-4 flex flex-col items-center gap-3 border border-gray-300 font-bold rounded-2xl'>
                <p>يجب ان يحتوي ملف Excel علي الأعمدة التالية بنفس الترتيب :</p>
                <p>الاسم بالكامل - الرقم القومي - كود الطالب - التخصص - الفرقة</p>
            </div>

            <div className='bg-[#edf2fc91] rounded-2xl p-4 border-2 border-dashed border-[#8f96a177]'>

                <div className='flex flex-col gap-4 items-center'>
                    <FaFileExcel className='w-20 h-20 text-green-700' />
                   <div className='flex flex-col gap-2 items-center'>
                        <p className='text-[18px]'>اسحب ملف Excel هنا</p>
                        <p className='text-[18px]'>أو</p>
                        <p className='text-[18px] text-blue-600'>اختر الملف من جهازك</p>
                   </div>

                   <button className='bg-blue-600 hover:bg-blue-800 py-2 px-7 text-white font-bold cursor-pointer rounded-2xl'>اختر الملف</button>
                </div>

            </div>

            <div>
                <h2 className='font-bold'>تعليمات هامة :</h2>
                <p>1- يجب ان يكون الملف بصيغة Excel فقط</p>
                <p>2- سيتم إنشاء حساب للطلاب تلقائيا (اسم المستخدم: الرقم القومي - كلمه المرور: كود الطالب)</p>
                <p></p>
            </div>

            <div className='flex flex-wrap items-center gap-3'>
                <button className='py-3 px-7 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-2xl '>استيراد</button>
                <form method="dialog">
                    <button className='border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl transition-all text-sm'>
                        إلغاء
                    </button>
                </form>
            </div>
            </div>
        </dialog>
    </>
  )
}
