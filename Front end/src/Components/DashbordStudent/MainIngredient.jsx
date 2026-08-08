import React from 'react'
import { BsBarChart } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { GoVideo } from 'react-icons/go'
import { IoIosLogOut } from 'react-icons/io'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { LuClipboardList, LuTable, LuUsersRound } from 'react-icons/lu'
import { MdOutlineEmail } from 'react-icons/md'
import { RiBookShelfLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { Link, Outlet } from "react-router-dom";

export default function MainIngredient() {
  return (
    <>
    <div className="drawer lg:drawer-open bg-base-300">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle inline" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-[#ffff] flex items-center justify-between px-4">
      <div className='flex items-center gap-3'>
        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost drawer-button">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
        {/* Logo */}

        <div className=' flex items-center gap-3'>
            <img className='w-13 rounded-full' src="/LOGO.jpeg" alt="" />
            <div className='text-[15px] font-bold  '>
                <h1>المعهد العالي للادارة</h1>
                <p>بالمحلة الكبري</p>
            </div>
        </div>
      </div>
     <div className='flex items-center gap-6'>
         {/* الايقون*/}
      <div>
        <FaRegBell className='w-5 h-5' />
      </div>

      <div className="hidden lg:flex px-4 items-center gap-5 ">

        {/* الاسم و الحالة*/}

        <div>
            <h1 className='text-[15px] font-bold text-[#0345a8]'>يوسف عبد السلام مصطفى</h1>
            <p className='text-[13px] font-bold'>طالب</p>
        </div>

        {/* صوره الشخص*/}

        <div className='w-13 flex items-center gap-3'>
            <img className='rounded-full' src="/person.jpeg" alt="" />
        </div>

      </div>
     </div>
    </nav>
    {/* Page content here */}
    <div className="p-4 bg-[#F5F7FA]">

      <main>
        <Outlet />
      </main>

      <p className='text-center text-[#14213d98] mt-10'>جميع الحقوق محفوظه - المعهد العالي للادارة بالمحلة الكبرى @ 2026</p>
    </div>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-[#0345a8] text-[#ffff] is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow flex flex-col gap-3">
        {/* List item */}
        <li>
          <Link className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" to="/Dashbord Student/profile">
            <button className='flex items-center gap-2' data-tip="Homepage">
            {/* Home icon */}
            <CgProfile className="my-1.5 inline-block size-4"  />
          <span className="is-drawer-close:hidden cursor-pointer">الملف الشخصي</span>
          </button>
          </Link>
        </li>

        {/* List item */}
        <li>
          <Link className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" to="/Dashbord Student">
            <button className='flex items-center gap-2'  data-tip="Homepage">
            {/* Home icon */}

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden cursor-pointer">الرئيسية</span>
          </button>
          </Link>
        </li>

        {/* List item */}
        <li>
          <Link className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" to="">
          <button className="flex items-center gap-2 hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Homepage">
            {/* Home icon */}
            <LuTable className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">الجدول الدراسي</span>
          </button>
          </Link>
        </li>

        {/* List item */}
        <li>
          <Link className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" to="Courses">
          <button className="flex items-center gap-2 hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Homepage">
            {/* Home icon */}
            <RiBookShelfLine  className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">المواد الدراسية</span>
          </button>
          </Link>
        </li>

        {/* List item */}
        <li>
          <Link className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" to="Lectures">
          <button className="flex items-center gap-2 hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Homepage">
            {/* Home icon */}
            <GoVideo   className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">المحاضرات</span>
          </button>
          </Link>
        </li>

        {/* List item */}
        <li>
          <Link className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" to="Assignment">
          <button className="flex items-center gap-2 hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Homepage">
            {/* Home icon */}
            <LuClipboardList   className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">الواجبات</span>
          </button>
          </Link>
        </li>

        {/* List item */}
        <li>
          <button className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Homepage">
            {/* Home icon */}
            <LuUsersRound   className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">الحضور والغياب</span>
          </button>
        </li> 

        {/* List item */}
        <li>
          <button className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Homepage">
            {/* Home icon */}
            <BsBarChart   className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">النتائج</span>
          </button>
        </li> 

        {/* List item */}
        <li>
          <button className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Homepage">
            {/* Home icon */}
            <IoMegaphoneOutline   className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">الاعلانات</span>
          </button>
        </li> 

        {/* List item */} 
        <li>
          <button className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Homepage">
            {/* Home icon */}
            <MdOutlineEmail   className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">الرسائل</span>
          </button>
        </li> 

        {/* List item */}
        <li>
          <button className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" data-tip="Settings">
            {/* Settings icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
            <span className="is-drawer-close:hidden cursor-pointer">الاعدادات</span>
          </button>
        </li>

        {/* List item */}
        <li>
          <button className=" hover:text-white hover:bg-[#f30000] rounded-full" data-tip="Settings">
            {/* Settings icon */}
            <IoIosLogOut className="my-1.5 inline-block size-4" />
            <span className="is-drawer-close:hidden cursor-pointer">تسجيل الخروج</span>
          </button>
        </li>

      </ul>
    </div>
  </div>
</div>
    </>
  )
}
