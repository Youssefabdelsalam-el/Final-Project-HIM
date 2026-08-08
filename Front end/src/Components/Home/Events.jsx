import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import { motion } from "motion/react";
export default function Events() {
  return (
    // الفاعليات
    <>
    <motion.div initial={{ opacity: 0, y: -30 }}whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}transition={{ duration: 0.6 }} className='titel flex items-center justify-center mb-7.5 '>
            <h1 className='text-[30px] font-extrabold border-b-3 border-[#12bdbdec]'>الفاعليات القادمة</h1>
          </motion.div>
    
          <div className='cards-event flex flex-col lg:flex-row items-center justify-center gap-8 px-5'>
    
            <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0 }} className='card flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto border border-[#e7e2e2] rounded-md py-2 px-5 '>
    
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[17px] font-extrabold'>ملتتقى التوظيف السنوي</h4>
                    <div className='text-[14px] font-bold'>
                        <p>يشارك اكتر من 30 شركة ومؤسسة لتوفير فرص عمل </p>
                        <p>وتدريب لطلاب وخريجي المعهد</p>
                    </div>
                </div>
    
                <div className='flex flex-col items-center gap-2'>
                    <div className='bg-[#19037cec]  rounded-full p-2'>
                        <IoCalendarOutline className='w-10 h-10 text-[#ffff]' />
                    </div>
    
                    <div className='flex flex-col items-center p-3  bg-[#ffff] border border-[#e7e2e2] rounded-md'>
                        <p className='text-[22px] font-bold text-[#19037cec]'>15</p>
                        <p className='text-[16px] font-bold text-[#19037cec]'>اغسطس</p>
                    </div>
    
                </div>
    
            </motion.div>
    
            <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0.1 }} className='card flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto border border-[#e7e2e2] rounded-md py-2 px-5 '>
    
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[17px] font-extrabold'>مؤتمر ريادة الاعمال</h4>
                    <div className='text-[14px] font-bold'>
                        <p>مؤتمر يلقي احدث الاتجاهات في رياده الاعمال</p>
                        <p>والابتكار</p>
                    </div>
                </div>
    
                <div className='flex flex-col items-center gap-2'>
                    <div className='bg-[#0599b3ec]  rounded-full p-2'>
                        <IoCalendarOutline className='w-10 h-10 text-[#ffff]' />
                    </div>
    
                    <div className='flex flex-col items-center p-3  bg-[#ffff] border border-[#e7e2e2] rounded-md'>
                        <p className='text-[22px] font-bold text-[#19037cec]'>22</p>
                        <p className='text-[16px] font-bold text-[#19037cec]'>اغسطس</p>
                    </div>
    
                </div>
    
            </motion.div>
    
            <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0.2 }} className='card flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto border border-[#e7e2e2] rounded-md py-2 px-5 '>
    
                <div className='flex flex-col gap-4'>
                    <h4 className='text-[17px] font-extrabold'>استفبال الطلاب الجدد</h4>
                    <div className='text-[14px] font-bold'>
                        <p>حفل استفبال الطلاب الجدد للعامل الجامعي</p>
                        <p>2025 - 2026</p>
                    </div>
                </div>
    
                <div className='flex flex-col items-center gap-2'>
                    <div className='bg-[#cf3304ec]  rounded-full p-2'>
                        <IoCalendarOutline className='w-10 h-10 text-[#ffff]' />
                    </div>
    
                    <div className='flex flex-col items-center p-3  bg-[#ffff] border border-[#e7e2e2] rounded-md'>
                        <p className='text-[22px] font-bold text-[#19037cec]'>05</p>
                        <p className='text-[16px] font-bold text-[#19037cec]'>سبتمبر</p>
                    </div>
    
                </div>
    
            </motion.div>
    
          </div>
    </>
  )
}
