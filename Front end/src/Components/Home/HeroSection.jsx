import React from 'react'
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <>
   <section>
     <div className='relative flex overflow-hidden'>
       <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2 }} className='w-full h-125 sm:h-150 lg:h-214.5 object-cover' src="WhatsApp Image 2026-07-16 at 8.07.53 PM.jpeg" alt="Photo HIM" />  
       <div className="absolute inset-0 bg-linear-to-r from-[#0A192F] via-[#0A192F]/50 to-transparent"></div>   
       <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='title absolute left-5 top-1/2 -translate-y-1/2 text-[#ffff] w-[90%] sm:left-10 md:left-20 lg:left-40 lg:top-75 lg:translate-y-0 lg:w-auto'>   
         <p className='p1 text-[16px] sm:text-[18px] lg:text-[20px] font-bold'>مرحبا بكم في</p>   
         <h1 className='text-[30px] sm:text-[40px] lg:text-[50px] font-extrabold'>المعهد العالي للادارة</h1>   
         <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] font-extrabold'>بالمحلة الكبرى</h2>   
         <p className='p2 text-[14px] sm:text-[17px] lg:text-[20px] font-bold'>نحو تعليم متميز يصنع قياده المستقبل ويؤهل كوادر<br className='hidden sm:block' /> قادره علي الابداع والمنافسه في سوق العمل</p>   
         <div className='buttons flex flex-col sm:flex-row items-center gap-4 sm:gap-7 justify-center mt-8 lg:mt-10'>
          <Link to="login"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='w-full sm:w-auto py-3 px-6 sm:px-9 border-2 border-[#ffff] rounded-lg cursor-pointer'> تسجيل الدخول</motion.button></Link>
           <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='w-full sm:w-auto py-3 px-6 sm:px-9 bg-[#14B8C4] rounded-lg cursor-pointer'> استكشاف المعهد</motion.button>   
         </div>   
       </motion.div>
     </div>
   </section>
    </>
  )
}
