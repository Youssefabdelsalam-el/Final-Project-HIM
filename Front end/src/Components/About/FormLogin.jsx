import React, { useState } from "react";
import { CiLogin } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function FormLogin({userType}) {
    const inputs = {
    student: {
        title:"كود الطالب",
        type:"text"
    },
    teacher:{
        title:"الكود الوظيفي",
        type:"text"
    },
    admin:{
        title:"اسم المستخدم",
        type:"text"
    }
}
  return (
    <>
    <form>
      <div className='flex flex-col gap-8'>

         <div className='flex flex-col gap-2'>
         <label className='text-[15px] font-extrabold'>{inputs[userType].title}</label>
         <div className='bg-[#ffffff] w-80 p-2 rounded-2xl shadow-md '>
            <input className='w-full outline-none' type="text" placeholder={inputs[userType].title} />
         </div>
       </div>

        <div className='flex flex-col gap-2'>
         <label className='text-[15px] font-extrabold'>كلمه السر</label>
         <div className='bg-[#ffffff] w-80 p-2 rounded-2xl shadow-md '>
            <input className='w-full outline-none' type="password" placeholder="كلمه السر" />
         </div>
       </div>

       <div className='flex items-center justify-between'>
        <input type="checkbox" defaultChecked className="checkbox checkbox-neutral" />
        <Link to=""><p className="text-[#0345a8]">نسيت كلمه السر ؟</p></Link>
       </div>

       <button className='text-[#ffff] bg-[#0345a8] flex items-center justify-center p-2 rounded-3xl cursor-pointer hover:bg-cyan-300'><CiLogin className='w-7 h-7' /> تسجيل الدخول</button>
      </div>
       
    </form>
    </>
  )
}
