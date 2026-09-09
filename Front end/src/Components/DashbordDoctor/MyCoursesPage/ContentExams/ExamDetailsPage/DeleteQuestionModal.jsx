import { FiAlertTriangle, FiTrash2, FiX } from "react-icons/fi"

export default function DeleteQuestionModal() {
  return (
    <>
    <button onClick={() => document.getElementById("delete_question_modal").showModal()} className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-400 transition-all duration-200 hover:border-red-100 hover:bg-red-50 hover:text-red-500">
        <FiTrash2/>
    </button>
    <dialog id="delete_question_modal" className="modal modal-bottom sm:modal-middle" dir="rtl">
      <div className="modal-box max-w-md rounded-2xl bg-white p-0 shadow-xl">
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <FiAlertTriangle className="text-xl" />
            </div>

            <div className="flex-1">
              <h2 className="text-base font-bold text-gray-800">حذف السؤال</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                هل أنت متأكد من حذف هذا السؤال؟ لا يمكن التراجع عن هذا الإجراء بعد الحذف.
              </p>
            </div>

            <form method="dialog">
              <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-gray-100 hover:text-gray-600">
                <FiX className="text-lg" />
              </button>
            </form>
          </div>

          <div className="mt-4 rounded-xl border border-red-100 bg-red-50/60 p-3">
            <p className="text-xs font-medium text-red-600">السؤال المراد حذفه</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">
              ما هو المتغير في لغة البرمجة؟
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-2 border-t border-gray-100 bg-gray-50/50 px-5 py-4 sm:flex-row sm:justify-end">
          <form method="dialog" className="contents">
            <button className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100">
              إلغاء
            </button>

            <button type="button" className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-red-600">
              <FiTrash2 />
              حذف السؤال
            </button>
          </form>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>إغلاق</button>
      </form>
    </dialog>
    </>
  )
}