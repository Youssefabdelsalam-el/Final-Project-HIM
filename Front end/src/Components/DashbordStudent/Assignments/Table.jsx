import React from 'react'
import { IoCalendarOutline, IoEyeOutline } from 'react-icons/io5'
import { LuUpload } from 'react-icons/lu'

export default function Table() {
  return (
    <div className='flex flex-col justify-center'>
        <div className="w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table w-full min-w-225">
            {/* head */}
            <thead>
                <tr className='text-[18px] text-black font-bold bg-[#0011ff1c]'>
                <th>#</th>
                <th>المادة</th>
                <th>وصف الواجب</th>
                <th>اخر موعد للتسليم</th>
                <th>رفع الواجب</th>
                <th>الدرجة</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr>
                <th>1</th>
                <td className='text-[15px] font-bold'>Web design</td>
                <td className='text-[15px]'>تصميم صفحه Login باستخدام HTML&CSS</td>
                <td>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 font-bold'>
                            <IoCalendarOutline className='w-4 h-4' />
                            <p>15/10/2026</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='font-bold'>الساعة</p>
                            <p className='font-bold'>11:00</p>
                        </div>
                    </div>
                </td>

                <td>
                    <div className='flex items-center justify-center gap-3 bg-[#cfe0fc83] w-40 p-2 rounded-lg border-2 border-dashed text-[#0206f5] cursor-pointer'>
                        <LuUpload className='w-4 h-4' />
                        <button className='text-[18px]'>رفع</button>
                    </div>
                </td>

                <td>
                    <div className='border-b-2 w-10'></div>
                </td>

                </tr>

                {/* row 2 */}

                 <tr>
                <th>1</th>
                <td className='text-[15px] font-bold'>Web design</td>
                <td className='text-[15px]'>تصميم صفحه Dashbord باستخدام flexbox</td>
                <td>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 font-bold'>
                            <IoCalendarOutline className='w-4 h-4' />
                            <p>10/10/2026</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='font-bold'>الساعة</p>
                            <p className='font-bold'>11:00</p>
                        </div>
                    </div>
                </td>

                <td>
                    <div className='flex items-center justify-center gap-3 bg-[#4ccc482d] w-40 p-2 rounded-lg   text-[#22ad1e] cursor-pointer'>
                        <IoEyeOutline className='w-6 h-6' />
                        <p className='text-[18px] font-bold'>عرض</p>
                    </div>
                </td>

                <td>
                   <div className='flex text-[17px] text-[#22ad1e] font-bold'>
                     <p>20/</p>
                     <p>18</p>
                   </div>
                </td>

                </tr>

                {/* row 3 */}

                 <tr>
                <th>1</th>
                <td className='text-[15px] font-bold'>Web design</td>
                <td className='text-[15px]'>تصميم صفحه Dashbord باستخدام flexbox</td>
                <td>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-2 font-bold'>
                            <IoCalendarOutline className='w-4 h-4' />
                            <p>10/10/2026</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='font-bold'>الساعة</p>
                            <p className='font-bold'>11:00</p>
                        </div>
                    </div>
                </td>

                <td>
                    <div className='flex items-center justify-center gap-3 bg-[#4ccc482d] w-40 p-2 rounded-lg   text-[#22ad1e] cursor-pointer'>
                        <IoEyeOutline className='w-6 h-6' />
                        <p className='text-[18px] font-bold'>عرض</p>
                    </div>
                </td>

                <td>
                   <div className='flex text-[17px] text-[#f04f1f] font-bold'>
                    <p className='bg-[#f53a0121] p-2 rounded-2xl'>انتظر التصحيح</p>
                   </div>
                </td>

                </tr>
            </tbody>
            </table>
        </div>
    </div>
  )
}
