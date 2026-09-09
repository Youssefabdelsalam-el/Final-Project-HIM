import { LuClipboardCheck } from "react-icons/lu"
import ExamHeader from "./ExamHeader"
import ExamInfoCards from "./ExamInfoCards"
import { FaMedal } from "react-icons/fa"
import { CiClock2 } from "react-icons/ci"
import { IoCalendarOutline } from "react-icons/io5"
import { FiFileText } from "react-icons/fi"
import ExamTabs from "./ExamTabs"

export default function ExamDetails() {
  return (
    <div dir="rtl" className="space-y-5">
      <ExamHeader />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <ExamInfoCards title="الدرجة الكلية" value="50" label="درجة" icon={FaMedal} bgColor="bg-blue-50" iconBg="bg-blue-100" iconColor="text-blue-600" valueColor="text-blue-600"/>
        <ExamInfoCards title="مدة الاختبار" value="60" label="دقيقة" icon={CiClock2} bgColor="bg-orange-50" iconBg="bg-orange-100" iconColor="text-orange-600" valueColor="text-orange-600"/>
        <ExamInfoCards title="تاريخ البداية" value="15/9/2026" label="10:00 AM" icon={IoCalendarOutline} bgColor="bg-green-50" iconBg="bg-green-100" iconColor="text-green-600" valueColor="text-green-600"/>
        <ExamInfoCards title=" عدد الأسئلة" value="10" label="اسئلة" icon={FiFileText} bgColor="bg-purple-50" iconBg="bg-purple-100" iconColor="text-purple-600" valueColor="text-purple-600"/>
      </div>
      <ExamTabs/>
    </div>
  )
}