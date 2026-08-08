
import FormLogin from './FormLogin'
import { GiGraduateCap } from 'react-icons/gi'
import { FaUserTie } from 'react-icons/fa'
import { FaChalkboardUser } from 'react-icons/fa6'
import React, { useState } from "react";

export default function Login({userTyp}) {
  const [userType, setUserType] = useState("student");
  const images = {
    student: "student.jfif",
    teacher: "teacher.png",
    admin: "admin.png",
};
  return (
    <>
    <section className='min-h-200 bg-gray-100 flex items-center justify-center'>

      <div className=" grid lg:grid-cols-2 gap-5 w-full max-w-6xl bg-[#d1d0d08c] rounded-3xl shadow-2xl overflow-hidden">
        
        <div className='relative'>
          <img className="w-full h-full object-cover" src={images[userType]} alt="" />
          <div className='absolute inset-0 bg-[#0A192F]/70'></div>

          <div className=' absolute inset-0 flex flex-col gap-2 items-center justify-center'>
            <img className='rounded-full w-20' src="LOGO.jpeg" alt="" />
            <div className='flex flex-col gap-3 items-center text-[#ffffff]'>
              <p>مرحبا بك....</p>
              <p> قم بتسجيل الدخول للوصول إلى الخدمات الإلكترونية الخاصة بك</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-4 mt-3 mb-7 '>
          <h1 className='text-[25px] font-extrabold text-[#0345a8]'>تسجيل الدخول</h1>
          
          <div className='flex items-center gap-3'>
            <button onClick={() => setUserType("student")} className={`flex items-center gap-2 py-2 px-3 group rounded-2xl text-[15px] font-bold hover:bg-[#0345a8] hover:text-[#ffff] cursor-pointer ${userType==="student" ? "bg-[#0345a8] text-white" : "bg-white"}`}><GiGraduateCap className={`text-[#0345a8] group-hover:text-white w-7 h-7 ${ userType==="student" ? "text-white" : "text-[#0345a8]" }`} />طالب</button>
            <button onClick={() => setUserType("teacher")} className={`flex items-center gap-2 py-2 px-3 group rounded-2xl text-[15px] font-bold hover:bg-[#0345a8] hover:text-[#ffff] cursor-pointer ${userType==="teacher" ? "bg-[#0345a8] text-white" : "bg-white"}`}><FaChalkboardUser  className={`text-[#0345a8] group-hover:text-white w-7 h-7 ${ userType==="teacher" ? "text-white" : "text-[#0345a8]" }`} />عضو هيئة التدريس</button>
            <button onClick={() => setUserType("admin")} className={`flex items-center gap-2 py-2 px-3 group rounded-2xl text-[15px] font-bold hover:bg-[#0345a8] hover:text-[#ffff] cursor-pointer ${userType==="admin" ? "bg-[#0345a8] text-white" : "bg-white"}`}><FaUserTie className={`text-[#0345a8] group-hover:text-white w-7 h-7 ${ userType==="admin" ? "text-white" : "text-[#0345a8]" }`} />الادارة</button>
          </div>

          <FormLogin userType={userType}/>
          
        </div>
      </div>
    </section>
    </>
  )
}
