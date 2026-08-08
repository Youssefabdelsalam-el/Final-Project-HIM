import React from 'react'
import Search from '../Search'
import ListOfSubjects from './ListOfSubjects'
import TitelPage from '../TitelPage'
import { LuBookOpenText } from 'react-icons/lu'
import Select from '../Select'

export default function CoursesList() {
  return (
    <div className='w-full flex flex-col gap-5 px-2 sm:px-4 md:px-6'>
      <TitelPage titel="المواد الدراسية" description="عرض المواد المسجل بها هذا الفصل الدراسي" Icon={LuBookOpenText} />
        <div className='w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4'>
          <Search placeholder="ابحث عن المادة او الدكتور"/>
          <Select/>
        </div>

       <div className='w-full min-w-0 border rounded-2xl border-[#b3b3b37e]'>
          <ListOfSubjects />
        </div>
    </div>
  )
}
