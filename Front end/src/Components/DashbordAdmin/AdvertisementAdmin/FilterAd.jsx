import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export default function FilterAd() {
  return (
    <>
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {/* المستهدف */}
        <div className="flex w-full flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">
                المستهدف
            </label>
    
            <div className="relative">
                <select className="h-12 w-full appearance-none rounded-xl border border-[#E4EAF3] bg-white px-4 pl-10 text-sm font-semibold text-[#0B1F4D] outline-none cursor-pointer">
                    <option value=""> الكل</option>
                    <option value="first">الطلاب</option>
                    <option value="second">اعضاء هيئة التدريس</option>
                </select>
    
                <MdOutlineKeyboardArrowDown className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />
            </div>
        </div>
    
            {/* الفرقة */}
        <div className="flex w-full flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">
                الفرقة
            </label>
    
            <div className="relative">
                <select className="h-12 w-full appearance-none rounded-xl border border-[#E4EAF3] bg-white px-4 pl-10 text-sm font-semibold text-[#0B1F4D] outline-none cursor-pointer">
                    <option value="">اختر الفرقة</option>
                    <option value="first">الفرقة الأولى</option>
                    <option value="second">الفرقة الثانية</option>
                    <option value="third">الفرقة الثالثة</option>
                    <option value="fourth">الفرقة الرابعة</option>
                </select>
    
                <MdOutlineKeyboardArrowDown className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />
            </div>
        </div>
    
        {/* التخصص */}
        <div className="flex w-full flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">
                التخصص
            </label>
    
            <div className="relative">
                <select className="h-12 w-full appearance-none rounded-xl border border-[#E4EAF3] bg-white px-4 pl-10 text-sm font-semibold text-[#0B1F4D] outline-none cursor-pointer">
                    <option value="">اختر التخصص</option>
                    <option value="general">تخصص عام</option>
                    <option value="business">نظم ومعلومات الأعمال</option>
                    <option value="management">إدارة الأعمال</option>
                    <option value="accounting">المحاسبة والمراجعة</option>
                </select>
    
                <MdOutlineKeyboardArrowDown className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600" />
            </div>
        </div>
    
    </div>
    
    </>
  )
}
