import { useState } from "react"
import { LuClipboardList, LuFileText, LuUsers } from "react-icons/lu"
import ExamQuestions from "./ExamQuestions"
import ExamDetailsInfo from "./ExamDetailsInfo"
import ExamResults from "./ExamResults"

export default function ExamTabs() {
  const [activeTab, setActiveTab] = useState("questions")

  const tabs = [
    { id: "details", title: "تفاصيل الاختبار", icon: <LuFileText /> },
    { id: "questions", title: "الأسئلة", icon: <LuClipboardList /> },
    { id: "results", title: "النتائج", icon: <LuUsers /> },
  ]

  return (
    <div dir="rtl" className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="flex flex-col border-b border-gray-200 sm:flex-row">
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex flex-1 items-center justify-center gap-2 border-b-2 px-4 py-3.5 text-sm font-medium transition-all duration-200 sm:py-4 ${activeTab === tab.id ? "border-blue-600 bg-blue-50/50 text-blue-600" : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-blue-600"}`}>
            <span className="text-lg">{tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-5">
        {activeTab === "details" && <ExamDetailsInfo/>}
        {activeTab === "questions" && <ExamQuestions/>}
        {activeTab === "results" && <ExamResults/>}
      </div>
    </div>
  )
}