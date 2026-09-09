import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi"
import { LuClipboardList } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

export default function ExamsTable() {
  const navigate = useNavigate()
  const exams = [
    { id: 1, name: "Midterm Exam", type: "منتصف الترم", grade: 50, duration: "60 دقيقة", date: "15/10/2026", time: "10:00 ص", status: "قادم" },
    { id: 2, name: "Quiz 1", type: "اختبار قصير", grade: 20, duration: "20 دقيقة", date: "05/10/2026", time: "11:00 ص", status: "مكتمل" },
    { id: 3, name: "Quiz 2", type: "اختبار قصير", grade: 20, duration: "20 دقيقة", date: "20/10/2026", time: "12:00 م", status: "قادم" },
  ]

  return (
    <div dir="rtl" className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="flex flex-col gap-2 border-b border-gray-200 p-4 sm:p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-800 sm:text-lg">قائمة الاختبارات</h2>
          <p className="mt-1 text-xs text-gray-400 sm:text-sm">إدارة ومتابعة جميع اختبارات المقرر</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <LuClipboardList className="text-lg text-blue-600" />
          <span>3</span>
          <span> اختبارات</span>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-225 text-right text-sm">
          <thead className="bg-gray-50 text-xs text-gray-500">
            <tr>
              <th className="whitespace-nowrap px-4 py-4 font-semibold">#</th>
              <th className="whitespace-nowrap px-4 py-4 font-semibold">اسم الاختبار</th>
              <th className="whitespace-nowrap px-4 py-4 font-semibold">النوع</th>
              <th className="whitespace-nowrap px-4 py-4 font-semibold">الدرجة</th>
              <th className="whitespace-nowrap px-4 py-4 font-semibold">المدة</th>
              <th className="whitespace-nowrap px-4 py-4 font-semibold">موعد الاختبار</th>
              <th className="whitespace-nowrap px-4 py-4 font-semibold">الحالة</th>
              <th className="whitespace-nowrap px-4 py-4 text-center font-semibold">الإجراءات</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {exams.map((exam) => (
              <tr key={exam.id} className="transition-colors duration-200 hover:bg-gray-50">
                <td className="px-4 py-4 text-gray-400">{exam.id}</td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <LuClipboardList className="text-lg" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{exam.name}</p>
                      <p className="mt-1 text-xs text-gray-400">اختبار المقرر</p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className={`rounded-lg px-3 py-1.5 text-xs font-medium ${exam.type === "نهائي" ? "bg-purple-50 text-purple-600" : exam.type === "منتصف الترم" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"}`}>
                    {exam.type}
                  </span>
                </td>

                <td className="px-4 py-4 font-semibold text-gray-700">{exam.grade} درجة</td>

                <td className="px-4 py-4 text-gray-600">{exam.duration}</td>

                <td className="px-4 py-4">
                  <p className="font-medium text-gray-700">{exam.date}</p>
                  <p className="mt-1 text-xs text-gray-400">{exam.time}</p>
                </td>

                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${exam.status === "مكتمل" ? "bg-green-50 text-green-600" : exam.status === "قادم" ? "bg-orange-50 text-orange-600" : "bg-gray-100 text-gray-500"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${exam.status === "مكتمل" ? "bg-green-500" : exam.status === "قادم" ? "bg-orange-500" : "bg-gray-400"}`} />
                    {exam.status}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => navigate(`/Dashbord Doctor/ExamDetails/${exam.id}`)} className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600" title="عرض الاختبار">
                      <FiEye />
                    </button>

                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600" title="تعديل الاختبار">
                      <FiEdit2 />
                    </button>

                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600" title="حذف الاختبار">
                      <FiTrash2 />
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