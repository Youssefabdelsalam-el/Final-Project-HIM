import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

export default function DeletAssignmentModel() {
  return (
    <>
      <button onClick={() => document.getElementById('delete_assignment_modal').showModal()} className="flex items-center justify-center w-9 h-9 rounded-lg text-red-600 bg-red-50 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer">
        <MdDeleteOutline className="text-lg" />
      </button>

      <dialog id="delete_assignment_modal" className="modal">
        <div className="modal-box max-w-md p-0">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-5">
            <h3 className="text-lg font-bold text-gray-800">
              حذف الواجب
            </h3>

            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost text-gray-500">
                <IoClose />
              </button>
            </form>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-4 p-6 text-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <MdDeleteOutline className="text-4xl text-red-600" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-gray-800">
                هل أنت متأكد من حذف الواجب؟
              </h4>
            </div>

          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-gray-200 p-5">

            <form method="dialog">
              <button className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50 cursor-pointer">
                إلغاء
              </button>
            </form>

            <button className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 cursor-pointer">
              <MdDeleteOutline className="text-xl" />
              حذف الواجب
            </button>

          </div>

        </div>
      </dialog>
    </>
  )
}