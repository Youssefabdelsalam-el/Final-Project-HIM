import React from 'react'
import { FaChalkboardTeacher, FaMedal, FaUserGraduate } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { PiBagSimpleFill } from 'react-icons/pi'
import { RiComputerLine } from 'react-icons/ri'
import { motion } from "motion/react";

export default function Whychoose() {
  return (
    //  لماذا تختار المعهد
    <>
    <motion.div initial={{ opacity: 0, y: -30 }}whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}transition={{ duration: 0.6 }} className='titel flex items-center justify-center mb-7.5 '>
                <h1 className='text-[24px] sm:text-[30px] font-extrabold border-b-3 border-[#12bdbdec]'>لماذا تختار المعهد ؟</h1>
              </motion.div>
        
            <div className='flex flex-wrap items-center justify-center gap-5 mt-7.5 mb-7.5 px-5'>
              
                <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0.1 }} className='card flex flex-col w-[90%] sm:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
                 <div className='flex flex-col justify-center items-center gap-3 p-3'>
                   <div className='bg-[#021980ec]  rounded-full p-2'>
                     <FaUserGraduate className='w-10 h-10 text-[#ffff]'/>
                   </div>
        
                    <h1 className='text-[20px] font-extrabold'>تعليم اكاديمي متميز</h1>
                    <p className='text-[13px] sm:text-[14px] font-bold text-gray-600 text-center'>برامج اضافيه متطوره وفق احدث<br />المعاير الاكاديمية</p>
                 </div>
                </motion.div>
        
                <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0.2 }} className='card flex flex-col w-[90%] sm:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
                 <div className='flex flex-col justify-center items-center gap-3 p-3'>
                   <div className='bg-[#12bdbdec]  rounded-full p-2'>
                     <FaChalkboardTeacher className='w-10 h-10 text-[#ffff]' />
                   </div>
        
                    <h1 className='text-[20px] font-extrabold'>اعضاء هيئه الاتدريس</h1>
                    <p className='text-[13px] sm:text-[14px] font-bold text-gray-600 text-center'>نخبه من الاساتذه والخبراء في<br />مختلف التخصصات</p>
                 </div>
                </motion.div>
        
                <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0.3 }} className='card flex flex-col w-[90%] sm:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
                 <div className='flex flex-col justify-center items-center gap-3 p-3'>
                   <div className='bg-[#4e0b69] rounded-full p-2'>
                    <RiComputerLine className='w-10 h-10 text-[#ffff]'  />
                   </div>
        
                    <h1 className='text-[20px] font-extrabold'>معامل حديثه</h1>
                    <p className='text-[13px] sm:text-[14px] font-bold text-gray-600 text-center'>معامل مجهزه باحدث التقنيات<br />لتدريب عملي متكامل</p>
                 </div>
                </motion.div>
        
                <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0.4 }} className='card flex flex-col w-[90%] sm:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
                 <div className='flex flex-col justify-center items-center gap-3 p-3'>
                   <div className='bg-[#ee1708] rounded-full p-2'>
                    <FaPeopleGroup className='w-10 h-10 text-[#ffff]' />
                    </div>
        
                    <h1 className='text-[20px] font-extrabold'>انشطة طلابية</h1>
                    <p className='text-[13px] sm:text-[14px] font-bold text-gray-600 text-center'>مجموعه متنوعه من الانشطة<br />الثقافية والرياضية</p>
                 </div>
                </motion.div>
        
                <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0.5 }}v className='card flex flex-col w-[90%] sm:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
                 <div className='flex flex-col justify-center items-center gap-3 p-3'>
                   <div className='bg-[#eedf08] rounded-full p-2'>
                    <FaMedal  className='w-10 h-10 text-[#ffff]' />
                    </div>
        
                    <h1 className='text-[20px] font-extrabold'>شهادات معتمده</h1>
                    <p className='text-[13px] sm:text-[14px] font-bold text-gray-600 text-center'>شهادات معتمده من وزاره التعليم<br />العالي والمعاهده بها</p>
                 </div>
                </motion.div>
        
                <motion.div initial={{ opacity: 0, y: 50 }}whileInView={{ opacity: 1, y: 0 }}whileHover={{y: -10,scale: 1.05,}}viewport={{ once: true }}transition={{ duration: 0.5 , delay: 0.6 }} className='card flex flex-col w-[90%] sm:w-65 bg-[#ffff] border-[#d6d3d3] border-2 rounded-[20px] '>
                 <div className='flex flex-col justify-center items-center gap-3 p-3'>
                    <div className='bg-[#021980ec] rounded-full p-2'>
                    <PiBagSimpleFill  className='w-10 h-10 text-[#ffff]' />
                    </div>
        
                    <h1 className='text-[20px] font-extrabold'>فرص تدريب</h1>
                    <p className='text-[13px] sm:text-[14px] font-bold text-gray-600 text-center'>تدريب عملي وشركات مع كبرى <br />والشركات والمؤسسات</p>
                 </div>
                </motion.div>
            </div>
    </>
  )
}
