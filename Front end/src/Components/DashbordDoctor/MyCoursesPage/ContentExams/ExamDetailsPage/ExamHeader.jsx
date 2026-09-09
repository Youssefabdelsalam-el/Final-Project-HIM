import { FiArrowRight, FiEdit2, FiTrash2 } from "react-icons/fi";
import { LuClipboardCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function ExamHeader() {
  const navigate = useNavigate();
  return (
    <div dir="rtl" className="rounded-xl border border-gray-200 bg-white p-3.5 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        
        {/* قسم العنوان والزر الخلفي */}
        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5">
          {/* زر العودة */}
          <button 
            onClick={() => navigate(-1)} 
            className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
            aria-label="رجوع"
          >
            <FiArrowRight className="text-base sm:text-lg" />
          </button>

          {/* أيقونة الاختبار */}
          <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <LuClipboardCheck className="text-lg sm:text-xl" />
          </div>

          {/* نصوص العنوان */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h1 className="text-base font-bold text-gray-800 sm:text-xl truncate">
                Midterm Exam
              </h1>
              <span className="shrink-0 rounded-full bg-orange-50 px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold text-orange-600">
                قادم
              </span>
            </div>
            <p className="mt-0.5 text-xs text-gray-400 sm:text-sm whitespace-normal wrap-break-word">
              اختبار منتصف الترم • مبادئ البرمجة
            </p>
          </div>
        </div>

        {/* قسم أزرار التعديل والحذف */}
        <div className="flex items-center gap-2 pt-2 border-t border-gray-100 sm:pt-0 sm:border-t-0 lg:w-auto">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-600 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95 sm:flex-none">
            <FiEdit2 className="text-sm sm:text-base" />
            <span>تعديل</span>
          </button>

          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-100 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-50 active:scale-95 sm:flex-none">
            <FiTrash2 className="text-sm sm:text-base" />
            <span>حذف</span>
          </button>
        </div>

      </div>
    </div>
  );
}