import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi"
import { LuClipboardList } from "react-icons/lu"
import AddQuestionModal from "./AddQuestionModal"
import DeleteQuestionModal from "./DeleteQuestionModal"
// import QuestionRow from "./QuestionRow"

export default function ExamQuestions() {
  const questions = [
    { id: 1, question: "ما هو المتغير في لغة البرمجة؟", type: "اختيار من متعدد", grade: 5 },
    { id: 2, question: "هل يمكن تعريف أكثر من متغير في نفس السطر؟", type: "صح أو خطأ", grade: 5 },
    { id: 3, question: "اشرح الفرق بين المتغير والثابت.", type: "مقالي", grade: 10 },
  ]

  return (
   <div dir="rtl" className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <LuClipboardList className="text-xl text-blue-600" />
            <h2 className="text-lg font-bold text-gray-800">أسئلة الاختبار</h2>
          </div>
          <p className="mt-1 text-sm text-gray-400">إدارة وترتيب أسئلة الاختبار</p>
        </div>
        <AddQuestionModal/>
      </div>
      
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-5">
                <div>
                <h3 className="text-sm font-bold text-gray-800">قائمة الأسئلة</h3>
                <p className="mt-1 text-xs text-gray-400">يمكنك ترتيب وتعديل أسئلة الاختبار</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">3 أسئلة</span>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-190">
                <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/70 text-xs text-gray-400">
                    <th className="w-16 px-4 py-4 text-center font-medium">#</th>
                    <th className="px-4 py-4 text-right font-medium">السؤال</th>
                    <th className="w-44 px-4 py-4 text-right font-medium">النوع</th>
                    <th className="w-32 px-4 py-4 text-center font-medium">الدرجة</th>
                    <th className="w-32 px-4 py-4 text-center font-medium">الإجراءات</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="group border-b border-gray-100 transition-all duration-200 hover:bg-blue-50/20">
                    <td className="px-4 py-5">
                        <div className="flex items-center justify-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-500">01</span>
                        </div>
                    </td>

                    <td className="px-4 py-5">
                        <div>
                        <p className="text-sm font-semibold leading-6 text-gray-700">ما هو المتغير في لغة البرمجة؟</p>
                        <p className="mt-1 text-xs text-gray-400">السؤال الأول</p>
                        </div>
                    </td>

                    <td className="px-4 py-5">
                        <span className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        اختيار من متعدد
                        </span>
                    </td>

                    <td className="px-4 py-5">
                        <div className="mx-auto flex w-fit items-center gap-1 rounded-lg bg-gray-50 px-3 py-2">
                        <span className="text-sm font-bold text-gray-700">5</span>
                        <span className="text-xs text-gray-400">درجة</span>
                        </div>
                    </td>

                    <td className="px-4 py-5">
                        <div className="flex items-center justify-center gap-2">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-400 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600">
                            <FiEdit2/>
                        </button>
                        <DeleteQuestionModal/>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                <h3 className="text-sm font-bold text-gray-800">إجمالي درجات الأسئلة</h3>
                <p className="mt-1 text-xs text-gray-400">إجمالي الدرجات المضافة مقارنة بالدرجة الكلية للاختبار</p>
                </div>

                <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-blue-600">20</span>
                <span className="text-sm text-gray-400">/ 50 درجة</span>
                </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-[40%] rounded-full bg-blue-600"></div>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                <span>تم إضافة 40% من الدرجات</span>
                <span>متبقي 30 درجة</span>
            </div>
        </div>
    </div>
  )
}