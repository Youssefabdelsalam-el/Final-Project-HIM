import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { MdCheckCircle, MdCancel } from 'react-icons/md'

export default function AttendanceTable() {
  const students = [
    { id: 1, name: 'يوسف محمد مصطفى', code: '20210345' },
    { id: 2, name: 'أحمد محمد علي', code: '20210346' },
    { id: 3, name: 'محمد علي حسن', code: '20210347' },
    { id: 4, name: 'أحمد حسين أحمد', code: '20210348' },
    { id: 5, name: 'علي إبراهيم محمد', code: '20210349' },
    { id: 6, name: 'محمود طه أحمد', code: '20210350' },
    { id: 7, name: 'نورهان السيد', code: '20210351' },
    { id: 8, name: 'آية خالد عبد الله', code: '20210352' },
    { id: 9, name: 'كريم محمد علي', code: '20210353' },
    { id: 10, name: 'محمد أحمد مصطفى', code: '20210354' },
  ]

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-gray-200 p-4 sm:p-5 md:flex-row md:items-center md:justify-between">
            <div className="flex min-w-0 flex-col gap-1">
                <h2 className="text-base font-bold text-gray-800 sm:text-lg">تسجيل الحضور والغياب</h2>
                <p className="text-xs text-gray-400 sm:text-sm">حدد حالة حضور كل طالب في المحاضرة</p>
            </div>

            <div className="relative w-full md:w-72">
                <input type="text" placeholder="ابحث عن طالب..." className="w-full rounded-lg border border-gray-200 py-2.5 pr-10 pl-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            </div>
        </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-gray-50 text-gray-600">
              <th className="text-center">#</th>
              <th>اسم الطالب</th>
              <th>كود الطالب</th>
              <th className="text-center">الحالة</th>
              <th className="text-center">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <th className="text-center font-medium text-gray-500">{student.id}</th>

                <td>
                  <span className="font-medium text-gray-800">{student.name}</span>
                </td>

                <td>
                  <span className="text-sm text-gray-500">{student.code}</span>
                </td>

                <td className="text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600">
                    <MdCheckCircle />
                  </span>
                </td>

                <td>
                    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                        <button className="flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-600 transition hover:bg-green-600 hover:text-white cursor-pointer">
                        <MdCheckCircle className="text-base" />
                         حاضر
                        </button>

                        <button className="flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-600 hover:text-white cursor-pointer">
                        <MdCancel className="text-base" />
                         غائب
                        </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}