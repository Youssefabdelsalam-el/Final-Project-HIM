
import ExamsStats from './ExamsStats'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { LuClipboardCheck, LuClock3 } from 'react-icons/lu'
import AddExamModal from './AddExamModal'
import ExamsTable from './ExamsTable'

export default function ContentExams() {
  return (
   <div className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold text-gray-800 sm:text-xl">الاختبارات</h1>
          <p className="text-sm text-gray-500 sm:text-[15px]">لإدارة حضور وغياب الطلاب في المحاضرات</p>
        </div>
        <AddExamModal/>
      </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <ExamsStats title="إجمالي الاختبارات" value="3" label="اختبارات" icon={LuClipboardCheck} bgColor="bg-blue-50" iconBg="bg-blue-100" iconColor="text-blue-600" valueColor="text-blue-600" />

            <ExamsStats title="الاختبارات المكتملة" value="1" label="اختبار" icon={IoIosCheckmarkCircle} bgColor="bg-green-50" iconBg="bg-green-100" iconColor="text-green-600" valueColor="text-green-600" />

            <ExamsStats title="الاختبارات القادمة" value="2" label="اختبارات" icon={LuClock3} bgColor="bg-orange-50" iconBg="bg-orange-100" iconColor="text-orange-500" valueColor="text-orange-500" />
        </div>

        <ExamsTable/>
        
    </div>
  )
}
