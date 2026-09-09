import React from 'react'
import { GoUpload } from 'react-icons/go'

export default function CreateAdButton() {
  return (
    <>
    <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl  cursor-pointer bg-blue-600 text-white hover:bg-white hover:text-black font-bold ' onClick={()=>document.getElementById('CreateAdButton').showModal()}>
        <GoUpload className='w-5 h-5 text-white group-hover:text-blue-600 ' />
         انشاء إعلان
    </button>
    <dialog id="CreateAdButton" className="modal">
  <div className="modal-box w-[calc(100%-1rem)] max-w-7xl max-h-[90vh] overflow-auto flex flex-col gap-5 p-4 sm:w-[calc(100%-2rem)] sm:p-6 lg:p-8">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    {/* العنوان */}
    <div className="flex items-center gap-3 mb-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
        <GoUpload className="h-6 w-6 text-blue-600" />
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-bold text-[#0B1F4D]">
          إنشاء إعلان جديد
        </h3>

        <p className="mt-1 text-xs sm:text-sm text-slate-400">
          قم بإدخال بيانات الإعلان
        </p>
      </div>
    </div>

    {/* البيانات */}
    <div className="flex flex-col gap-5">

      {/* عنوان الإعلان */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          عنوان الإعلان <span className="text-red-500">*</span>
        </label>

        <input type="text" placeholder="اكتب عنوان الإعلان" className="h-12 w-full rounded-xl border border-[#E4EAF3] bg-white px-4 text-sm font-semibold text-[#0B1F4D] outline-none transition focus:border-blue-500" />
      </div>

      {/* محتوى الإعلان */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          محتوى الإعلان <span className="text-red-500">*</span>
        </label>

        <div className="overflow-hidden rounded-xl border border-[#E4EAF3]">

          <textarea rows="6" placeholder="اكتب محتوى الإعلان هنا..." className="w-full resize-none border-none px-4 py-3 text-sm text-[#0B1F4D] outline-none" />
        </div>
      </div>

      {/* المرفق */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          مرفق <span className="text-xs font-normal text-slate-400">(اختياري)</span>
        </label>

        <div className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-blue-200 bg-blue-50/30 px-4 py-5 text-center transition hover:bg-blue-50">

          <GoUpload className="mb-2 h-7 w-7 text-blue-600" />

          <p className="text-sm font-semibold text-blue-600">
            اضغط لرفع ملف أو اسحبه هنا
          </p>

          <p className="mt-1 text-xs text-slate-400">
            PDF,Excel
          </p>
        </div>
      </div>

      {/* الجمهور المستهدف */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          الجمهور المستهدف <span className="text-red-500">*</span>
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

            {/* الجميع */}
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 hover:border-blue-200 p-4">

            <input type="radio" name="target" defaultChecked className="h-4 w-4 accent-blue-600" />

            <div>
              <p className="text-sm font-semibold text-[#0B1F4D]">
               الجميع
              </p>

              <p className="mt-1 text-xs text-slate-400">
               لأعضاء هيئة التدريس والطلاب
              </p>
            </div>

          </label>

          {/* الطلاب */}
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 hover:border-blue-200 p-4">

            <input type="radio" name="target" defaultChecked className="h-4 w-4 accent-blue-600" />

            <div>
              <p className="text-sm font-semibold text-[#0B1F4D]">
                كل الطلاب
              </p>

              <p className="mt-1 text-xs text-slate-400">
                جميع الطلاب بالمعهد
              </p>
            </div>

          </label>

          {/* فرقة */}
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 hover:border-blue-200">

            <input type="radio" name="target" className="h-4 w-4 accent-blue-600" />

            <div>
              <p className="text-sm font-semibold text-[#0B1F4D]">
                فرقة محددة
              </p>

              <p className="mt-1 text-xs text-slate-400">
                إرسال الإعلان لفرقة معينة
              </p>
            </div>

          </label>

          {/* تخصص */}
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 hover:border-blue-200">

            <input type="radio" name="target" className="h-4 w-4 accent-blue-600" />

            <div>
              <p className="text-sm font-semibold text-[#0B1F4D]">
               اعضاء هيئة التدريس
              </p>

              <p className="mt-1 text-xs text-slate-400">
                إرسال الإعلان  لأعضاء هيئة التدريس
              </p>
            </div>

          </label>

          {/* فرقة وتخصص */}
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-4 hover:border-blue-200">

            <input type="radio" name="target" className="h-4 w-4 accent-blue-600" />

            <div>
              <p className="text-sm font-semibold text-[#0B1F4D]">
                فرقة وتخصص محدد
              </p>

              <p className="mt-1 text-xs text-slate-400">
                اختيار فرقة وتخصص معين
              </p>
            </div>

          </label>

        </div>
      </div>
    </div>

    {/* الأزرار */}
    <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-start">

      <form method="dialog" className="w-full sm:w-auto">
        <button className="w-full rounded-xl border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-100 sm:w-auto cursor-pointer">
          إلغاء
        </button>
      </form>

      <button type="button" className="w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-95 sm:w-auto cursor-pointer">
        نشر الإعلان الآن
      </button>

    </div>

  </div>
  
</dialog>
    </>
  )
}
