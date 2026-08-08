import React from 'react'
import { motion } from "motion/react";

export default function Summary() {
  return (
    <>
    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='About-the-Institute p-5 border-r-2 border-[rgb(219,216,216)] rounded-[10px] '>
        <h1 className=' text-[25px] font-extrabold'>نبذه عن المعهد</h1>
        <div className='flex flex-col lg:flex-row items-center gap-8 mb-5  '>
          <motion.p initial={{ opacity: 0, x: 80 }}whileInView={{ opacity: 1, x: 0 }}viewport={{ once: true }}transition={{ duration: 0.8, delay: 0.4 }} className='text-[19px] leading-[150%] font-bold text-gray-600 '>المعهد العالي للاداره بالمحله الكبري مؤسسه تعليمية رائدة تسعى الي تقديم تعليم اكاديمي متميز في مجالات الادارة والمحاسبه ونطم ومعلومات الاعمال. بما يواكب التطورات الحديثة. ويلبي احتياجات سوق العمل</motion.p>

          <div >
            <motion.img initial={{ opacity: 0, x: 80 }}whileInView={{ opacity: 1, x: 0 }}viewport={{ once: true }}transition={{ duration: 0.8, delay: 0.3 }} className='rounded-[10px] w-full lg:w-auto' src="WhatsApp Image 2026-07-16 at 8.07.53 PM.jpeg" alt="" />
          </div>
        </div>
        <motion.button  whileHover={{ scale: 1.05 }}whileTap={{ scale: 0.95 }} className='py-3 px-9 bg-[#18a5af] rounded-lg text-[#ffff] cursor-pointer'>اقراء المزيد</motion.button>
      </motion.div>
    </>
  )
}
