import React from 'react'
import { IoMdDownload } from 'react-icons/io'

export default function ListOfSubjects() {
  return (
    <div className='w-full bg-white rounded-2xl border border-[#E4EAF3] overflow-hidden p-2'>
        <div className="overflow-x-auto">
  <table className="table w-full text-right border-collapse">
    {/* head */}
    <thead>
      <tr className="border-b border-[#E4EAF3] text-[#0B1F4D]">
        <th className='px-6 py-6 text-[18px] font-bold'>الماده</th>
        <th className='px-6 py-6 text-[18px] font-bold'>اسم الدكتور</th>
        <th className="px-6 py-6 text-[18px] font-bold text-center">تحميل الكتاب</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="border-b border-[#E4EAF3] hover:bg-[#7c7c7c56] cursor-pointer">
          <td className="px-6 py-5">
             <p className="text-sm sm:text-[17px] font-bold text-[#0B1F4D]"> تصميم الويب </p>
          </td>

          <td className="px-4 sm:px-6 py-4 sm:py-5 text-[#53627A] text-sm sm:text-base">
            <div className='flex items-center gap-2'>
                <p>د /</p>
                <p>احمد محمد</p>
            </div>
          </td>

          <td className="px-6 py-5 text-center">
            <button className="text-[#0057D9] hover:text-[#003B91] cursor-pointer">
              <IoMdDownload className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
            </button>
          </td>
        </tr>

        {/* row 2 */}

        <tr className="border-b border-[#E4EAF3] hover:bg-[#7c7c7c56] cursor-pointer">
          <td className="px-6 py-5">
             <p className="text-sm sm:text-[17px] font-bold text-[#0B1F4D]"> قواعد البيانت</p>
          </td>

          <td className="px-4 sm:px-6 py-4 sm:py-5 text-[#53627A] text-sm sm:text-base">
            <div className='flex items-center gap-2'>
                <p>د /</p>
                <p>محمد علي</p>
            </div>
          </td>

          <td className="px-6 py-5 text-center">
            <button className="text-[#0057D9] hover:text-[#003B91] cursor-pointer">
              <IoMdDownload className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
            </button>
          </td>
        </tr>

        {/* row 3 */}

        <tr className="border-b border-[#E4EAF3] hover:bg-[#7c7c7c56] cursor-pointer">
          <td className="px-6 py-5">
             <p className="text-sm sm:text-[17px] font-bold text-[#0B1F4D]"> هياكل البيانات</p>
          </td>

          <td className="px-4 sm:px-6 py-4 sm:py-5 text-[#53627A] text-sm sm:text-base">
            <div className='flex items-center gap-2'>
                <p>د /</p>
                <p>ساره احمد</p>
            </div>
          </td>

          <td className="px-6 py-5 text-center">
            <button className="text-[#0057D9] hover:text-[#003B91] cursor-pointer">
              <IoMdDownload className="w-5 h-5 sm:w-6 sm:h-6 mx-auto" />
            </button>
          </td>
        </tr>


    </tbody>
  </table>
</div>
    </div>
  )
}
