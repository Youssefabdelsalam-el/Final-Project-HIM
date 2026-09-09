import { IoAdd } from "react-icons/io5";

export default function AddLectureModal() {
  return (
    <>
     <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:shadow-md"  onClick={()=>document.getElementById('AddLectureModal').showModal()}>
        <IoAdd className="text-xl" />
         إضافة محاضرة جديدة
      </button>

      <dialog id="AddLectureModal" className="modal">
        <div className="modal-box max-w-xl p-0">

          {/* Header */}
          <div className="flex items-start justify-between border-b border-gray-200 p-5">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-gray-800">إضافة محاضرة جديدة</h3>
              <p className="text-sm text-gray-500">قم بإضافة تفاصيل المحاضرة والملف الخاص بها</p>
            </div>

            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost text-gray-500">✕</button>
            </form>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 p-5">

            {/* Lecture Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                عنوان المحاضرة <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center rounded-lg border border-gray-200 focus-within:border-blue-500">
                <input type="text" placeholder="Introduction to Databases" className="w-full px-4 py-3 text-sm outline-none" />
                <span className="px-3 text-gray-400">📖</span>
              </div>
            </div>

            {/* File */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                 ملف المحاضرة <span className="text-red-500">*</span>
              </label>

              <label className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-blue-200 bg-blue-50/30 transition hover:bg-blue-50">
                <div className="mb-2 text-4xl text-blue-600">☁️</div>
                <p className="text-sm font-medium text-blue-600">اسحب الملف هنا أو اضغط للاختيار</p>
                <p className="mt-1 text-xs text-gray-400">PDF (الحد الأقصى 50 MB)</p>
                <input type="file" accept=".pdf,.ppt,.pptx" className="hidden" />
              </label>
            </div>

          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-gray-200 p-5">
            <form method="dialog">
              <button className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50">إلغاء</button>
            </form>

            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
              <span className="text-xl">+</span>
               إضافة المحاضرة
            </button>
          </div>

        </div>
      </dialog>
    </>
  )
}