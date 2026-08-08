import React from 'react'
import { motion } from "motion/react";
export default function Questions() {
  return (
    // الاسئله الشائعة
    <>
    <motion.div initial={{ opacity: 0, y: -30 }}whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}transition={{ duration: 0.6 }} className='titel flex items-center justify-center mt-7.5 mb-7.5 '>
        <h1 className='text-[30px] font-extrabold border-b-3 border-[#12bdbdec]'>الأسئلة الشائعة</h1>
    </motion.div>

    <div className='flex flex-col gap-2'>
        <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1" open>
            <summary className="collapse-title font-semibold">كيف يمكنني التقديم في المعهد؟</summary>
            <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
        </details>
        <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
            <summary className="collapse-title font-semibold">ما هي المصاريف الدراسية؟</summary>
            <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
        </details>
        <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
            <summary className="collapse-title font-semibold">ما هي اجراءات التنسيق؟</summary>
            <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </details>
        <details className="collapse bg-base-100 border border-base-300" name="my-accordion-det-1">
            <summary className="collapse-title font-semibold">ما هي الاوراق المطلوبة للتقديم؟</summary>
            <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
        </details>

    </div>
    </>
  )
}
