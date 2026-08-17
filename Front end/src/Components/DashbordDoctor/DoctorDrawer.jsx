import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaRegBell } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

export default function DoctorDrawer() {
  return (
   <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle inline" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full bg-[#ffff]  flex items-center justify-between px-4">
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
                <div className='flex items-center gap-2 text-[15px] font-bold text-[#0345a8]'>
                  <p>د.</p>
                  <h1>كريم محمد</h1>
                </div>
                <p className='text-[13px] font-bold'>دكتور</p>
                
            </div>
    
            {/* صوره الشخص*/}
    
            <div className='w-13 flex items-center gap-3'>
                <img className='rounded-full' src="/Doctor.png" alt="" />
            </div>
    
          </div>
         </div>
        </nav>
    {/* Page content here */}
    <div className="p-7 bg-[#F5F7FA] min-h-screen flex flex-col justify-between">
      <main>
        <Outlet />
      </main>
    </div>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible bg">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-[#3b5d85] text-white is-drawer-close:w-14 is-drawer-open:w-64">
      {/* Sidebar content here */}
      <ul className="menu w-full grow">
        {/* List item */}
       

        {/* List item */}
        <li>
          <Link className="hover:bg-[#041c50] hover:text-white active:bg-[#002079]" to="">
            <button className='flex items-center gap-2' data-tip="Homepage">
            {/* Home icon */}
            <CgProfile className="my-1.5 inline-block size-4"  />
          <span className="is-drawer-close:hidden cursor-pointer"> الرئيسية</span>
          </button>
          </Link>
        </li>

      </ul>
    </div>
  </div>
</div>
  )
}
