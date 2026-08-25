import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { GoUpload } from 'react-icons/go'
import { IoIosArrowDown, IoMdPersonAdd } from 'react-icons/io'
export default function CreateDoctor() {
  return (
    <>
    <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl  cursor-pointer bg-blue-600 text-white hover:bg-white hover:text-black font-bold ' onClick={()=>document.getElementById('my_modal_7').showModal()}>
            <GoUpload className='w-5 h-5 text-white group-hover:text-blue-600 ' />
             انشاء مادة
        </button>
        <dialog id="my_modal_7" className="modal">
            <div className="modal-box w-11/12 sm:w-10/12 max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col gap-5 py-6 sm:py-10">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
               <h3 className="flex items-center gap-4 text-[20px] font-bold text-lg">
                    <IoMdPersonAdd className='text-blue-600 w-8 h-8' />
                     إنشاء مادة
                </h3>
    
                {/* الحاوية الرئيسية */}
            <div className='border border-gray-200 flex flex-col gap-6 p-6 rounded-xl bg-gray-50/50'>
                
                {/* النموذج */}
                <form className='flex flex-col gap-4'>
                    
                    {/* الاسم بالكامل */}
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4'>
                        <label className='w-full sm:w-1/4 font-semibold text-gray-700 text-sm'>اسم مادة <span className='text-red-500'>*</span></label>
                        <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                            <input className='w-full outline-none text-sm text-gray-800' type="text" placeholder='اسم مادة' />
                        </div>
                    </div>

                    {/* الدكاترة */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
    
                        <label className="w-full sm:w-1/4 font-semibold text-gray-700 text-sm">
                             الدكاترة 
                             <span className="text-red-500">*</span>
                        </label>

                        <div className="flex-1">

                            <details className="relative">

                                {/* اختر الدكتور */}
                                <summary  className="list-none bg-white p-3 border border-gray-300 rounded-lg cursor-pointer text-sm text-gray-700 hover:border-blue-500 transition-all flex items-center justify-between">
                
                                    <span>اختر الدكاترة</span>

                                    <span className="text-gray-500">
                                        <IoIosArrowDown />
                                    </span>

                                </summary>

                                {/* Options */}
                                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-2">

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                             د. أحمد محمد
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                             د. محمد أحمد
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                             د. محمود علي
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                             د. خالد حسن
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                             د. مصطفى إبراهيم
                                        </span>
                                    </label>

                                </div>

                            </details>

                        </div>
                    </div>
                    
                    {/* التخصص */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
    
                        <label className="w-full sm:w-1/4 font-semibold text-gray-700 text-sm">
                             الاتخصص 
                             <span className="text-red-500">*</span>
                        </label>

                        <div className="flex-1">

                            <details className="relative">

                                {/* اختر التخصص */}
                                <summary  className="list-none bg-white p-3 border border-gray-300 rounded-lg cursor-pointer text-sm text-gray-700 hover:border-blue-500 transition-all flex items-center justify-between">
                
                                    <span>اختر التخصص</span>

                                    <span className="text-gray-500">
                                        <IoIosArrowDown />
                                    </span>

                                </summary>

                                {/* Options */}
                                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-2">

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                        تخصص عام
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                             تخصص نظم ومعلومات الاعمال
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                            تخصص ادارة اعمال
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                            تخصص محاسبة ومراجعة
                                        </span>
                                    </label>
                                    
                                </div>

                            </details>

                        </div>
                    </div>
    
                    {/* الفرقة */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
    
                        <label className="w-full sm:w-1/4 font-semibold text-gray-700 text-sm">
                             الفرقة 
                             <span className="text-red-500">*</span>
                        </label>

                        <div className="flex-1">

                            <details className="relative">

                                {/* اختر الفرقة */}
                                <summary  className="list-none bg-white p-3 border border-gray-300 rounded-lg cursor-pointer text-sm text-gray-700 hover:border-blue-500 transition-all flex items-center justify-between">
                
                                    <span>اختر الفرقة</span>

                                    <span className="text-gray-500">
                                        <IoIosArrowDown />
                                    </span>

                                </summary>

                                {/* Options */}
                                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-2">

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="radio" name="level" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                       الفرقة الاولي
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="radio" name="level" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                            الفرقة الثانية
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="radio" name="level" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                           الفرقة الثالثة
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="radio" name="level" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                           الفرقة الرابعة
                                        </span>
                                    </label>
                                    
                                </div>

                            </details>

                        </div>
                    </div>

                    {/* الترم */}
                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
    
                        <label className="w-full sm:w-1/4 font-semibold text-gray-700 text-sm">
                             الترم 
                             <span className="text-red-500">*</span>
                        </label>

                        <div className="flex-1">

                            <details className="relative">

                                {/* اختر الترم */}
                                <summary  className="list-none bg-white p-3 border border-gray-300 rounded-lg cursor-pointer text-sm text-gray-700 hover:border-blue-500 transition-all flex items-center justify-between">
                
                                    <span>اختر الترم</span>

                                    <span className="text-gray-500">
                                        <IoIosArrowDown />
                                    </span>

                                </summary>

                                {/* Options */}
                                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-2">

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="radio" name="term" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                       الترم الاول
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-gray-50">
                                        <input type="radio" name="term" className="w-4 h-4 accent-blue-600" />
                                        <span className="text-sm text-gray-700">
                                            الترم الثاني
                                        </span>
                                    </label>
                                </div>

                            </details>

                        </div>
                    </div>
    
                </form>
    
                {/* أزرار التحكم السفلي */}
                <div className='flex items-center justify-start gap-3 pt-2'>
                    <button type="button" className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all  shadow-sm cursor-pointer active:scale-95 text-sm'>
                     إنشاء مادة
                    </button>
                    <form method="dialog">
                        <button className='border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer  text-sm'>
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
