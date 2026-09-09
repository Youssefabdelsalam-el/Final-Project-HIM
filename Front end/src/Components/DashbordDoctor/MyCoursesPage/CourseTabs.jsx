import { useState } from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { MdAssignment, MdPeopleOutline } from 'react-icons/md'
import { LuClipboardCheck } from 'react-icons/lu'
import ContentLectures from './ContentLectures/ContentLectures'
import ContentExams from './ContentExams/ContentExams'
import ContentAttendance from './ContentAttendance/ContentAttendance'
import ContentAssignments from './ContentAssignments/ContentAssignments'

export default function CourseTabs() {
  const [activeTab, setActiveTab] = useState("lectures")

  const tabs = [
    { id: "lectures", title: "المحاضرات", icon: <FaRegFileAlt /> },
    { id: "assignments", title: "الواجبات", icon: <MdAssignment /> },
    { id: "attendance", title: "الحضور والغياب", icon: <MdPeopleOutline /> },
    { id: "exams", title: "الاختبارات", icon: <LuClipboardCheck /> },
  ]

  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 sm:p-3">
      <div className="flex w-full overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex min-w-32.5 flex-1 shrink-0 items-center justify-center gap-2 border-b-2 px-3 py-3 text-xs font-medium transition-all duration-300 cursor-pointer sm:min-w-37.5 sm:py-4 sm:text-sm ${activeTab === tab.id ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-blue-600"}`}>
            <span className="text-base sm:text-lg">{tab.icon}</span>
            <span className="whitespace-nowrap">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="w-full">
        {activeTab === "lectures" && <ContentLectures />}
        {activeTab === "assignments" && <ContentAssignments />}
        {activeTab === "attendance" && <ContentAttendance />}
        {activeTab === "exams" && <ContentExams />}
      </div>
    </div>
  )
}