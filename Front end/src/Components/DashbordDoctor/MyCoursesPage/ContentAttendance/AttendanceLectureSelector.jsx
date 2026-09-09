import React from 'react'
import { MdMenuBook, MdAccessTime, MdCalendarToday, MdSave } from 'react-icons/md'

export default function AttendanceLectureSelector() {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-blue-50 p-5">
        <div className="flex flex-col gap-1">
            <h2 className="text-base font-bold text-gray-800">اختر المحاضرة</h2>
            <p className="text-xs text-gray-400">حدد المحاضرة التي تريد تسجيل الحضور لها</p>
        </div>

        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">المحاضرة</label>
            <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                <option>المحاضرة رقم 5</option>
                <option>المحاضرة رقم 4</option>
                <option>المحاضرة رقم 3</option>
                <option>المحاضرة رقم 2</option>
                <option>المحاضرة رقم 1</option>
                </select>
                <MdMenuBook className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            </div>
            </div>

            <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">التاريخ</label>
            <input type="date" defaultValue="2026-06-08" className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </div>

            <div className="flex justify-end">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 hover:shadow-md cursor-pointer">
                <MdSave className="text-lg" />
             حفظ الحضور
            </button>
            </div>
        </div>
    </div>
  )
}