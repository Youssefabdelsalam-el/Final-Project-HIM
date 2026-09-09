import { useState } from "react"
import { FiPlus, FiX } from "react-icons/fi"
import { LuCircleHelp, LuFileText, LuListChecks, LuPlus } from "react-icons/lu"

export default function AddQuestionModal() {
  const [questionType, setQuestionType] = useState("multiple")

  const questionTypes = [
    { id: "multiple", title: "اختيار من متعدد", description: "اختر إجابة واحدة" },
    { id: "trueFalse", title: "صح أو خطأ", description: "صح أم خطأ" },
    { id: "essay", title: "مقالي", description: "إجابة نصية" },
  ]

  return (
    <>
      <button onClick={() => document.getElementById("add_question_modal").showModal()} className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700">
        <FiPlus className="text-lg" />
        إضافة سؤال
      </button>

      <dialog id="add_question_modal" className="modal modal-bottom sm:modal-middle" dir="rtl">
        <div className="modal-box max-w-2xl overflow-hidden rounded-2xl bg-white p-0 shadow-xl">
          {/* الهيدر */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <LuCircleHelp className="text-xl" />
              </div>

              <div>
                <h2 className="text-base font-bold text-gray-800">إضافة سؤال جديد</h2>
                <p className="mt-0.5 text-xs text-gray-400">أضف سؤالًا جديدًا إلى الاختبار</p>
              </div>
            </div>

            <form method="dialog">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-gray-600">
                <FiX className="text-lg" />
              </button>
            </form>
          </div>

          {/* جسم المودال */}
          <div className="max-h-[65vh] space-y-5 overflow-y-auto p-5">
            {/* نوع السؤال */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                <LuListChecks className="text-blue-600" />
                نوع السؤال
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {questionTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setQuestionType(type.id)}
                    className={`rounded-xl p-3 text-right transition-all duration-200 ${
                      questionType === type.id
                        ? "border-2 border-blue-500 bg-blue-50"
                        : "border border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50/50"
                    }`}
                  >
                    <p className={`text-sm font-semibold ${questionType === type.id ? "text-blue-700" : "text-gray-700"}`}>
                      {type.title}
                    </p>

                    <p className={`mt-1 text-xs ${questionType === type.id ? "text-blue-500" : "text-gray-400"}`}>
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* نص السؤال */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                <LuFileText className="text-blue-600" />
                نص السؤال
              </label>

              <textarea
                placeholder="اكتب نص السؤال هنا..."
                className="min-h-24 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            {/* اختيار من متعدد */}
            {questionType === "multiple" && (
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">الاختيارات</label>
                  <span className="text-xs text-gray-400">اختر الإجابة الصحيحة</span>
                </div>

                <div className="space-y-3">
                  {["الأول", "الثاني", "الثالث", "الرابع"].map((num, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input type="radio" name="correct-answer" className="h-4 w-4 accent-blue-600" />

                      <input
                        type="text"
                        placeholder={`الاختيار ${num}`}
                        className="h-11 flex-1 rounded-xl border border-gray-200 px-4 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  ))}
                </div>

                <button type="button" className="mt-3 flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700">
                  <LuPlus />
                  إضافة اختيار آخر
                </button>
              </div>
            )}

            {/* صح أو خطأ */}
            {questionType === "trueFalse" && (
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">الإجابة الصحيحة</label>
                  <span className="text-xs text-gray-400">حدد الإجابة الصحيحة</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-green-300 hover:bg-green-50/50">
                    <input type="radio" name="true-false-answer" className="h-4 w-4 accent-green-600" />
                    <span className="text-sm font-medium text-gray-700">صح</span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-red-300 hover:bg-red-50/50">
                    <input type="radio" name="true-false-answer" className="h-4 w-4 accent-red-500" />
                    <span className="text-sm font-medium text-gray-700">خطأ</span>
                  </label>
                </div>
              </div>
            )}

            {/* مقالي */}
            {questionType === "essay" && (
              <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <LuFileText className="text-lg" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-purple-700">سؤال مقالي</p>
                    <p className="mt-1 text-xs leading-5 text-purple-500">
                      سيقوم الطالب بكتابة إجابته في مساحة نصية أثناء أداء الاختبار.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* درجة السؤال */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">درجة السؤال</label>

              <div className="relative max-w-xs">
                <input
                  type="number"
                  placeholder="مثال: 5"
                  className="h-11 w-full rounded-xl border border-gray-200 px-4 pl-16 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">درجة</span>
              </div>
            </div>
          </div>

          {/* الفوتر */}
          <div className="border-t border-gray-100 bg-gray-50/50 px-5 py-4">
            <form method="dialog" className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100">
                إلغاء
              </button>

              <button type="button" className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700">
                <LuPlus />
                إضافة السؤال
              </button>
            </form>
          </div>
        </div>

        {/* النقر خارج المودال للإغلاق */}
        <form method="dialog" className="modal-backdrop">
          <button>إغلاق</button>
        </form>
      </dialog>
    </>
  )
}