import React from 'react'
import { LuMessageSquareText } from 'react-icons/lu'

export default function NoteModel() {
  return (
    <>
    <td>
         <button  onClick={() => document.getElementById('note_modal').showModal()} className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium transition hover:bg-blue-600 hover:text-white">
            <LuMessageSquareText/>
        </button>

        <dialog id="note_modal" className="modal">
        <div className="modal-box max-w-md p-0">
            <div className="flex items-center justify-between border-b border-gray-200 p-5">
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-gray-800">إضافة ملاحظة</h3>
                <p className="text-xs text-gray-400">يوسف مصطفى</p>
            </div>

            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost text-gray-500">✕</button>
            </form>
            </div>

            <div className="flex flex-col gap-2 p-5">
            <label className="text-sm font-semibold text-gray-700">الملاحظة</label>
            <textarea placeholder="اكتب ملاحظتك على تسليم الطالب..." className="min-h-32 w-full resize-none rounded-lg border border-gray-200 p-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"></textarea>
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-gray-200 p-5">
            <form method="dialog">
                <button className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 cursor-pointer">
                 إلغاء
                </button>
            </form>

            <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 cursor-pointer">
          حفظ الملاحظة
            </button>
            </div>
        </div>
        </dialog>
    </td>
    </>
  )
}
