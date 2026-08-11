import React from 'react'

export default function TableData() {
  return (
    <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead className='bg-gray-200 text-[18px] text-black font-bold'>
      <tr>
        <th>#</th>
        <th>المادة</th>
        <th>التاريخ</th>
        <th>اليوم</th>
        <th>وقت المحاضره</th>
        <th>الحالة</th>
      </tr>
    </thead>
    <tbody className='text-[15px] font-bold'>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>تصميم مواقع</td>
        <td>10/8/2026</td>
        <td>الاتنين</td>
        <td>10:00 AM</td>
        <td>
          <span className='bg-green-200 px-4 rounded-2xl'>حاضر</span>
        </td>
      </tr>

      {/* row 2 */}
      <tr>
        <th>1</th>
        <td>تصميم مواقع</td>
        <td>10/8/2026</td>
        <td>الاتنين</td>
        <td>10:00 AM</td>
        <td>
          <span className='bg-red-200 px-4 rounded-2xl'>غائب</span>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
    </div>
  )
}
