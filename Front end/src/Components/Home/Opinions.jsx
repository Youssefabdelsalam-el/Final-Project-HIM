import React from "react";
import { IoMdStar } from "react-icons/io";
import { SiComma } from "react-icons/si";
import { motion } from "motion/react";
export default function Opinions() {
  return (
    // اراء الطلاب
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="titel flex items-center justify-center mt-7.5 mb-7.5 "
      >
        <h1 className="text-[30px] font-extrabold border-b-3 border-[#12bdbdec]">
          أراء الطلاب
        </h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-1 p-3 border border-[#c9c7c7] rounded-lg"
        >
          <div className="flex items-center gap-6">
            <div className="flex text-[#105d7070]">
              <SiComma />
              <SiComma />
            </div>
            <div className="flex">
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row  gap-4">
            <div>
              <p>
                التعليم هنا علي مستوي عالي جدا, والدكاتره بيساعدونا في كل خطوة.
              </p>
            </div>
            <div className="photo-student">
              <img className="w-20 rounded-full" src="person.jpeg" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-[20px] font-bold text-[#1d6dd6]">
              يوسف عبد السلام
            </h5>
            <p className="text-[14px] font-bold">قسم نظم ومعلومات الاعمال</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-1 p-3 border border-[#c9c7c7] rounded-lg"
        >
          <div className="flex items-center gap-6">
            <div className="flex text-[#105d7070]">
              <SiComma />
              <SiComma />
            </div>
            <div className="flex">
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <p>
                التعليم هنا علي مستوي عالي جدا, والدكاتره بيساعدونا في كل خطوة.
              </p>
            </div>
            <div className="photo-student">
              <img className="w-20 rounded-full" src="person.jpeg" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-[20px] font-bold text-[#1d6dd6]">
              يوسف عبد السلام
            </h5>
            <p className="text-[14px] font-bold">قسم نظم ومعلومات الاعمال</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-1 p-3 border border-[#c9c7c7] rounded-lg"
        >
          <div className="flex items-center gap-6">
            <div className="flex text-[#105d7070]">
              <SiComma />
              <SiComma />
            </div>
            <div className="flex">
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
              <IoMdStar className="w-7 h-7 text-[#f3a006]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <p>
                التعليم هنا علي مستوي عالي جدا, والدكاتره بيساعدونا في كل خطوة.
              </p>
            </div>
            <div className="photo-student">
              <img className="w-20 rounded-full" src="person.jpeg" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-[20px] font-bold text-[#1d6dd6]">
              يوسف عبد السلام
            </h5>
            <p className="text-[14px] font-bold">قسم نظم ومعلومات الاعمال</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
