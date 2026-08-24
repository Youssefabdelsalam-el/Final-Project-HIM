import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { GoUpload } from 'react-icons/go'
import { IoMdPersonAdd } from 'react-icons/io'

export default function CreateStudent() {
  return (
    // انشاء طالب
    <>
    <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl  cursor-pointer bg-blue-600 text-white hover:bg-white hover:text-black font-bold ' onClick={()=>document.getElementById('my_modal_3').showModal()}>
        <GoUpload className='w-5 h-5 text-white group-hover:text-blue-600 ' />
         انشاء طالب
    </button>
    <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 sm:w-10/12 max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col gap-5 py-6 sm:py-10">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
           <h3 className="flex items-center gap-4 text-[20px] font-bold text-lg">
                <IoMdPersonAdd className='text-blue-600 w-8 h-8' />
                 إنشاء طالب
            </h3>

            {/* الحاوية الرئيسية */}
        <div className='border border-gray-200 flex flex-col gap-6 p-6 rounded-xl bg-gray-50/50'>
            
            {/* النموذج */}
            <form className='flex flex-col gap-4'>
                
                {/* الاسم بالكامل */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
                    <label className='w-full sm:w-1/4 font-semibold text-gray-700 text-sm'>الاسم بالكامل <span className='text-red-500'>*</span></label>
                    <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                        <input className='w-full outline-none text-sm text-gray-800' type="text" placeholder='الاسم بالكامل' />
                    </div>
                </div>

                {/* الرقم القومي */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
                    <label className='w-full sm:w-1/4 font-semibold text-gray-700 text-sm'>الرقم القومي <span className='text-red-500'>*</span></label>
                    <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                        <input className='w-full outline-none text-sm text-gray-800' type="text" placeholder='الرقم القومي' />
                    </div>
                </div>

                {/* كود الطالب */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
                    <label className='w-full sm:w-1/4 font-semibold text-gray-700 text-sm'>كود الطالب <span className='text-red-500'>*</span></label>
                    <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                        <input className='w-full outline-none text-sm text-gray-800' type="text" placeholder='كود الطالب' />
                    </div>
                </div>

                {/* التخصص */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
                    <label className='w-full sm:w-1/4 font-semibold text-gray-700 text-sm'>التخصص <span className='text-red-500'>*</span></label>
                    <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                        <select className='w-full outline-none bg-transparent text-sm text-gray-700 cursor-pointer'>
                            <option value="" disabled selected>اختر التخصص</option>
                            <option>تخصص عام</option>
                            <option>تخصص ادارة الاعمال</option>
                            <option>تخصص نظم ومعلومات الاعمال</option>
                            <option>تخصص محاسبة ومراجعة</option>
                        </select>
                    </div>
                </div>

                {/* الفرقة */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
                    <label className='w-full sm:w-1/4 font-semibold text-gray-700 text-sm'>الفرقة <span className='text-red-500'>*</span></label>
                    <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                        <select className='w-full outline-none bg-transparent text-sm text-gray-700 cursor-pointer'>
                            <option value="" disabled selected>اختر الفرقة</option>
                            <option>الفرقة الاولي</option>
                            <option>الفرقة الثانية</option>
                            <option>الفرقة الثالثة</option>
                            <option>الفرقة الرابعة</option>
                        </select>
                    </div>
                </div>

            </form>

            {/* مربع التنبيه والمعلومات */}
            <div className='bg-[#dfeaffda] p-4 rounded-xl border border-blue-200 flex flex-col items-center justify-center gap-2 text-center'>
                <AiOutlineExclamationCircle className='text-blue-600 w-7 h-7' />

                <div className='flex flex-col items-center justify-center gap-2 text-gray-800'>
                    <p className='font-bold text-base text-blue-900'>سيتم إنشاء حساب تلقائيا للطالب</p>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-medium text-gray-700 text-center'>
                        <p>اسم المستخدم: <span className='font-bold text-gray-900'>الرقم القومي</span></p>
                        <span className='w-0.5 h-4 bg-gray-400 inline-block'></span>
                        <p>كلمه المرور: <span className='font-bold text-gray-900'>كود الطالب</span></p>
                    </div>
                </div>
            </div>

            {/* أزرار التحكم السفلي */}
            <div className='flex items-center justify-start gap-3 pt-2'>
                <button type="button" className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-sm active:scale-95 text-sm'>
                 إنشاء الطالب
                </button>
                <form method="dialog">
                    <button className='border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl transition-all text-sm'>
                        إلغاء
                    </button>
                </form>
            </div>
            </div>
        </div>
    </dialog>
    </>
  )
}
