import React from 'react'

export default function AttendanceStatsCards({ title, value, label, icon: Icon, bgColor, iconBg, iconColor, valueColor }) {
  return (
  <div className={`flex items-center justify-between rounded-xl border border-gray-200 ${bgColor} p-5`}>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500">{title}</span>
        <h2 className={`text-2xl font-bold ${valueColor}`}>{value}</h2>
        <span className="text-xs text-gray-400">{label}</span>
      </div>

      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg} ${iconColor}`}>
        <Icon className="text-2xl" />
      </div>
    </div>
  )
}
