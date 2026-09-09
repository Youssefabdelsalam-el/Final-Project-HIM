
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { MdEdit} from 'react-icons/md'
import AddLectureModal from './AddLectureModal'
import DeletLectureModel from './DeletLectureModel'

export default function ContentLectures() {
  return (
    <>
    <div className="space-y-4 sm:space-y-6">
      {/* الهيدر وزر الإضافة */}
      <div className="title-content flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-base sm:text-[18px] font-bold text-gray-800">
            المحاضرات
          </h1>
          <p className="text-xs sm:text-[15px] text-gray-500">
            لادارة المحاضرات والملفات الخاصة بالمادة
          </p>
        </div>

        {/* إضافة محاضرة جديدة */}
        <div className="w-full sm:w-auto">
          <AddLectureModal />
        </div>
      </div>

      {/* نفس الجدول الخاص بك مع التجاوب */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="table w-full min-w-150">
          <thead>
            <tr className="text-gray-600">
              <th className="text-center whitespace-nowrap">رقم المحاضرة</th>
              <th className="whitespace-nowrap">عنوان المحاضرة</th>
              <th className="whitespace-nowrap">تاريخ الإضافة</th>
              <th className="whitespace-nowrap">الملف المرفق</th>
              <th className="text-center whitespace-nowrap">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {/* الصف */}
            <tr>
              <th className="text-center font-medium">1</th>

              <td className="font-medium text-gray-800 whitespace-nowrap">
                Introduction to English
              </td>

              <td className="text-gray-500 whitespace-nowrap">
                2026/09/06
              </td>

              <td className="whitespace-nowrap">
                <button className="flex items-center gap-2 sm:gap-3 text-blue-600 hover:text-blue-800 cursor-pointer">
                  <span className="text-xs sm:text-sm">Lecture 1.pdf</span>

                  <div className="text-red-600 bg-red-100 p-2 sm:p-3 rounded-2xl shrink-0">
                    <BsFileEarmarkPdfFill className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </button>
              </td>

              <td className="whitespace-nowrap">
                <div className="flex items-center justify-center gap-2">
                  {/* تعديل */}
                  <button className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                    <MdEdit className="text-base sm:text-lg" />
                  </button>

                  <DeletLectureModel />
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
