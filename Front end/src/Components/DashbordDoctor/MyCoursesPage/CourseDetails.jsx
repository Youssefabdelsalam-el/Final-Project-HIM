import { BsBook } from 'react-icons/bs'
import { GiGraduateCap } from 'react-icons/gi'
import { IoCalendarOutline } from 'react-icons/io5'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import CourseTabs from './CourseTabs'

export default function CourseDetails() {
  return (
    <div className="flex w-full flex-col gap-4 sm:gap-5">

      <div className="flex flex-col gap-4 rounded-xl sm:flex-row sm:items-start sm:justify-between">
        
        <div className="flex min-w-0 flex-col items-start gap-3">
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl">
            English
          </h2>

          <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-3 text-xs text-gray-500 sm:gap-4 sm:text-sm">

            <div className="flex items-center gap-1.5 sm:gap-2">
              <GiGraduateCap className="shrink-0 text-base sm:text-lg" />
              <p>الفرقة :</p>
              <p>الأولى</p>
            </div>

            <div className="hidden h-5 w-0.5 bg-gray-300 sm:block"></div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <BsBook className="shrink-0 text-base sm:text-lg" />
              <p>التخصص :</p>
              <p>نظم ومعلومات الأعمال</p>
            </div>

            <div className="hidden h-5 w-0.5 bg-gray-300 sm:block"></div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <IoCalendarOutline className="shrink-0 text-base sm:text-lg" />
              <p>الترم :</p>
              <p>الأول</p>
            </div>

          </div>
        </div>

        <Link to="/Dashbord Doctor" className="group flex w-fit shrink-0 items-center gap-2 self-start rounded-xl border border-blue-200 bg-white px-3 py-2 text-sm text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md sm:gap-3 sm:rounded-2xl sm:p-3">
          <span>رجوع</span>
          <MdOutlineArrowBackIosNew className="text-sm transition-transform duration-300 group-hover:-translate-x-1 sm:text-base" />
        </Link>

      </div>

      <CourseTabs />

    </div>
  )
}