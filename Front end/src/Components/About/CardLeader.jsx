import React from 'react'
import Swal from "sweetalert2";
import { motion } from "framer-motion";

export default function CardLeader({name , profession , img , bio }) {

const showBio = () => {
  Swal.fire({
    title: name,
    text: bio,
    imageUrl: img,
    imageWidth: 150,
    imageHeight: 150,
    confirmButtonText: "إغلاق",
  });
};
  return (
    <>

    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} whileHover={{ y: -10, scale: 1.05, }} className='card flex flex-col items-center gap-3 p-4 border border-[#e6e3e3] rounded-xl shadow-sm w-full max-w-75 cursor-pointer'>
        <img className='w-full h-55 object-cover rounded-lg' src= {img} alt="" />

        <div className='who flex flex-col items-center gap-2 text-center'>
            <h1 className='text-lg font-bold text-[#052c97]'>{name}</h1>
            <p className='text-sm md:text-base font-semibold min-h-12'>{profession}</p>
        </div>
                
        <motion.button whileHover={{ scale: 1.08, backgroundColor: "#0f0450", }} whileTap={{ scale: 0.95 }} onClick={showBio} className='mt-auto bg-[#170672] text-white py-2 px-6 rounded-lg hover:bg-[#0f0450] transition cursor-pointer'>عرض نبذة</motion.button>
    </motion.div>

    </>
  )
}
