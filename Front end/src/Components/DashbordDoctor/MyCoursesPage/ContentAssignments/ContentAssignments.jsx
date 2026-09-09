import React from 'react'
import { MdEdit } from 'react-icons/md'
import { IoEyeOutline } from 'react-icons/io5'
import AddAssignmentsModal from './AddAssignmentsModal'
import DeletAssignmentModel from './DeletAssignmentModel'
import { Link } from 'react-router-dom'

export default function ContentAssignments() {
  return (
   <>
   <div className="space-y-4 sm:space-y-6">
      {/* الهيدر وزر الإضافة */}
      <div className="title-content flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-base sm:text-[18px] font-bold text-gray-800">
            الواجب
          </h1>
          <p className="text-xs sm:text-[15px] text-gray-500">
            لادارة الواجبات الخاصة بالمادة
          </p>
        </div>
        
        {/* اضافة واجب جديد */}
        <div className="w-full sm:w-auto">
          <AddAssignmentsModal />
        </div>
      </div>

      {/* نفس الجدول الخاص بك مع التجاوب */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="table w-full min-w-175">
          <thead>
            <tr className="text-gray-600">
              <th className="text-center whitespace-nowrap">رقم الواجب</th>
              <th className="whitespace-nowrap">عنوان الواجب</th>
              <th className="whitespace-nowrap">موعد التسليم</th>
              <th className="whitespace-nowrap">الدرجة</th>
              <th className="whitespace-nowrap">تم التسليم</th>
              <th className="text-center whitespace-nowrap">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {/* الصف الأول */}
            <tr className="hover:bg-gray-50">
              <th className="text-center font-medium">1</th>

              <td className="whitespace-nowrap">
                <div className="flex flex-col gap-1">
                  <span className="font-medium text-gray-800">
                    نماذج البيانات
                  </span>

                  <span className="text-xs text-gray-400">
                    حل التمارين الخاصة بنماذج البيانات
                  </span>
                </div>
              </td>

              <td className="text-gray-500 whitespace-nowrap">
                <div className="flex flex-col gap-1">
                  <span>2026/09/15</span>
                  <span className="text-xs">11:59 م</span>
                </div>
              </td>

              <td className="whitespace-nowrap">
                <span className="font-semibold text-gray-700">
                  10
                </span>
                <span className="mr-1 text-xs text-gray-400">
                  درجة
                </span>
              </td>

              <td className="whitespace-nowrap">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1 font-medium text-gray-700">
                    <p>50</p>
                    <span>/</span>
                    <p>20</p>
                  </span>
                  <span className="text-xs text-gray-400">
                    طالب
                  </span>
                </div>
              </td>

              <td className="whitespace-nowrap">
                <div className="flex items-center justify-center gap-2">

                  {/* عرض */}
                  <Link 
                    to="/Dashbord Doctor/AssignmentSubmissions/1" 
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-green-600 bg-green-50 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <IoEyeOutline className="text-base sm:text-lg" />
                  </Link>

                  {/* تعديل */}
                  <button className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                    <MdEdit className="text-base sm:text-lg" />
                  </button>

                  <DeletAssignmentModel />

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </>
  )
}
