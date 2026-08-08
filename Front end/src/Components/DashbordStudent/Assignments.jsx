import React from 'react'
import { BiTask } from 'react-icons/bi'

export default function Assignments() {
  return (
    <div className='bg-[#ffffff] p-4 md:p-5 rounded-2xl flex flex-col gap-4 w-full'>
        <div className='flex items-center justify-between text-[#1300c0]'>
            <h1 className='text-[15px] font-bold'>الواجبات</h1>
            <BiTask  className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <div className="w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table min-w-175 text-xs md:text-sm lg:text-base">
            {/* head */}
            <thead>
              <tr className='text-[#1300c0] text-xs md:text-sm'>
                <th>#</th>
                <th>الماده</th>
                <th>الواجب</th>
                <th>اخر موعد للتسليم</th>
                <th>الحاله</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className=' text-xs md:text-sm'>
                <th>1</th>
                <td>تصميم مواقع</td>
                <td>الواجب 3</td>
                <td>20 مايو 2025</td>
                <td><p className='bg-[#FFF3DD] rounded-full px-2 py-1 md:px-3 md:py-2 text-center text-xs md:text-sm lg:text-base text-[#F5A623] whitespace-nowrap'>لم يتم التسليم</p></td>
              </tr>
              {/* row 2 */}
              <tr className=' text-xs md:text-sm'>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td><p className='bg-[#E4F8EF] rounded-full px-2 py-1 md:px-3 md:py-2 text-center text-xs md:text-sm lg:text-base text-[#48B98A] whitespace-nowrap'>تم التسليم</p></td>
              </tr>
              {/* row 3 */}
              <tr className=' text-xs md:text-sm'>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Blue</td>
                <td><p className='bg-[#FFF3DD] rounded-full px-2 py-1 md:px-3 md:py-2 text-center text-xs md:text-sm lg:text-base text-[#F5A623] whitespace-nowrap'>لم يتم التسليم</p></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}
