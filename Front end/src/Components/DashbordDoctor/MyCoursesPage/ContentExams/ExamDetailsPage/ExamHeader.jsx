import { FiArrowRight, FiEdit2, FiTrash2 } from "react-icons/fi"
import { LuClipboardCheck } from "react-icons/lu"
import { useNavigate } from "react-router-dom"

export default function ExamHeader() {
    const navigate = useNavigate()
  return (
    <div dir="rtl" className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
            <FiArrowRight className="text-lg" />
          </button>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <LuClipboardCheck className="text-xl" />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-lg font-bold text-gray-800 sm:text-xl">Midterm Exam</h1>
              <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">قادم</span>
            </div>
            <p className="mt-1 text-xs text-gray-400 sm:text-sm">اختبار منتصف الترم • مبادئ البرمجة</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 sm:flex-none">
            <FiEdit2 />
            تعديل
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-100 px-4 py-2.5 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-50 sm:flex-none">
            <FiTrash2 />
            حذف
          </button>
        </div>
      </div>
    </div>
  )
}