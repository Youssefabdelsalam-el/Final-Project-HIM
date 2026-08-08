import { useState } from "react";
import { motion } from "motion/react";
import { FaGooglePlay } from "react-icons/fa";
export default function Video() {

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="my-14">

      <motion.div initial={{ opacity: 0, y: -30 }}whileInView={{ opacity: 1, y: 0 }}viewport={{ once: true }}transition={{ duration: 0.6 }} className='titel flex items-center justify-center mb-8 '>
        <h1 className='text-2xl md:text-3xl font-extrabold border-b-3 border-[#12bdbdec]'>فيديو تعريفي عن المعهد</h1>
      </motion.div>

  <div className="bg-[#082B69] rounded-2xl overflow-hidden">

    <div className="flex flex-col lg:flex-row">

      <div className="relative lg:w-[60%] h-95">

        {!playVideo ? (
          <>
            <img src="WhatsApp Image 2026-07-16 at 8.07.53 PM.jpeg" className="w-full h-full object-cover" alt="" /> 

            <div className="absolute inset-0 bg-[#001C4D]/60"></div>

            <button onClick={() => setPlayVideo(true)} className="absolute inset-0 flex justify-center items-center" >
              <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex justify-center items-center hover:scale-110 duration-300 cursor-pointer">

                <span className="text-[#082B69] text-4xl ml-1 ">
                  <FaGooglePlay />
                </span>

              </div>
            </button>
          </>
        ) : (

          <video
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            <source src="/him video.mp4" type="video/mp4" />
          </video>

        )}

      </div>

      <div className="lg:w-[40%] flex flex-col justify-center items-center text-center text-white px-10 py-10">

        <h2 className="text-4xl font-bold leading-relaxed mb-5">
          تعرف على بيئة تعليمية متكاملة داخل المعهد
        </h2>

        <p className="text-xl leading-10 text-gray-200">
          واكتشف البرامج الأكاديمية المتميزة
          <br />
          والأنشطة الطلابية
        </p>

        <button
          onClick={() => setPlayVideo(true)}
          className="mt-10 bg-[#19D3E0] hover:bg-cyan-300 duration-300 text-white px-10 py-3 rounded-lg font-bold shadow-lg cursor-pointer"
        >
          شاهد الفيديو
        </button>

      </div>

    </div>

  </div>

</section>
  );
}

