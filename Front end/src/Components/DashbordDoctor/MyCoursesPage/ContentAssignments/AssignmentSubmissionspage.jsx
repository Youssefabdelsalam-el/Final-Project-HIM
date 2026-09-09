import { Link } from 'react-router-dom'
import { IoArrowBackOutline, IoSearchOutline, IoEyeOutline, IoDownloadOutline } from 'react-icons/io5'
import { MdCheckCircle, MdCancel, MdOutlineAssignment } from 'react-icons/md'
import NoteModel from './NoteModel'

export default function AssignmentSubmissionspage() {
  const submissions = [
    { id: 1, name: 'يوسف مصطفى', code: '20210345', status: 'تم التسليم', date: '2026/09/06', time: '10:30 ص', file: 'Assignment2.pdf', grade: '13 / 15' },
    { id: 2, name: 'أحمد محمد', code: '20210346', status: 'تم التسليم', date: '2026/09/06', time: '11:15 ص', file: 'ERD_Solution.pdf', grade: '14 / 15' },
    { id: 4, name: 'سارة حسن', code: '20210348', status: 'لم يسلم', date: '-', time: '-', file: '-', grade: '-' },
    { id: 5, name: 'علي إبراهيم', code: '20210349', status: 'تم التسليم', date: '2026/09/06', time: '09:45 ص', file: 'DB_HW2.pdf', grade: '12 / 15' },
  ]

  return (
    <>
      <div className="flex flex-col gap-4 sm:gap-5 p-3 sm:p-6">
        
        {/* الهيدر وزر الرجوع */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">عرض تسليمات الواجب</h1>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold">الواجب:</span>
              <p className="text-xs sm:text-sm text-gray-500">حل التمارين الخاصة بنماذج البيانات</p>
            </div>
          </div>

          <Link to="/Dashbord Doctor/CourseDetails" className="self-start sm:self-auto flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-600 transition hover:bg-gray-50">
            رجوع
            <IoArrowBackOutline className="text-base sm:text-lg" />
          </Link>
        </div>

        {/* كروت الإحصائيات */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 shrink-0">
              <MdOutlineAssignment className="text-xl sm:text-2xl" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">إجمالي الطلاب</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">40</h2>
              <p className="text-xs text-gray-400">طالب</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-50 text-green-600 shrink-0">
              <MdCheckCircle className="text-xl sm:text-2xl" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">تم التسليم</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">28</h2>
              <p className="text-xs text-gray-400">طالب</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-50 text-red-600 shrink-0">
              <MdCancel className="text-xl sm:text-2xl" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500">لم يسلموا</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">8</h2>
              <p className="text-xs text-gray-400">طالب</p>
            </div>
          </div>
        </div>

        {/* تفاصيل الواجب */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:p-5 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="mb-1 sm:mb-2 text-xs text-gray-500">موعد التسليم</p>
            <p className="text-sm sm:text-base font-semibold text-gray-800">15 سبتمبر 2026 - 11:59 م</p>
          </div>
          <div>
            <p className="mb-1 sm:mb-2 text-xs text-gray-500">الدرجة الكلية</p>
            <p className="text-sm sm:text-base font-semibold text-gray-800">15 درجة</p>
          </div>
          <div>
            <p className="mb-1 sm:mb-2 text-xs text-gray-500">وصف الواجب</p>
            <p className="text-sm sm:text-base font-semibold text-gray-800">حل التمارين الخاصة بنماذج البيانات</p>
          </div>
        </div>

        {/* حقل البحث، الفلتر، والجدول */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="flex flex-col gap-3 sm:gap-4 border-b border-gray-200 p-4 sm:p-5 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-80">
              <input type="text" placeholder="ابحث عن طالب..." className="w-full rounded-lg border border-gray-200 py-2 sm:py-2.5 pr-10 pl-4 text-xs sm:text-sm outline-none transition focus:border-blue-500" />
              <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-base sm:text-lg text-gray-400" />
            </div>

            <div className="filter flex flex-wrap gap-1 rounded-xl border border-gray-200 bg-gray-50 p-1 self-start md:self-auto">
              <input className="btn filter-reset border-0 bg-transparent text-gray-500 shadow-none transition-all duration-300 hover:bg-white hover:text-blue-600 hover:shadow-sm checked:bg-blue-600 checked:text-white checked:shadow-md text-xs sm:text-sm" type="radio" name="submissionStatus" aria-label="الكل" defaultChecked />
              <input className="btn border-0 bg-transparent text-gray-500 shadow-none transition-all duration-300 hover:bg-white hover:text-green-600 hover:shadow-sm checked:bg-green-600 checked:text-white checked:shadow-md text-xs sm:text-sm" type="radio" name="submissionStatus" aria-label="تم التسليم" />
              <input className="btn border-0 bg-transparent text-gray-500 shadow-none transition-all duration-300 hover:bg-white hover:text-red-600 hover:shadow-sm checked:bg-red-600 checked:text-white checked:shadow-md text-xs sm:text-sm" type="radio" name="submissionStatus" aria-label="لم يسلم" />
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="table w-full min-w-212.5">
              <thead>
                <tr className="text-gray-600">
                  <th className="text-center whitespace-nowrap">#</th>
                  <th className="whitespace-nowrap">اسم الطالب</th>
                  <th className="whitespace-nowrap">حالة التسليم</th>
                  <th className="whitespace-nowrap">وقت التسليم</th>
                  <th className="whitespace-nowrap">الملف المرفق</th>
                  <th className="whitespace-nowrap">الدرجة</th>
                  <th className="whitespace-nowrap">الملاحظه</th>
                  <th className="text-center whitespace-nowrap">الإجراءات</th>
                </tr>
              </thead>

              <tbody>
                {submissions.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <th className="text-center font-medium whitespace-nowrap">{student.id}</th>

                    <td className="whitespace-nowrap">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-semibold text-gray-800 text-xs sm:text-sm">{student.name}</span>
                        <span className="text-[11px] sm:text-xs text-gray-400">{student.code}</span>
                      </div>
                    </td>

                    <td className="whitespace-nowrap">
                      {student.status === 'تم التسليم' && <span className="inline-flex rounded-lg bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">✓ تم التسليم</span>}
                      {student.status === 'لم يسلم' && <span className="inline-flex rounded-lg bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600">⊗ لم يسلم</span>}
                    </td>

                    <td className="whitespace-nowrap">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs sm:text-sm text-gray-700">{student.date}</span>
                        <span className="text-[11px] sm:text-xs text-gray-400">{student.time}</span>
                      </div>
                    </td>

                    <td className="whitespace-nowrap">
                      {student.file !== '-' ? (
                        <button className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800">{student.file}</button>
                      ) : (
                        <span className="text-gray-400">--</span>
                      )}
                    </td>

                    <td className="whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm text-gray-400">15</span>
                        <span>/</span>
                        <input type="number" placeholder="0" className="w-12 sm:w-16 rounded-lg border border-gray-200 px-1.5 sm:px-2 py-1 sm:py-2 text-center text-xs sm:text-sm outline-none focus:border-blue-500" />
                      </div>
                    </td>

                    <td className="whitespace-nowrap">
                      <NoteModel />
                    </td>

                    <td className="whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                        <a href={student.fileUrl} target="_blank" rel="noreferrer" className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white">
                          <IoEyeOutline className="text-base sm:text-lg" />
                        </a>

                        <a href={student.fileUrl} download className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 transition hover:bg-green-600 hover:text-white">
                          <IoDownloadOutline className="text-base sm:text-lg" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}