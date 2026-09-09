import { LuCalendarDays, LuClock3, LuFileText, LuInfo, LuSettings2, LuX } from 'react-icons/lu'

export default function AddExamModal() {
  return (
    <>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md sm:w-auto" onClick={() => document.getElementById('add_exam_modal').showModal()}>
        <span className="text-lg">+</span>
        إضافة اختبار جديد
      </button>

      <dialog id="add_exam_modal" className="modal">
        <div className="modal-box w-11/12 max-w-3xl p-0" dir="rtl">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <LuFileText className="text-lg" />
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-800 sm:text-lg">إضافة اختبار جديد</h3>
                <p className="mt-1 text-xs text-gray-400">أدخل بيانات الاختبار والإعدادات الخاصة به</p>
              </div>
            </div>

            <form method="dialog">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:bg-gray-100 hover:text-gray-600">
                <LuX className="text-lg" />
              </button>
            </form>
          </div>

          {/* Body */}
          <div className="max-h-[70vh] overflow-y-auto p-5">

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* بيانات الاختبار */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <LuFileText />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-800">بيانات الاختبار</h4>
                    <p className="mt-1 text-xs text-gray-400">البيانات الأساسية للاختبار</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">اسم الاختبار</label>
                    <input type="text" placeholder="مثال: Midterm Exam" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">نوع الاختبار</label>
                    <select className="select w-full rounded-lg border-gray-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                      <option disabled selected>اختر نوع الاختبار</option>
                      <option>اختبار قصير</option>
                      <option>منتصف الترم</option>
                      <option>نهائي</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">الدرجة الكلية</label>
                    <input type="number" placeholder="مثال: 50" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none placeholder:text-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">تاريخ ووقت البداية</label>
                    <div className="relative">
                      <input type="datetime-local" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                      <LuCalendarDays className="pointer-events-none absolute left-3 top-3.5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">مدة الاختبار</label>
                    <div className="relative">
                      <input type="number" placeholder="مثال: 60" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none placeholder:text-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
                      <LuClock3 className="pointer-events-none absolute left-3 top-3.5 text-gray-400" />
                    </div>
                    <p className="mt-1.5 text-xs text-gray-400">المدة بالدقائق</p>
                  </div>

                </div>
              </div>

              {/* إعدادات الاختبار */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                    <LuSettings2 />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-800">إعدادات الاختبار</h4>
                    <p className="mt-1 text-xs text-gray-400">حدد طريقة أداء الطلاب للاختبار</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">عدد المحاولات</label>
                    <select className="select w-full rounded-lg border-gray-200 text-sm focus:border-blue-500">
                      <option>محاولة واحدة</option>
                      <option>محاولتان</option>
                      <option>3 محاولات</option>
                      <option>غير محدود</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">ترتيب الأسئلة عشوائيًا</p>
                      <p className="mt-1 text-xs text-gray-400">تغيير ترتيب الأسئلة لكل طالب</p>
                    </div>
                    <input type="checkbox" className="toggle toggle-primary shrink-0" />
                  </div>

                  <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">إظهار النتيجة</p>
                      <p className="mt-1 text-xs text-gray-400">عرض النتيجة بعد انتهاء الاختبار</p>
                    </div>
                    <input type="checkbox" className="toggle toggle-primary shrink-0" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">السماح بالدخول المتأخر</p>
                      <p className="mt-1 text-xs text-gray-400">السماح للطلاب بالدخول بعد البداية</p>
                    </div>
                    <input type="checkbox" className="toggle toggle-primary shrink-0" />
                  </div>

                  <div className="flex gap-2 rounded-lg bg-blue-50 p-3 text-xs leading-5 text-blue-700">
                    <LuInfo className="mt-0.5 shrink-0 text-base" />
                    <p>يمكنك تعديل هذه الإعدادات والأسئلة بعد إنشاء الاختبار.</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50 px-5 py-4 sm:flex-row sm:justify-end">
            <form method="dialog">
              <button className="w-full rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm text-gray-600 transition-all duration-300 hover:bg-gray-100 sm:w-auto">
                إلغاء
              </button>
            </form>

            <button className="w-full rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-md sm:w-auto">
              إنشاء الاختبار
            </button>
          </div>

        </div>

        <form method="dialog" className="modal-backdrop">
          <button>إغلاق</button>
        </form>
      </dialog>
    </>
  )
}