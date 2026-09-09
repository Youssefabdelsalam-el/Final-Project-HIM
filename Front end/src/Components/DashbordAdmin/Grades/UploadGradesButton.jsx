import React from 'react'
import { BsUpload } from 'react-icons/bs'
import { FaFileExcel } from 'react-icons/fa'
import { GoUpload } from 'react-icons/go'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { RiUploadCloud2Line } from 'react-icons/ri'
export default function UploadGradesButton() {
  return (
    <>
        <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl  cursor-pointer bg-blue-600 text-white hover:bg-white hover:text-black font-bold ' onClick={()=>document.getElementById('my_modal_Grade').showModal()}>
                <GoUpload className='w-5 h-5 text-white group-hover:text-blue-600 ' />
                 رفع نتيجة جديدة 
        </button>

        <dialog id="my_modal_Grade" className="modal">
                    <div className="modal-box w-11/12 sm:w-10/12 max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col gap-5 py-6 sm:py-10">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="flex items-center gap-4 text-[20px] font-bold text-lg">
                        <RiUploadCloud2Line className='text-blue-600 w-8 h-8' />
                         رفع نتيجة جديدة
                    </h3>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            عنوان النتيجة <span className="text-red-500">*</span>
                        </label>
                        <input type="text" placeholder="العنوان" className="h-12 w-full rounded-xl border border-[#E4EAF3] bg-white px-4 text-sm font-semibold text-[#0B1F4D] outline-none focus:border-blue-500"/>
                    </div>

                    {/* السنة + الفرقة */}

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                        {/* السنة الدراسية */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                السنة الدراسية <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">

                                <select className="h-12 w-full appearance-none rounded-xl border border-[#E4EAF3] bg-white px-4 pl-10 text-sm font-semibold text-[#0B1F4D] outline-none cursor-pointer">

                                    <option value="">
                                        2025/2026
                                    </option>

                                    <option value="2025/2026">
                                        2025/2026
                                    </option>

                                    <option value="2026/2027">
                                        2026/2027
                                    </option>

                                </select>

                                <MdOutlineKeyboardArrowDown className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />

                            </div>

                        </div>


                        {/* الفرقة */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                الفرقة <span className="text-red-500">*</span>
                            </label>

                            <div className="relative">

                                <select className="h-12 w-full appearance-none rounded-xl border border-[#E4EAF3] bg-white px-4 pl-10 text-sm font-semibold text-[#0B1F4D] outline-none cursor-pointer">

                                    <option value="">
                                        اختر الفرقة
                                    </option>

                                    <option value="first">
                                        الفرقة الأولى
                                    </option>

                                    <option value="second">
                                        الفرقة الثانية
                                    </option>

                                    <option value="third">
                                        الفرقة الثالثة
                                    </option>

                                    <option value="fourth">
                                        الفرقة الرابعة
                                    </option>

                                </select>

                                <MdOutlineKeyboardArrowDown className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />

                            </div>

                        </div>

                    </div>


                    {/* التخصص */}

                    <div>

                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            التخصص <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">

                            <select className="h-12 w-full appearance-none rounded-xl border border-[#E4EAF3] bg-white px-4 pl-10 text-sm font-semibold text-[#0B1F4D] outline-none cursor-pointer">

                                <option value="">
                                    اختر التخصص
                                </option>

                                <option value="general">
                                    تخصص عام
                                </option>

                                <option value="business">
                                    نظم ومعلومات الأعمال
                                </option>

                                <option value="management">
                                    إدارة الأعمال
                                </option>

                                <option value="accounting">
                                    المحاسبة والمراجعة
                                </option>

                            </select>

                            <MdOutlineKeyboardArrowDown className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />

                        </div>

                    </div>

                    <div>

                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            الترم <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">

                            <select className="h-12 w-full appearance-none rounded-xl border border-[#E4EAF3] bg-white px-4 pl-10 text-sm font-semibold text-[#0B1F4D] outline-none cursor-pointer">

                                <option value="management">
                                   الترم الاول
                                </option>

                                <option value="accounting">
                                   الترم الثاني
                                </option>

                            </select>

                            <MdOutlineKeyboardArrowDown className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />

                        </div>

                    </div>


                    <div className='bg-[#edf2fc91] rounded-2xl p-4 border-2 border-dashed border-[#8f96a177]'>
        
                        <div className='flex flex-col gap-4 items-center'>
                            <BsUpload className='text-gray-600 w-12 h-12' />
                           <div className='flex gap-2 items-center'>
                                <p className='text-[18px]'>اسحب الملف هنا</p>
                                <p className='text-[18px]'>أو</p>
                                <p className='text-[18px] text-blue-600'>اختر الملف من جهازك</p>
                           </div>
        
                           <button className='bg-blue-600 hover:bg-blue-800 py-2 px-7 text-white font-bold cursor-pointer rounded-2xl'>اختر الملف</button>

                           <p>مسموح بملف Pdf او Excel </p>
                        </div>
                    </div>
        
                    <div className='flex flex-wrap items-center gap-3'>
                        <button className='py-3 px-7 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-2xl '>رفع النتيجة</button>
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
