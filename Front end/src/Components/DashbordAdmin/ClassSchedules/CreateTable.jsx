import { GoUpload } from 'react-icons/go'
import { IoCalendarOutline } from 'react-icons/io5'
import FilterTapleClass from './FilterTapleClass'
import Addlecture from './Addlecture'
export default function CreateTable() {
  return (
    <>
     <button className='group flex items-center gap-2 py-3 px-4 border border-blue-600 rounded-2xl  cursor-pointer bg-blue-600 text-white hover:bg-white hover:text-black font-bold ' onClick={()=>document.getElementById('my_modal_8').showModal()}>
            <GoUpload className='w-5 h-5 text-white group-hover:text-blue-600 ' />
             انشاء جدول
        </button>

        <dialog id="my_modal_8" className="modal">
            <div className="modal-box w-[calc(100%-1rem)] max-w-7xl max-h-[90vh] overflow-auto flex flex-col gap-5 p-4 sm:w-[calc(100%-2rem)] sm:p-6 lg:p-8">
                <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
               <h3 className="flex items-center gap-4 text-[20px] font-bold text-lg">
                    <IoCalendarOutline className='text-blue-600 w-8 h-8' />
                     إنشاء جدول
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                 قم بتحديد بيانات الجدول الدراسي
                </p>

                <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                    <FilterTapleClass title="السنه الدراسية" option1="2026/2027"/>
                    <FilterTapleClass title="الترم" option1="الترم الاول" option2="الترم الثاني"/>
                    <FilterTapleClass title="الفرقة" option1="الفرقة الولى" option2="الفرقة الثانية" option3="الفرقة الثالثة" option4="الفرقة الرابعة" />
                    <FilterTapleClass title="التخصص" option1="تخصص عام" option2=" نظم ومعلومات الاعمال" option3="ادارة الاعمال" option4=" المحاسبة والمراجعة" />
                    <FilterTapleClass title="الجروب" option1="جروب A" option2="جروب B" option3="جروب C" option4="جروب D" />
                </div>

                <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                    <div className='w-full overflow-x-auto'>
                    <table className="w-full min-w-225 border-collapse text-center">

                        <thead className="whitespace-nowrap">
                            <tr className="bg-blue-600 text-white">

                                <th className="w-28 border border-blue-500 p-4">
                                     الوقت
                                </th>

                                <th className="border border-blue-500 p-4">
                                     الأحد
                                </th>

                                <th className="border border-blue-500 p-4">
                                     الإثنين
                                </th>

                                <th className="border border-blue-500 p-4">
                                     الثلاثاء
                                </th>

                                <th className="border border-blue-500 p-4">
                                     الأربعاء
                                </th>

                                <th className="border border-blue-500 p-4">
                                     الخميس
                                </th>

                            </tr>
                        </thead>

                        <tbody>

                            <tr className="h-24">

                                <td className="border border-gray-200 bg-gray-50 p-3 text-sm font-semibold text-gray-600">
                                    09:00 - 10:00
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                            </tr>

                             <tr className="h-24">

                                <td className="border border-gray-200 bg-gray-50 p-3 text-sm font-semibold text-gray-600">
                                    10:00 - 11:00
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                            </tr>

                             <tr className="h-24">

                                <td className="border border-gray-200 bg-gray-50 p-3 text-sm font-semibold text-gray-600">
                                    11:00 - 12:00
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                            </tr>

                             <tr className="h-24">

                                <td className="border border-gray-200 bg-gray-50 p-3 text-sm font-semibold text-gray-600">
                                    1:00 - 3:00
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                                <td className="min-w-32.5 border border-gray-200 p-2">
                                    <button className="flex min-h-20 w-full items-center justify-center gap-1 rounded-lg px-2 text-xs text-blue-500 hover:bg-blue-50 sm:text-sm" onClick={() => document.getElementById("lecture_modal9").showModal()}>
                                        <span className="text-lg">+</span>
                                         إضافة محاضرة
                                    </button>
                                </td>

                            </tr>

                        </tbody>

                    </table>
                    </div>

                </div>
                {/* موديل اضافة المحاضرة */}
                <Addlecture/>
            </div>
        </dialog>
    </>
  )
}