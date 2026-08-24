import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoIosCheckbox } from 'react-icons/io'
import { IoArrowUpSharp } from 'react-icons/io5'
import { MdOutlineFileUpload, MdOutlineKeyboardArrowDown } from 'react-icons/md'


export default function Upgradebutton() {
  return (
    // ترقية الطلاب
    <>
    <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl cursor-pointer hover:bg-blue-600 hover:text-white font-bold'  onClick={()=>document.getElementById('my_modal_1').showModal()}>
        <IoArrowUpSharp className='w-5 h-5 text-blue-600 group-hover:text-white' />
         ترقية الطلاب
    </button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box w-11/12 max-w-7xl max-h-[90vh] overflow-y-auto flex flex-col gap-5 py-6 sm:py-10">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg flex items-center gap-4 text-[20px] ">
    
                 <MdOutlineFileUpload className="text-blue-600 w-8 h-8" />
                 ترقية الطلاب
                            
            </h3>
             <p className="py-4">اختر الفرقة الحالية والفرقة التي سيتم ترقية الطالب اليها</p>
    
            <div className='flex flex-col sm:flex-row items-stretch gap-5 sm:gap-10'>
                <div className='flex flex-col gap-4'>
                <label>من الفرقة (الفرقة الحالية) *</label>
                <div className="relative w-full sm:w-48">
                    <select className=" appearance-none w-full h-7 bg-white border border-[#E4EAF3] rounded-2xl px-3 sm:px-4 pl-9 sm:pl-10 text-[#0B1F4D] font-semibold text-sm shadow-sm outline-none cursor-pointer" >
                        <option>الفرقة الحالية</option>
                        <option>الفرقة الاولي</option>
                        <option>الفرقة الثانية</option>
                        <option>الفرقة الثالثة</option>
                        <option>الفرثة الرابعة</option>
                    </select>
                                               
                    <div className="pointer-events-none absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#0057D9]">
                        <MdOutlineKeyboardArrowDown className='w-5 h-5' />

                    </div>
                </div>
            </div>
    
            <div className='flex flex-col gap-4'>
                <label>الي الفرقة (التي سيتم الترقية اليها)*</label>
                <div className="relative w-full sm:w-48">
                    <select className=" appearance-none w-full h-7 bg-white border border-[#E4EAF3] rounded-2xl px-3 sm:px-4 pl-9 sm:pl-10 text-[#0B1F4D] font-semibold text-sm shadow-sm outline-none cursor-pointer" >
                        <option>الترقية الي</option>
                        <option>الفرقة الثانية</option>
                        <option>الفرقة الثالثة</option>
                        <option>الفرثة الرابعة</option>
                    </select>
                                               
                    <div className="pointer-events-none absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#0057D9]">
                        <MdOutlineKeyboardArrowDown className='w-5 h-5' />
                    </div>
                </div>
            </div>
            </div>
    
            <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4'>
            <div className='relative flex items-center bg-white p-2 w-full sm:w-80 md:w-96 border border-[#7e7c7c8c] rounded-3xl'>
                <input className='w-full outline-none px-2 text-sm sm:text-base' type="text" placeholder="ابحث عن الطالب" />
                <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ' />
            </div>
                        
            <div className='flex items-center gap-2 whitespace-nowrap'>
                <p>تحديد الكل</p>
                <p>(200)</p>
                <input className='w-5 h-5' type="checkbox" name="" id="" />
            </div>
            </div>
    
    
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                {/* head */}
                <thead className='bg-blue-100 text-black'>
                    <tr>
                    <th>#</th>
                    <th>الاسم</th>
                    <th>الفرقة</th>
                    <th>كود الطالب</th>
                    <th>الرقم القومي</th>
                    <th>التخصص</th>
                    <th>الحالة</th>
                    <th><IoIosCheckbox className='w-6 h-6 text-blue-600' /></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr className='text-[15px] font-bold'>
                    <th>1</th>
                    <td>يوسف عبد السلام مصطفي</td>
                    <td>الثانية</td>
                    <td>2203848595</td>
                    <td>438487580935</td>
                    <th>نظم ومعلومات الاعمال</th>
                    <th>
                        <p className='p-2 bg-green-200 text-green-800 rounded-2xl flex justify-center'>ناجح</p>
                    </th>
                        <th>
                        <input className='w-5 h-5 text-green-800' type="checkbox" name="" id="" />
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr className='text-[15px] font-bold'>
                    <th>1</th>
                    <td>احمد علي حسن</td>
                    <td>الثانية</td>
                    <td>2336746283</td>
                    <td>434234142343</td>
                    <th>محاسبة ومراجعة</th>
                    <th>
                        <p className='p-2 bg-red-200 text-red-800 rounded-2xl flex justify-center'>ساقط</p>
                    </th>
                        <th>
                        <input className='w-5 h-5 ' type="checkbox" name="" id="" />
                        </th>
                    </tr>
                </tbody>
                </table>
            </div>
    
                <div className='flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4'>
                    <div className='flex flex-wrap items-center gap-3'>
                        <button className='flex items-center gap-1 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-900 cursor-pointer'>
                         تأكيد ترقية
                         <p>(190)</p>
                         طالب
    
                        </button>
                        <form method="dialog">
                            <button className='border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold py-2.5 px-6 rounded-xl transition-all text-sm'>
                                 إلغاء
                            </button>
                        </form>
                    </div>
    
                    <div className='flex items-center gap-1 justify-end'>
                        <p>تم تحديد</p>
                        <p className='text-blue-600'>(190)</p>
                        <p>من اصل</p>
                        <p>200</p>
                    </div>
                </div>
            </div>
        </dialog>
    </>
  )
}
