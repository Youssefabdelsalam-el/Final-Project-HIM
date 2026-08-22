import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { RiEdit2Fill, RiSave3Line } from 'react-icons/ri'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { GoUpload } from 'react-icons/go'
import { IoMdPersonAdd } from 'react-icons/io'

export default function EditStudentModal() {
  return (
    <>

    <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 ' onClick={()=>document.getElementById('my_modal_5').showModal()}>
        <AiOutlineEdit className='w-6 h-6' />
    </button>
    <dialog id="my_modal_5" className="modal">
            <div className="modal-box w-7/12 max-w-4xl min-h-110  flex flex-col gap-5 py-10">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
               <h3 className="flex items-center gap-4 text-[20px] font-bold text-lg">
                    <IoMdPersonAdd className='text-blue-600 w-8 h-8' />
                     إنشاء طالب
                </h3>
    
                
            <div className='border border-gray-200 flex flex-col gap-6 p-6 rounded-xl bg-gray-50/50'>
                
                
                <form className='flex flex-col gap-4'>
                    
                    
                    <div className='flex items-center justify-between gap-4'>
                        <label className='w-1/4 font-semibold text-gray-700 text-sm'>الاسم بالكامل <span className='text-red-500'>*</span></label>
                        <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                            <input className='w-full outline-none text-sm text-gray-800' type="text" placeholder='الاسم بالكامل' />
                        </div>
                    </div>
    
                    
                    <div className='flex items-center justify-between gap-4'>
                        <label className='w-1/4 font-semibold text-gray-700 text-sm'>الرقم القومي <span className='text-red-500'>*</span></label>
                        <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                            <input className='w-full outline-none text-sm text-gray-800' type="text" placeholder='الرقم القومي' />
                        </div>
                    </div>
    
                    
                    <div className='flex items-center justify-between gap-4'>
                        <label className='w-1/4 font-semibold text-gray-700 text-sm'>كود الطالب <span className='text-red-500'>*</span></label>
                        <div className='bg-white p-2.5 flex-1 border border-gray-300 rounded-lg focus-within:border-blue-500 transition-all'>
                            <input className='w-full outline-none text-sm text-gray-800' type="text" placeholder='كود الطالب' />
                        </div>
                    </div>
    
                    
                    <div className='flex items-center justify-between gap-4'>
                        <label className='w-1/4 font-semibold text-gray-700 text-sm'>التخصص <span className='text-red-500'>*</span></label>
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
    
                    
                    <div className='flex items-center justify-between gap-4'>
                        <label className='w-1/4 font-semibold text-gray-700 text-sm'>الفرقة <span className='text-red-500'>*</span></label>
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
    
                
                <div className='flex items-center justify-start gap-3 pt-2'>
                    <button type="button" className='flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95 text-sm'>
                        <RiSave3Line className='w-6 h-6' />
                    حفظ التغيرات
                    </button>
                    <form method="dialog">
                        <button className='cursor-pointer border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl transition-all text-sm'>
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
