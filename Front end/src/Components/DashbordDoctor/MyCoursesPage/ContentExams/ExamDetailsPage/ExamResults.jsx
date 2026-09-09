import { FiSearch } from "react-icons/fi"
import { LuAward, LuCircleCheck, LuCircleX, LuUsers } from "react-icons/lu"

export default function ExamResults() {
  return (
    <div dir="rtl" className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-gray-800">نتائج الاختبار</h2>
        <p className="mt-1 text-sm text-gray-400">عرض أداء الطلاب ودرجاتهم في الاختبار</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <LuUsers className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">إجمالي الطلاب</p>
              <p className="mt-1 text-lg font-bold text-gray-800">40</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
              <LuCircleCheck className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">أتموا الاختبار</p>
              <p className="mt-1 text-lg font-bold text-gray-800">35</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
              <LuAward className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">متوسط الدرجات</p>
              <p className="mt-1 text-lg font-bold text-gray-800">38 / 50</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
              <LuCircleCheck className="text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-400">نسبة النجاح</p>
              <p className="mt-1 text-lg font-bold text-gray-800">82%</p>
            </div>
          </div>
        </div>
      </div>

     <div dir="rtl" className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"> 
        {/* الهيدر: متجاوب بالكامل في الشاشات الصغيرة */}
        <div className="flex flex-col gap-3.5 border-b border-gray-100 p-4 sm:p-5 sm:flex-row sm:items-center sm:justify-between"> 
          <div> 
            <h3 className="text-sm font-bold text-gray-800">درجات الطلاب</h3> 
            <p className="mt-0.5 text-xs text-gray-400">نتائج الطلاب المشاركين في الاختبار</p> 
          </div> 

          <div className="flex flex-col-reverse gap-2.5 sm:flex-row sm:items-center sm:gap-3">
            {/* حقل البحث: يمتد بالكامل في الموبايل */}
            <div className="relative w-full sm:w-64">
              <FiSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="ابحث باسم الطالب أو الكود..."
                className="h-9 w-full rounded-xl border border-gray-200 bg-gray-50/50 pr-9 pl-4 text-xs text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <span className="w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              35 طالب
            </span> 
          </div>
        </div> 

        {/* الجدول: التمرير الأفقي مضبوط بدون كسر عرض الجدول */}
        <div className="overflow-x-auto"> 
          <table className="w-full min-w-150 text-right"> 
            <thead> 
              <tr className="border-b border-gray-100 bg-gray-50/70 text-xs text-gray-400"> 
                <th className="w-14 px-3.5 py-3.5 text-center font-medium">رقم</th> 
                <th className="px-3.5 py-3.5 font-medium">اسم الطالب</th> 
                <th className="px-3.5 py-3.5 font-medium">كود الطالب</th> 
                <th className="px-3.5 py-3.5 text-center font-medium">الدرجة</th> 
                <th className="px-3.5 py-3.5 text-center font-medium">النسبة</th> 
                <th className="px-3.5 py-3.5 text-center font-medium">الحالة</th> 
              </tr> 
            </thead> 

            <tbody className="divide-y divide-gray-100"> 
              <tr className="transition-colors duration-200 hover:bg-gray-50/70"> 
                <td className="px-3.5 py-3.5 text-center text-xs sm:text-sm font-semibold text-gray-500">1</td> 
                <td className="px-3.5 py-3.5 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">يوسف مصطفى</td> 
                <td className="px-3.5 py-3.5 text-xs sm:text-sm text-gray-500 whitespace-nowrap">20210345</td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="text-xs sm:text-sm font-bold text-gray-700">45 / 50</span> 
                </td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="text-xs sm:text-sm font-semibold text-green-600">90%</span> 
                </td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="inline-flex rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-600">ناجح</span> 
                </td> 
              </tr> 

              <tr className="transition-colors duration-200 hover:bg-gray-50/70"> 
                <td className="px-3.5 py-3.5 text-center text-xs sm:text-sm font-semibold text-gray-500">2</td> 
                <td className="px-3.5 py-3.5 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">أحمد محمد</td> 
                <td className="px-3.5 py-3.5 text-xs sm:text-sm text-gray-500 whitespace-nowrap">20210346</td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="text-xs sm:text-sm font-bold text-gray-700">38 / 50</span> 
                </td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="text-xs sm:text-sm font-semibold text-green-600">76%</span> 
                </td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="inline-flex rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-600">ناجح</span> 
                </td> 
              </tr> 

              <tr className="transition-colors duration-200 hover:bg-gray-50/70"> 
                <td className="px-3.5 py-3.5 text-center text-xs sm:text-sm font-semibold text-gray-500">3</td> 
                <td className="px-3.5 py-3.5 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">سارة حسن</td> 
                <td className="px-3.5 py-3.5 text-xs sm:text-sm text-gray-500 whitespace-nowrap">20210348</td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="text-xs sm:text-sm font-bold text-gray-700">24 / 50</span> 
                </td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="text-xs sm:text-sm font-semibold text-red-500">48%</span> 
                </td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-500"> 
                    <LuCircleX /> 
                    راسب 
                  </span> 
                </td> 
              </tr> 

              <tr className="transition-colors duration-200 hover:bg-gray-50/70"> 
                <td className="px-3.5 py-3.5 text-center text-xs sm:text-sm font-semibold text-gray-500">4</td> 
                <td className="px-3.5 py-3.5 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">علي إبراهيم</td> 
                <td className="px-3.5 py-3.5 text-xs sm:text-sm text-gray-500 whitespace-nowrap">20210349</td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="text-xs sm:text-sm font-bold text-gray-700">41 / 50</span> 
                </td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="text-xs sm:text-sm font-semibold text-green-600">82%</span> 
                </td> 
                <td className="px-3.5 py-3.5 text-center whitespace-nowrap"> 
                  <span className="inline-flex rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-600">ناجح</span> 
                </td> 
              </tr> 
            </tbody> 
          </table> 
        </div> 
      </div>
    </div>
  )
}