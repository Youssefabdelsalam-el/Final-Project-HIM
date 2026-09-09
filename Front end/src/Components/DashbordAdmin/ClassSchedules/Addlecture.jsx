import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
export default function Addlecture() {
  return (
   <dialog id="lecture_modal9" className="modal">

    <div className="modal-box flex flex-col gap-5 w-[calc(100%-1.5rem)] max-w-lg p-4 sm:p-6">

        <h3 className="flex items-center gap-3 text-xl font-bold text-[#0B1F4D]">
            إضافة محاضرة
        </h3>

        <p className="mt-2 text-sm text-slate-400">
            قم بإدخال بيانات المحاضرة
        </p>


        <div className="mt-6 flex flex-col gap-4">


            {/* المادة */}

            <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                    المادة
                </label>

                <div className="relative">

                    <select className="appearance-none w-full h-12 bg-white border border-[#E4EAF3] rounded-xl px-4 pl-10 text-[#0B1F4D] font-semibold text-sm outline-none cursor-pointer">

                        <option value="">
                            اختر المادة
                        </option>

                        <option value="database">
                            Database
                        </option>

                        <option value="web-design">
                            Web Design
                        </option>

                        <option value="mobile">
                            Mobile Application
                        </option>

                        <option value="visual">
                            Visual Programming
                        </option>

                    </select>

                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0057D9]">
                        <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                    </div>

                </div>
            </div>


            {/* الدكتور */}

            <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                    الدكتور
                </label>

                <div className="relative">

                    <select className="appearance-none w-full h-12 bg-white border border-[#E4EAF3] rounded-xl px-4 pl-10 text-[#0B1F4D] font-semibold text-sm outline-none cursor-pointer">

                        <option value="">
                            اختر الدكتور
                        </option>

                        <option value="doctor1">
                            د. أحمد محمد
                        </option>

                        <option value="doctor2">
                            د. محمد علي
                        </option>

                        <option value="doctor3">
                            د. محمود حسن
                        </option>

                    </select>

                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0057D9]">
                        <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                    </div>

                </div>

            </div>


            {/* القاعة */}

            <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                    القاعة
                </label>

                <div className="relative">

                    <select className="appearance-none w-full h-12 bg-white border border-[#E4EAF3] rounded-xl px-4 pl-10 text-[#0B1F4D] font-semibold text-sm outline-none cursor-pointer">

                        <option value="">
                            اختر القاعة
                        </option>

                        <option value="101">
                            قاعة 101
                        </option>

                        <option value="202">
                            قاعة 202
                        </option>

                        <option value="305">
                            قاعة 305
                        </option>

                    </select>

                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0057D9]">
                        <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                    </div>

                </div>

            </div>


            {/* نوع المحاضرة */}

            <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                    نوع المحاضرة
                </label>

                <div className="relative">

                    <select className="appearance-none w-full h-12 bg-white border border-[#E4EAF3] rounded-xl px-4 pl-10 text-[#0B1F4D] font-semibold text-sm outline-none cursor-pointer">

                        <option value="lecture">
                            محاضرة
                        </option>

                        <option value="section">
                            سكشن
                        </option>

                    </select>

                    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#0057D9]">
                        <MdOutlineKeyboardArrowDown className="w-5 h-5" />
                    </div>

                </div>

            </div>


        </div>


        {/* أزرار المودال */}

        <div className="flex items-center gap-5">

            <form method="dialog">

                <button className=" btn bg-gray-100 border-none text-gray-600 hover:bg-gray-200">
                    إلغاء
                </button>

            </form>

            <button className=" btn bg-blue-600 border-none text-white hover:bg-blue-700">
                إضافة
            </button>

        </div>

    </div>

</dialog>
  )
}
