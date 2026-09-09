import React from 'react'

export default function FilterRC() {
  return (
<form className="w-full rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
    <div className="flex w-full items-center gap-2 sm:gap-3">

        <input className="peer/all hidden" type="radio" name="frameworks" id="all" defaultChecked />
        <label htmlFor="all" className="flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl border border-gray-200 bg-white px-2 py-3 text-xs font-semibold text-[#0B1F4D] transition-all hover:border-blue-400 hover:bg-blue-50 peer-checked/all:border-blue-600 peer-checked/all:bg-blue-600 peer-checked/all:text-white sm:gap-2 sm:px-4 sm:text-sm">
            <span>الكل</span>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-current text-[10px] sm:h-5 sm:w-5 sm:text-xs">✓</span>
        </label>

        <input className="peer/requests hidden" type="radio" name="frameworks" id="requests" />
        <label htmlFor="requests" className="flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white px-2 py-3 text-xs font-semibold text-[#0B1F4D] transition-all hover:border-blue-400 hover:bg-blue-50 peer-checked/requests:border-blue-600 peer-checked/requests:bg-blue-600 peer-checked/requests:text-white sm:px-4 sm:text-sm">
            الطلبات
        </label>

        <input className="peer/complaints hidden" type="radio" name="frameworks" id="complaints" />
        <label htmlFor="complaints" className="flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white px-2 py-3 text-xs font-semibold text-[#0B1F4D] transition-all hover:border-blue-400 hover:bg-blue-50 peer-checked/complaints:border-blue-600 peer-checked/complaints:bg-blue-600 peer-checked/complaints:text-white sm:px-4 sm:text-sm">
            الشكاوي
        </label>

        <button type="reset" className="flex h-11 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-lg font-bold text-gray-500 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-500 sm:w-14">
            ×
        </button>

    </div>
</form>
  )
}
