import React from 'react'
import { motion } from "motion/react";
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  
  return (
    <>
     <header className='flex items-center py-4 px-5 md:px-10  justify-between' >

      <div className='Logo flex items-center gap-5 w-auto'>
         <img className='w-12 lg:w-15  rounded-full' src="LOGO.jpeg" alt="logo" />
         <div className='titel flex flex-col '>
            <h1 className='text-[14px] md:text-[18px] lg:text-[20px] font-extrabold'>المعهد العالي للاداره</h1>
            <h1 className='text-[14px] md:text-[18px] lg:text-[20px] font-extrabold'>بالمحله الكبري</h1>
         </div>
       </div>


      <nav className=' hidden lg:flex items-center gap-5 font-bold text-5'>
        <NavLink  className='hover:text-[#14B8C4] hover:border-b-2 border-[#14B8C4] 'className={({ isActive }) =>`hover:text-[#14B8C4] hover:border-b-2 border-b-2 ${isActive? "text-[#14B8C4] border-[#14B8C4]": "border-transparent"}`} to="/">الرئيسه</NavLink>
        <NavLink  className='hover:text-[#14B8C4] hover:border-b-2 border-[#14B8C4] 'className={({ isActive }) =>`hover:text-[#14B8C4] hover:border-b-2 border-b-2 ${isActive? "text-[#14B8C4] border-[#14B8C4]": "border-transparent"}`} to="about">عن المعهد</NavLink>
        <NavLink  className='hover:text-[#14B8C4] hover:border-b-2 border-[#14B8C4] 'className={({ isActive }) =>`hover:text-[#14B8C4] hover:border-b-2 border-b-2 ${isActive? "text-[#14B8C4] border-[#14B8C4]": "border-transparent"}`} to="الاقسام">الاقسام</NavLink>
        <NavLink  className='hover:text-[#14B8C4] hover:border-b-2 border-[#14B8C4] 'className={({ isActive }) =>`hover:text-[#14B8C4] hover:border-b-2 border-b-2 ${isActive? "text-[#14B8C4] border-[#14B8C4]": "border-transparent"}`} to="اعضاء هيئة التدريس">اعضاء هيئه التدريس</NavLink>
        <NavLink  className='hover:text-[#14B8C4] hover:border-b-2 border-[#14B8C4] 'className={({ isActive }) =>`hover:text-[#14B8C4] hover:border-b-2 border-b-2 ${isActive? "text-[#14B8C4] border-[#14B8C4]": "border-transparent"}`} to="تواصل معنا">تواصل معنا</NavLink>
      </nav>

        <Link to="login"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='hidden lg:flex bg-[#0F2747] text-[#FFFFFF] p-2 rounded-lg  hover:bg-[#1a457c] cursor-pointer'>نسجيل الدخول<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" d="M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3V7a5 5 0 0 1 5-5m0 12a2 2 0 0 0-1.995 1.85L10 16a2 2 0 1 0 2-2m0-10a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3" /></svg>  </motion.button></Link>

        <div className="drawer drawer-end lg:hidden w-auto">

        <input id="menu" type="checkbox" className="drawer-toggle" />


        <div className="drawer-content">

          <label htmlFor="menu" className="btn btn-ghost text-2xl">☰</label>

        </div>


        <div className="drawer-side">

          <label htmlFor="menu" className="drawer-overlay"></label>


          <ul className="menu bg-base-100 min-h-full w-72 p-5 gap-3">

            <li>
              <NavLink to="/">الرئيسية</NavLink>
            </li>

            <li>
              <NavLink to="about">عن المعهد</NavLink>
            </li>

            <li>
              <NavLink to="/departments">الأقسام</NavLink>
            </li>

            <li>
              <NavLink to="/staff">أعضاء هيئة التدريس</NavLink>
            </li>

            <li>
              <NavLink to="/contact">تواصل معنا</NavLink>
            </li>


            <Link className="btn btn-primary mt-5" to="login">تسجيل الدخول</Link>

          </ul>

        </div>

      </div>

    </header>

    

    
    </>
  )
}