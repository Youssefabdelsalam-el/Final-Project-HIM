import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoEyeOutline, IoPeople } from 'react-icons/io5'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function TableStudent() {
  return (
    <div className='bg-white p-3 flex flex-col gap-4 rounded-2xl border border-gray-300'>
        <div className='flex items-center gap-2 justify-end text-[17px] font-bold'>
            <IoPeople className='text-blue-600 w-6 h-6' />
            <p>4350</p>
            <p>طالب</p>
        </div>
        <div className="overflow-x-auto p-2 ">
            <table className="table">
                {/* head */}
                <thead className='bg-gray-300 text-black'>
                <tr className='text-[18px]'>
                    <th>#</th>
                    <th>الاسم</th>
                    <th>كود الطالب</th>
                    <th>رقم القومي</th>
                    <th>التخصص</th>
                    <th> الفرقة</th>
                    <th>الإجراءات</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className='font-bold text-[15px]'>
                    <th>1</th>
                    <td>يوسف عبد السلام مصطفي</td>
                    <td>537573547</td>
                    <td>30653794645</td>
                    <td>نظم المعلومات الأعمال</td>
                    <td>الفرقة الثالثة</td>
                    <td>
                        <div className='flex items-center gap-3'>
                           <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <IoEyeOutline className='w-6 h-6' />
                           </button>

                           <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <AiOutlineEdit className='w-6 h-6' />
                           </button>

                           <button className='text-red-600 border-red-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <RiDeleteBinLine className='w-6 h-6' />
                           </button>
                        </div>
                    </td>
                </tr>
                {/* row 2 */}
                 <tr className='font-bold text-[15px]'>
                    <th>2</th>
                    <td>محمد علي السيد</td>
                    <td>536746297</td>
                    <td>30648257296</td>
                    <td>ادارة اعمال</td>
                    <td>الفرقة الثانية</td>
                    <td>
                        <div className='flex items-center gap-3'>
                           <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <IoEyeOutline className='w-6 h-6' />
                           </button>

                           <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <AiOutlineEdit className='w-6 h-6' />
                           </button>

                           <button className='text-red-600 border-red-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <RiDeleteBinLine className='w-6 h-6' />
                           </button>
                        </div>
                    </td>
                </tr>
                {/* row 3 */}
                <tr className='font-bold text-[15px]'>
                    <th>3</th>
                    <td>ايمان محمد عادل</td>
                    <td>536276878</td>
                    <td>30784935246</td>
                    <td>محاسبة ومراجعة</td>
                    <td>الفرقة الربعة</td>
                    <td>
                        <div className='flex items-center gap-3'>
                           <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <IoEyeOutline className='w-6 h-6' />
                           </button>

                           <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <AiOutlineEdit className='w-6 h-6' />
                           </button>

                           <button className='text-red-600 border-red-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <RiDeleteBinLine className='w-6 h-6' />
                           </button>
                        </div>
                    </td>
                </tr>
                {/* row 4 */}
                <tr className='font-bold text-[15px]'>
                    <th>4</th>
                    <td>علي محمد علي</td>
                    <td>5367983738</td>
                    <td>30278165489</td>
                    <td>تخصص عام</td>
                    <td>الفرقة الاولي</td>
                    <td>
                        <div className='flex items-center gap-3'>
                           <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <IoEyeOutline className='w-6 h-6' />
                           </button>

                           <button className='text-blue-600 border-blue-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <AiOutlineEdit className='w-6 h-6' />
                           </button>

                           <button className='text-red-600 border-red-200 shadow border p-1 cursor-pointer hover:bg-gray-300 '>
                             <RiDeleteBinLine className='w-6 h-6' />
                           </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className="join flex items-center gap-2 justify-center">
           <button className='border border-gray-300 p-2 text-blue-600 rounded-2xl hover:bg-gray-200 cursor-pointer'>
            <IoIosArrowForward className='w-4 h-4' />
           </button>
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked="checked" />

            <button className='border border-gray-300 p-2 text-blue-600 rounded-2xl hover:bg-gray-200 cursor-pointer'>
            <IoIosArrowBack className='w-4 h-4' />
           </button>
        </div>
    </div>
  )
}
