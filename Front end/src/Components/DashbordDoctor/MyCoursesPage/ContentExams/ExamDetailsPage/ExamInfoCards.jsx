import React from 'react'

export default function ExamInfoCards({ title, value, label, icon: Icon, bgColor, iconBg, iconColor, valueColor }) {
  return (
    <div className={`flex items-center justify-between rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:shadow-md ${bgColor}`}>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">{title}</p>

        <div className="flex items-end gap-2">
          <h2 className={`text-2xl font-bold ${valueColor}`}>{value}</h2>
          <span className="mb-1 text-xs text-gray-500">{label}</span>
        </div>
      </div>

      <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${iconBg} ${iconColor}`}>
        <Icon />
      </div>
    </div>
  )
}
