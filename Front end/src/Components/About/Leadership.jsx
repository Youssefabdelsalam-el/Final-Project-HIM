import React from 'react'
import { motion } from "motion/react";
import CardLeader from './CardLeader';
export default function Leadership() {

  return (

    //قياه المعهد
    <>
    <div>
        <motion.div initial={{ opacity: 0, y: -30 }}whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}transition={{ duration: 0.6 }} className='titel flex items-center justify-center mb-8 '>
            <h1 className='text-2xl md:text-3xl font-extrabold border-b-3 border-[#12bdbdec]'>قيادة المعهد</h1>
          </motion.div>
          
          <div className='cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4 sm:px-6 lg:px-10 xl:px-20 py-5 justify-items-center '>

            <CardLeader name="أ.د\ محمد السيد أبراهيم" profession="رئيس مجلس الادارة" img="Doctor.png" bio="يشغل منصب رئيس مجلس الإدارة وله خبرة كبيرة في مجال التعليم العالي."/>
            <CardLeader name="أ.د\ أاحمد محمد السيد" profession="عميد المعهد" img="Doctor.png " bio="يتولى الإشراف على العملية التعليمية وتطوير البرامج الأكاديمية."/>
            <CardLeader name="أ.د\ سعاد علي حسن" profession="وكيل المعهد لشؤن التعليم والطلاب" img="Doctora2.png " bio="تتابع شؤون الطلاب وتطوير الخدمات التعليمية."/>
            <CardLeader name="أ.د\ محمد عبد المنعم" profession="وكيل المعهد لشؤون الدراسات العليا والبحث العلمي" img="Doctor.png" bio="يشرف على برامج الدراسات العليا والبحث العلمي، ويعمل على دعم الباحثين وتشجيع النشر العلمي والابتكار"/>
            <CardLeader name="أ\خالد ابراهيم محمود" profession="أمين المعهد" img="Doctor.png " bio="يتولى الإشراف على الشؤون الإدارية والمالية للمعهد، ويعمل على توفير بيئة عمل منظمة لدعم العملية التعليمية"/>
          </div>

    </div>
    </>
  )
}