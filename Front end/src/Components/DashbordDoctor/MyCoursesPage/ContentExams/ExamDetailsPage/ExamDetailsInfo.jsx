import { LuCalendarDays, LuClock3, LuFileText, LuGraduationCap, LuListChecks, LuTimer, LuUsers } from "react-icons/lu"

export default function ExamDetailsInfo() {
  return (
    <div dir="rtl" className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-gray-800">تفاصيل الاختبار</h2>
        <p className="mt-1 text-sm text-gray-400">معلومات وإعدادات الاختبار</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <LuFileText className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">نوع الاختبار</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">اختبار منتصف الترم</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <LuGraduationCap className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">الدرجة الكلية</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">50 درجة</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
              <LuTimer className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">مدة الاختبار</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">60 دقيقة</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <LuCalendarDays className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">تاريخ البداية</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">15 سبتمبر 2026</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
              <LuClock3 className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">وقت البداية</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">10:00 صباحًا</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <LuUsers className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">عدد المحاولات</p>
              <p className="mt-1 text-sm font-semibold text-gray-700">محاولة واحدة</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white">
        <div className="border-b border-gray-100 px-4 py-4">
          <div className="flex items-center gap-2">
            <LuListChecks className="text-lg text-blue-600" />
            <h3 className="text-sm font-bold text-gray-800">إعدادات الاختبار</h3>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          <div className="flex items-center justify-between gap-4 px-4 py-4">
            <div>
              <p className="text-sm font-medium text-gray-700">ترتيب الأسئلة</p>
              <p className="mt-1 text-xs text-gray-400">تظهر الأسئلة بنفس الترتيب لجميع الطلاب</p>
            </div>
            <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">ثابت</span>
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-4">
            <div>
              <p className="text-sm font-medium text-gray-700">عرض النتيجة</p>
              <p className="mt-1 text-xs text-gray-400">يتم عرض النتيجة بعد انتهاء الاختبار</p>
            </div>
            <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">مفعل</span>
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-4">
            <div>
              <p className="text-sm font-medium text-gray-700">السماح بالدخول المتأخر</p>
              <p className="mt-1 text-xs text-gray-400">يمكن للطالب الدخول بعد بداية الاختبار</p>
            </div>
            <span className="shrink-0 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-500">غير مفعل</span>
          </div>
        </div>
      </div>
    </div>
  )
}