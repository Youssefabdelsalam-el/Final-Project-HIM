import React from 'react'
import { BiBookmarkMinus } from 'react-icons/bi'
import { GiAlliedStar } from 'react-icons/gi'
import { GoGoal } from 'react-icons/go'
import { motion } from "motion/react";

export default function AboutSection() {
  return (
   <>

   <div className='flex flex-col lg:flex-row gap-10 py-10 px-5 md:px-10 xl:px-20 2xl:px-30'>



    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='Sections bg-[#f3f0f094] p-3 rounded-[10px] border border-[rgba(219,216,216,0.67)]  '>
        <div className='cards-sections flex flex-col lg:flex-row items-start gap-5 flex-1 min-w-0'>
          
         <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, scale: 1.03 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className='card flex flex-col gap-2 p-3 w-full lg:w-65'>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#057a22] rounded-full p-2'>
                        <BiBookmarkMinus className='text-[#ffffff] w-8.5 h-8.5' />
                    </div>
                    <h3 className='text-[20px] font-bold'>رؤيتنا</h3>
                </div>
                <p className='text-[16px] font-medium'>ان نكون مؤسسة تعليمية رائدة في مجال الاداره ونظم المعلومات والمحاسبة, تسهم في إعداد قادة قادرين علي التنافسية في بيئة مجتمع متطور</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, scale: 1.03 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className='card flex flex-col gap-2 p-3 w-full lg:w-65'>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#1a0dd8] rounded-full p-2'>
                        <GoGoal className='text-[#ffffff] w-8.5 h-8.5' />
                    </div>
                    <h3 className='text-[20px] font-bold'>اهدافنا</h3>
                </div>
                <p className='text-[16px] font-medium'>تقديم تعليم اكاديمي متميز وبرامج نوعة تلبي احتياجات سوق العمل من خلال إعداد خريجين يمتلكون المعارف والمهارات والقيم المهنة</p>
            </motion.div>


            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, scale: 1.03 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className='card flex flex-col gap-2 p-3 w-full lg:w-65'>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#ff8800] rounded-full p-2'>
                        <GiAlliedStar className='text-[#ffffff] w-8.5 h-8.5' />
                    </div>
                    <h3 className='text-[20px] font-bold'>قيمنا</h3>
                </div>
                <p className='text-[16px] font-medium'>
                    <ul className='list-disc pr-6 flex flex-col gap-1'>
                        <li>الجودة والتميز</li>
                        <li>النزاهة والشفافية</li>
                        <li>الابتكار والابداع</li>
                        <li>العمل الجماعي</li>
                        <li>المسؤلية المجتمعة</li>
                    </ul>
                </p>
            </motion.div>
        </div>

      </motion.div>

      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='About-the-Institute bg-[#f3f0f094] p-5 border border-[rgba(219,216,216,0.67)] rounded-[10px] flex flex-col gap-4 '>
              <h1 className=' text-[25px] font-extrabold'>كلمة رئيس مجلس الادارة</h1>
              <div className='flex flex-col lg:flex-row items-center gap-8 mb-5  '>
                <div >
                  <motion.img initial={{ opacity: 0, x: 80 }}whileInView={{ opacity: 1, x: 0 }}viewport={{ once: true }}transition={{ duration: 0.8, delay: 0.3 }} className='rounded-[10px] w-full lg:w-auto' src="Leader.png" alt="" />
                </div>
                <motion.p initial={{ opacity: 0, x: 80 }}whileInView={{ opacity: 1, x: 0 }}viewport={{ once: true }}transition={{ duration: 0.8, delay: 0.4 }} className='text-[19px] leading-[150%] font-bold text-gray-600 '>نحن في المعهد العالي للإدارة بالمحلة الكبرى نؤمن أن التعليم هو الطريق الأفضل لبناء مستقبل أفضل، نحرص على تقديم تعليم أكاديمي متميز، وتوفير بيئة تعليمية محفزة ومبتكرة قادرة على إعداد خريجين يمتلكون المعارف والمهارات والقيم المهنية لتلبية احتياجات سوق العمل وقادرين على المنافسة والتميز</motion.p>
      
                
              </div>
            </motion.div>
   </div>
   </>






  )
}
