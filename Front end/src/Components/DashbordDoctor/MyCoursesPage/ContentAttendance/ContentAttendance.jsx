import React from 'react'
import AttendanceStatsCards from './AttendanceStatsCards'
import { MdPeopleOutline, MdCheckCircle, MdCancel } from 'react-icons/md'
import AttendanceLectureSelector from './AttendanceLectureSelector'
import AttendanceTable from './AttendanceTable'

export default function ContentAttendance() {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold text-gray-800 sm:text-xl">الحضور والغياب</h1>
          <p className="text-sm text-gray-500 sm:text-[15px]">لإدارة حضور وغياب الطلاب في المحاضرات</p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <AttendanceStatsCards title="إجمالي الطلاب" value="40" label="طالب" icon={MdPeopleOutline} bgColor="bg-blue-50" iconBg="bg-blue-100" iconColor="text-blue-600" valueColor="text-gray-800" />

        <AttendanceStatsCards title="الحاضرون" value="35" label="طالب" icon={MdCheckCircle} bgColor="bg-green-50" iconBg="bg-green-100" iconColor="text-green-600" valueColor="text-green-600" />

        <AttendanceStatsCards title="الغائبون" value="5" label="طالب" icon={MdCancel} bgColor="bg-red-50" iconBg="bg-red-100" iconColor="text-red-600" valueColor="text-red-600" />
      </div>

      <div className="w-full overflow-x-auto">
        <AttendanceLectureSelector />
      </div>

      <div className="w-full overflow-x-auto">
        <AttendanceTable />
      </div>
    </div>
  )
}