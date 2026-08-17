import React from 'react'
import { IoMegaphoneOutline, IoPersonAddOutline } from 'react-icons/io5'
import { RxLightningBolt } from 'react-icons/rx'
import ActionCard from './ActionCard'
import { BiBookAdd } from 'react-icons/bi'

export default function QuickActionCards() {
  return (
    <div  className="flex flex-col gap-4 sm:gap-5 w-full min-w-0 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <RxLightningBolt className="w-7 h-7" />
            <h1 className="text-xl sm:text-2xl md:text-[25px] font-bold truncate">إجراءات سريعة</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full'>
            <ActionCard Icon={IoPersonAddOutline} styleicon="border-2 border-green-600 text-green-600 p-3 rounded-full" name="إنشاء دكتور جديد" int="إنشاء دكتور جديد للنظام" />
            <ActionCard Icon={IoPersonAddOutline} styleicon="border-2 border-blue-800 text-blue-800 p-3 rounded-full" name="إنشاء طالب جديد" int="إنشاء طالب جديد للنظام" />
            <ActionCard Icon={IoMegaphoneOutline} styleicon="border-2 border-fuchsia-600 text-fuchsia-600 p-3 rounded-full" name="إنشاء اعلان جديد" int="إنشاء اعلان جديد للنظام" />
            <ActionCard Icon={BiBookAdd} styleicon="border-2 border-orange-600 text-orange-600 p-3 rounded-full" name="إنشاء مادة جديد" int="إنشاء مادة جديد للنظام" />
        </div>
    </div>
  )
}
