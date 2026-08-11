import React from 'react'
import { CiClock2 } from 'react-icons/ci'

export default function TableTests() {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
        {/* head */}
        <thead className='text-[18px] font-bold bg-[#becff8] text-black'>
            <tr>
            <th>#</th>
            <th>المادة</th>
            <th>اسم الاختبار</th>
            <th>المدة</th>
            <th>التاريخ بدء الامتحان</th>
            <th>الحلة</th>
            <th>الأجراء</th>
            </tr>
        </thead>
        <tbody className='text-[18px] font-bold'>

            {/* row 2 */}
            <tr>
            <th>1</th>
            <td>ادارة الاعمال</td>
            <td>QUIZ</td>
            <td>20 دقيقة</td>
            <td>
                <span className='flex flex-col'>
                    <p>12/8/2026</p>
                    <p className='text-red-600'>9:00 AM</p>
                </span>
            </td>
            <td>
                <span className='bg-green-200 p-2 rounded-lg'>متاح</span>
            </td>
            <td>
                <span className='flex items-center justify-center text-white cursor-pointer bg-[#093be0] p-2 rounded-lg '>
                    <button className='cursor-pointer'>بدء الاختبار</button>
                </span>
            </td>
            </tr>

            {/* row 2 */}
            <tr>
            <th>1</th>
            <td>تصميم مواقع</td>
            <td>QUIZ</td>
            <td>20 دقيقة</td>
            <td>
                <span className='flex flex-col'>
                    <p>15/8/2026</p>
                    <p className='text-red-600'>9:00 AM</p>
                </span>
            </td>
            <td>
                <span className='bg-amber-200 p-2 rounded-lg'>لم يبدء</span>
            </td>
            <td>
                <span className='flex items-center justify-center text-white cursor-pointer bg-[#093be0] p-2 rounded-lg '>
                    <button className='cursor-pointer'>بدء الاختبار</button>
                </span>
            </td>
            </tr>

            {/* row 3 */}
            <tr>
            <th>1</th>
            <td>قواعد البياناات</td>
            <td>QUIZ</td>
            <td>20 دقيقة</td>
            <td>
                <span className='flex flex-col'>
                    <p>10/8/2026</p>
                    <p className='text-red-600'>9:00 AM</p>
                </span>
            </td>
            <td>
                <span className='bg-gray-300 p-2 rounded-lg'>انتهى</span>
            </td>
            <td>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className='w-full flex items-center justify-center bg-white border border-[#093be0] cursor-pointer text-[#093be0] p-2 rounded-lg ' onClick={()=>document.getElementById('my_modal_2').showModal()}>عرض النتائج</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                        <h3 className=" flex items-center justify-center font-bold text-lg">الدرجة</h3>
                        <div className="flex items-center justify-center font-bold text-lg py-4 text-green-700">
                            <p>20/</p>
                            <p>18</p>
                        </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                        </form>
                    </dialog>
            </td>
            </tr>
            
        </tbody>
        </table>
</div>
  )
}
