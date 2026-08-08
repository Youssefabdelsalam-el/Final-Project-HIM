import React from 'react'
import { motion } from "motion/react";

export default function Specializations() {
  return (
    //  الاقسام والتغصصات
    <>
    <div className='Sections  '>
        <h1 className='mb-3 text-[25px] font-extrabold'>الاقسام والتخصصات</h1>
        <div className='cards-sections lg:flex items-center gap-5 flex-1 min-w-0'>
          
         <motion.div initial={{ opacity: 0, y: 60 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{ y: -10, scale: 1.03 }}viewport={{ once: true }}transition={{ duration: 0.6, delay: 0.1 }} className='card flex flex-col w-full lg:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
         <div className='flex flex-col justify-center items-center gap-3 p-3'>
           <div className='bg-[#00968763] rounded-full p-1'>
             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="#009688" d="M22 13.478V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.522l.553.277a21 21 0 0 0 18.897-.002zM14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447.724a19 19 0 0 1-16.726.186l-.647-.32l-1.18-.59V9a3 3 0 0 1 3-3h2V5a3 3 0 0 1 3-3zm-2 8a1 1 0 0 0-1 1a1 1 0 1 0 2 .01c0-.562-.448-1.01-1-1.01m2-6h-4a1 1 0 0 0-1 1v1h6V5a1 1 0 0 0-1-1" /></svg>
           </div>

            <h1 className='text-[20px] font-extrabold'>ادارة اعمال</h1>
            <p className='text-[14px] font-bold text-gray-600'>اعداد كوادر قادؤة علي التخيط<br />والقيادة واتخاذ القرار</p>
         </div>
        </motion.div>

         <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}whileHover={{ y: -10, scale: 1.03 }}viewport={{ once: true }}transition={{ duration: 0.6, delay: 0.2 }}  className='card flex flex-col w-full lg:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
         <div className='flex flex-col justify-center items-center gap-3 p-3'>
            <div className='bg-[#ef7de767] rounded-full p-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="#ef7de7" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4zm0 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z" /></svg>
            </div>
            <h1 className='text-[20px] font-extrabold'>محاسبه ومراجعه</h1>
            <p className='text-[14px] font-bold text-gray-600'>اعداد محاسبين ومراجعين<br /> علي اعلي مستوي من الكفاءة</p>
         </div>
        </motion.div>

         <motion.div initial={{ opacity: 0, y: 60 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{ y: -10, scale: 1.03 }}viewport={{ once: true }}transition={{ duration: 0.6, delay: 0.4 }} className='card flex flex-col w-full lg:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
         <div className='flex flex-col justify-center items-center gap-3 p-3'>
            <div className='bg-[#0795d74f] rounded-full p-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="#0795d7" d="M21 14h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11H3a1 1 0 0 0 0 2h8v1.15l-4.55 3A1 1 0 0 0 7 22a.94.94 0 0 0 .55-.17L11 19.55V21a1 1 0 0 0 2 0v-1.45l3.45 2.28A.94.94 0 0 0 17 22a1 1 0 0 0 .55-1.83l-4.55-3V16h8a1 1 0 0 0 0-2m-3 0H6V4h12Zm-9-2a1 1 0 0 0 .83-.45l1.33-2l1.13 1.14a1 1 0 0 0 .81.29a1 1 0 0 0 .73-.45l2-3a1 1 0 0 0-1.66-1.1l-1.33 2l-1.13-1.14A1 1 0 0 0 10.9 7a1 1 0 0 0-.73.45l-2 3a1 1 0 0 0 .28 1.38A.94.94 0 0 0 9 12" /></svg>
            </div>
            <h1 className='text-[20px] font-extrabold'>نظم ومعلومات الاعمال</h1>
            <p className='text-[14px] font-bold text-gray-600'>تأهيل متخصصين في تحليل الأنظمة<br /> وادارة المخاطر </p>
         </div>
        </motion.div>
        </div>

      </div>
    </>
  )
}
