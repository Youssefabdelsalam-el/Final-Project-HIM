import React from 'react'
import { IoCalendarOutline, IoMegaphoneOutline } from 'react-icons/io5'
import { PiGraduationCap } from 'react-icons/pi'
import CardDetail from './CardDetail'
import { LuBookOpenText } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { MdTask } from 'react-icons/md'
import { FaChartPie } from 'react-icons/fa'
import Table from './Table'
import Advertisements from './Advertisements'
import Assignments from './Assignments'
import AcademicSubjects from './AcademicSubjects'


export default function Home() {
  return (
    <>
    <section className=' px-4 md:px-8 lg:px-12 py-6 flex flex-col gap-12'>
      
      <div className="flex lg:hidden items-center justify-between w-full px-2">

  {/* الاسم والحالة */}
  <div className="text-right">
    <h1 className="text-sm md:text-base font-bold text-[#0345a8]"> يوسف عبد السلام مصطفى</h1>

    <p className="text-xs md:text-sm font-bold"> طالب</p>
  </div>

  {/* صورة الطالب */}
  <div className="w-11 h-11 md:w-13 md:h-13 shrink-0">
    <img className="w-full h-full rounded-full object-cover" src="person.jpeg" alt="صورة الطالب"
    />
  </div>

</div>
      <div className='Hero relative flex flex-col xl:flex-row items-center justify-between bg-white rounded-[30px] overflow-hidden'>
        <div className='z-10 w-full xl:w-1/2'>

          <div className='flex flex-col items-start gap-4 p-6 lg:p-8 xl:p-10'>

          <div className='flex flex-col items-start gap-2 lg:gap-3 xl:gap-4'>
            <p><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" viewBox="0 0 128 128" viewBox="0 0 128 128"><path d="M0 0h128v128H0z" fill="none" /><path fill="#FFCA28" d="M93.3 60c.2.3.7.1.7-.2c.6-5.4 2.2-20.3 12.8-23.5c3.4-1 6.8 1.4 7.2 4.5c.7 5-5 17.9-4.5 29.7c.1 1.9 3.3 22-5.2 33.9s-28.7 24-48.8 5.6c-10.4-9.5-10.4-13.3-23.3-26.6c-2.6-2.6-13-14-15.8-17.5c-3.7-4.7 2.2-10.9 6.7-7.7c2.1 1.5 20.7 17.1 21.4 17.8c1.4 1.2 3.1-.5 2.1-1.7c-11.4-15-22.4-28.5-25.4-33.7s4.2-10.8 8.4-6.3c2.9 3 24.4 28.1 25.4 29.2s2.7-.3 2.1-1.7c-.7-1.3-18.1-31.6-21.2-38.5c-2.7-6.1 6.3-11.8 10.5-5.5c3.4 5 22.4 36.6 23.1 37.7c.9 1.6 2.9.6 2.1-1.2C71 53 59.3 21 58.4 17.7c-1.6-5.8 6.7-10.6 10.6-4c5.3 9.1 15.8 36.9 24.3 46.3" /><defs><path id="SVGTXYnub2S" d="M93.3 60c.2.3.7.1.7-.2c.6-5.4 2.2-20.3 12.8-23.5c3.4-1 6.8 1.4 7.2 4.5c.7 5-5 17.9-4.5 29.7c.1 1.9 3.3 22-5.2 33.9s-28.7 24-48.8 5.6c-10.4-9.5-10.4-13.3-23.3-26.6c-2.6-2.6-13-14-15.8-17.5c-3.7-4.7 2.2-10.9 6.7-7.7c2.1 1.5 20.7 17.1 21.4 17.8c1.4 1.2 3.1-.5 2.1-1.7c-11.4-15-22.4-28.5-25.4-33.7s4.2-10.8 8.4-6.3c2.9 3 24.4 28.1 25.4 29.2s2.7-.3 2.1-1.7c-.7-1.3-18.1-31.6-21.2-38.5c-2.7-6.1 6.3-11.8 10.5-5.5c3.4 5 22.4 36.6 23.1 37.7c.9 1.6 2.9.6 2.1-1.2C71 53 59.3 21 58.4 17.7c-1.6-5.8 6.7-10.6 10.6-4c5.3 9.1 15.8 36.9 24.3 46.3" /></defs><clipPath id="SVGOde5adtf"><use href="#SVGTXYnub2S" /></clipPath><g fill="#FAA700" clip-path="url(#SVGOde5adtf)"><path d="M91.2 60.2c-12.4 10.1-17.9 24.5-7.7 39.5c.9 1.3 2.8.1 2-1.4c-4.2-7.5-7.3-21 7.2-35.1c1.7.8 3.7-.9 3.8-2.4c1.1-9.4 2.2-17.2 9.2-21.6c2.7-1.7 6.2-.5 6.4 3.6c0 0 2.2.2 3.1.3c.5-2.1 1.5-5.9 1.5-6s-11.8-4.5-11.8-4.5L94.6 42.8zm-20-4.1c1.4-.7 2.6-1.8 2-3.3c-.6-1.6-11.7-31.8-12.4-34.1c-1.4-4.2 2.1-7.5 5.2-6.1c1.7.8 2.5-1.9 1.6-2.3s-3-2.3-7.2-.2c-7.5 3.8-3.1 12.2-1.1 17.1s11.9 28.9 11.9 28.9m-14.5 7.5c1.7-1.2 3-2.2 1.5-4.6c-1-1.6-17.9-32.3-19.6-35.3c-2.5-4.3 2.7-8.1 5.6-5.4c1.3 1.2 3.3-1.4 2.3-2.4s-4.5-3.9-8.9-1s-4.5 6.4-3.9 7.9c.5 1.5 23 40.8 23 40.8m-10 12.3c1.2-1.8 2-2.7.3-5S25.1 42.2 24 40.7c-2.8-3.7 1.3-6.9 3.3-5.8c1.9 1.1 3-2 1.4-2.8s-4.2-1.7-6.6 0s-3.8 5.2-3.4 7.2c.3 2 28 36.6 28 36.6" /><path d="M92.8 113.6c-16.2 7.7-28.3 1.7-36.1-5.9c-8.9-8.7-13.1-16.7-19-22.1c-2-1.9-17.8-18.7-19.7-21.6c-1.5-2.4 1.5-6.5 4.8-4.2c2.1 1.4 3.1-1.6 1.7-2.4s-4.5-2.5-7.8 0c-3.3 2.4-3.4 6.7-2.6 8.1s49.4 57.2 49.4 57.2l19.8-.5l10.6-6.5z" /></g><defs><use href="#SVGTXYnub2S" id="SVGdNmDqbHG" /></defs><clipPath id="SVG4O03hchm"><use href="#SVGdNmDqbHG" /></clipPath><g fill="#B55E19" clip-path="url(#SVG4O03hchm)"><path d="M111.5 36c.5 1.3 1.1 3.6.5 6.7c-2.3 11.6-6.1 18.4-4.9 30.9c2.2 24-6.2 42.2-35.1 45.8c-2.9.4-2.1 2.6-.6 2.4c.7-.1 21.3-3.8 21.3-3.8s19.1-16.3 19.1-16.5s4.8-62.4 4.8-62.4zm-50-25.5c1.3.2 4.1 1.3 6.1 5.2s11.8 26.4 13.1 28.8s6.6 14.3 10.9 17.9c1.4 1.1 2.1-.8 2.1-.8l.1-3.1L70.6 5.7l-7.7.3zm9.7 45.6c-1.9.9-3.3 1.7-4.7-.5C65.6 54 55.9 37.4 43.7 18c-1-1.5-3.3-2.8-5.1-2.1c-1.8.8-2.2-1.5-1.3-2s6.5-3.6 10.3 2.8s23.6 39.4 23.6 39.4m-14.5 7.5c-1.5 1.1-3 2.5-4.9.2c-1.8-2.2-22.3-26.6-23.5-28.1s-3.7-2.8-5.6-1.6c-1.3.8-2.5-1.6-1.7-2.2s5.3-4.6 8.3-1.2s27.4 32.9 27.4 32.9m-10 12.3c-1.3 1.4-2.7 2.2-4.6.8S23.2 61 22.1 60s-4.3-2.5-6.7-.1c-.9.9-2.5-.6-1.6-1.5c.9-1 5.8-6 9.7-2.7s23.2 20.2 23.2 20.2" /></g><path fill="#B0BEC5" d="M10.6 81.3c3.1 9.2 7.8 14.9 15.5 20.1c1.4 1 .6 3-1 2.3c-7.2-2.9-15.2-9.3-17.1-22c-.3-1.7 2.1-2 2.6-.4m6-5.5c3.1 9.2 7.8 14.9 15.5 20.1c1.4 1 .6 3-1 2.3c-7.2-2.9-15.2-9.3-17.1-22c-.2-1.7 2.1-2 2.6-.4m76.9-41.2c-2.4-9.4-6.8-15.4-14.1-21c-1.4-1-.4-3 1.2-2.3c7 3.3 14.6 10.3 15.6 23.1c.1 1.7-2.3 1.9-2.7.2m6.5-4.8c-2.4-9.4-6.8-15.4-14.1-21c-1.4-1-.4-3 1.2-2.3c7 3.3 14.6 10.3 15.6 23.1c.1 1.6-2.2 1.8-2.7.2" /></svg></p>
            <h1 className='text-2xl lg:text-3xl xl:text-5xl font-bold text-[#0d024d]'>مرحبا بك</h1>
            <span className='text-2xl lg:text-3xl xl:text-5xl text-[#0d024d]'>يوسف عبد السلام</span>
          </div>

          <div className='flex flex-col gap-10'>
            <p className='text-sm lg:text-base xl:text-xll text-[#817d7d] mr-13'>نتمني لك يوما دراسيا موفقا ومليئا بالائنجاز</p>
            {/* عرض فرقه كام */}
            <div className='flex flex-col md:flex-row gap-4'>

              <div className='flex items-center gap-4 bg-[#EAF3FF] py-4 px-5 rounded-lg '>
                <PiGraduationCap className='text-[#0D47A1] w-7 h-7' />
                <p className='text-[18px]'>الفرقه الرابعه - <span>نظم ومعلومات الاعمال</span></p>
              </div>

              <div className='flex items-center gap-4 bg-[#EAF3FF] py-4 px-5 rounded-lg '>
                <p className='text-[18px]'>محاضرات اليوم</p>
                <IoCalendarOutline  className='text-[#0D47A1] w-7 h-7' />
              </div>

            </div>
          </div>
          </div>

        </div>
        <img className='w-full xl:w-1/2 h-80 lg:h-105 object-cover rounded-4xl' src="WhatsApp Image 2026-07-16 at 8.07.53 PM.jpeg" alt="" />
        <div className="absolute inset-0 bg-linear-to-l from-[#fcfcfc] via-[#ffff]/30 to-transparent rounded-[30px]"></div>  
      </div>
      {/* الاكاردات*/}
      <div className='cards-details grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8'>
        <CardDetail title="عدد المواد" number="6" about="مواد مسجلة" linke="" Icon={LuBookOpenText} titlelink="عرض المواد" />
        <CardDetail title="محاضرات اليوم" number="3" about="محاضرات" linke="" Icon={IoCalendarOutline} titlelink="عرض الجدول" />
        <CardDetail title="الواجبات" number="2" about="واجبات مستحقة" linke="" Icon={MdTask} titlelink="عرض التفاصيل" />
        <CardDetail title="نسبه الحضور" about="ممتاز" linke="" Icon={FaChartPie} titlelink="عرض التفاصيل" />
      </div>

      {/* جدول اليوم والاعلانات*/}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <Table typetaple="جدول اليوم"  title1="المكان" title2="اسم الدكتور" title3="اسم الماده" title4="الساعة" Icon={IoCalendarOutline}/>
        <Advertisements/>
      </div>

      {/* المواد و الواجيات*/}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <AcademicSubjects/>
        <Assignments/>
      </div>


    </section>
    </>
  )
}
