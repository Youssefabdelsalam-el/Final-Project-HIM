import React from 'react'
import { IoCalendarSharp } from 'react-icons/io5'
import SearchCourses from './SearchCourses'
import FilterCourses from './FilterCourses'
import CardCourses from './CardCourses'

export default function MyCoursesPage() {
  return (
     <div className=' w-full flex flex-col gap-7'>
        <div className='flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
            {/* العنوان ولينك الانتقال */}
            <div className='flex flex-col gap-3 sm:gap-4 min-w-0'>
                <div className='flex items-start gap-3'>
                  <div className='text-blue-600 bg-blue-100 p-3 rounded-4xl'>
                  <IoCalendarSharp className='w-7 h-7' />
                  </div>
                  <div className='flex flex-col gap-3'>
                  <h1 className='text-xl sm:text-2xl md:text-[25px] font-bold'>المقررات الدراسية</h1>
                  <p className='text-gray-400'>جميع المقررات المسنده اليك من اداره المعهد</p>
                  </div>
                  </div>
              </div>
   
           
            <div className='w-full lg:w-auto'>
              <SearchCourses/>
           </div>
        </div>

        <FilterCourses/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4'>
          <CardCourses/>
          <CardCourses/>
          <CardCourses/>
          <CardCourses/>
        </div>
    </div>
  )
}