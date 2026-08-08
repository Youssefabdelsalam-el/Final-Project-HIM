
import { AiOutlineCamera, AiOutlineEdit } from 'react-icons/ai'
import { MdOutlinePerson } from 'react-icons/md'
import React, { useState } from "react";
import CardProfile from './CardProfile';
import { IoCalendarOutline, IoStatsChart, IoTimeOutline } from 'react-icons/io5'
import { FiBookOpen } from 'react-icons/fi';
import { TiStarOutline } from 'react-icons/ti';
import { ImProfile } from 'react-icons/im';
import { LuChartSpline, LuPenLine } from 'react-icons/lu';
import { GiGraduateCap } from 'react-icons/gi';
import { IoIosLock } from 'react-icons/io';
import { TbPointFilled } from 'react-icons/tb';
import {PieChart,Pie,Cell,ResponsiveContainer} from "recharts";
export default function Profile() {
  {/* تغير الصوره */}
   const [image, setImage] = useState("/person.jpeg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  {/* لتعديل البيانات  */}
 const [isEditing, setIsEditing] = useState(false)
const defaultStudent = {
  name: "يوسف عبد السلام مصطفي",
  universityId: "204232344",
  level: "الفرقة الثالثة",
  department: "نظم ومعلومات الاعمال",
  email: "youssef33@gmail.com",
  phone: "01007684479",
  birthDate: "30 اكتوبر 2005",
  address: "الاسكندرية - العجمي"
};

const [student, setStudent] = useState(() => {
  const savedStudent = localStorage.getItem("student");

  return savedStudent
    ? JSON.parse(savedStudent)
    : defaultStudent;
});
const handleChange = (e) => {
  setStudent({
    ...student,
    [e.target.name]: e.target.value
  })
}

  return (
    <div className='flex flex-col gap-7'>
      <div className='profile flex items-center gap-3'>
        <div className='bg-[#EAF2FF] text-[#0B1F4D] p-3 rounded-full'>
          <MdOutlinePerson className='w-9 h-9'  />
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-[#0B1F4D] text-[25px] font-bold'>الملف الشخصي</h1>
          <div>
            <p>الرئيسية / <span> الملف الشخصي</span></p>
          </div>
        </div>
      </div>
      <div className='section grid grid-cols-1 xl:grid-cols-2 gap-5 items-stretch'>
        <div className='card-profile bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-4 w-full h-full '>
          <div className='flex flex-col sm:flex-row items-center justify-around gap-5'>
            <div className='flex flex-col items-center gap-3'>
              <h1 className='text-[#0B1F4D] text-lg sm:text-[23px] font-bold text-center'>يوسف عبد السلام مصطفي</h1>
              <p className='text-[18px] text-[#6B7890]'>طالب</p>

              <div className='bg-[#E4F7EF] px-4 rounded-4xl flex items-center gap-2'>
                <span className='bg-[#42C393] w-2 h-2 rounded-full'></span>
                <p className='text-[#42C393] font-bold'>نشط</p>
              </div>
            </div>
            <div className='relative w-32 h-32 sm:w-40 sm:h-40'>

              <img  className="w-full h-full rounded-full object-cover border-4 border-[#1544b3] shadow-lg"  src={image} alt="" />

              <label  htmlFor="profileImage"  className="absolute bottom-2 right-2 bg-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-100">
                <AiOutlineCamera />
              </label>
            
              <input  id="profileImage"  accept="image/*" onChange={handleImageChange} className="hidden" type="file" />
            </div>
          </div>

          <div className='cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
            <CardProfile title="السنة الدراسية" num="2024/2025" Icon={IoCalendarOutline} styleicon="bg-[#E4F7EF] text-[#35a079] p-3 rounded-4xl"/>
            <CardProfile title="عدد المواد المسجلة" num="6" Icon={FiBookOpen} styleicon="bg-[#EAF2FF] text-[#0057D9] p-3 rounded-4xl"/>
            <CardProfile title="عدد الساعات المكتسبة" num="124" Icon={IoTimeOutline} styleicon="bg-[#FFF1DC] text-[#FFA62B] p-3 rounded-4xl"/>
            <CardProfile title="المعدل التراكمي" num="3.41" Icon={TiStarOutline} styleicon="bg-[#F0EAFF] text-[#7047E8] p-3 rounded-4xl"/>
          </div>

          <div className='w-full h-48 sm:h-60 overflow-hidden rounded-4xl'>
            <img  class="w-full h-full object-cover object-center" src="/WhatsApp Image 2026-07-16 at 8.07.53 PM.jpeg" alt="" />
          </div>
        </div>

        <div className='Data min-w-0 flex flex-col gap-5 rounded-2xl bg-white p-4 md:p-6 border border-[#E4EAF3] shadow-sm h-full'>
          <div className='flex items-center gap-3'>
            <ImProfile className='text-[#063B8F] w-6 h-6' />
            <h1 className='text-[22px] text-[#062b68] font-bold'>معلومات الطالب</h1>
          </div>
          <form className='bg-[#0345a8] text-white p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-3xl  '>

            <div className='flex flex-col gap-2'>
                <label>الاسم بالكامل</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input name="name" value={student.name} onChange={handleChange} disabled={!isEditing} className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="text" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>الرقم الجامعي</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input name="universityId" value={student.universityId} onChange={handleChange} disabled={!isEditing} className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="text" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>الفرقة</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input name="level" value={student.level} onChange={handleChange} disabled={!isEditing} className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="text" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>القسم</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input name="department" value={student.department} onChange={handleChange} disabled={!isEditing} className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="text" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>البريد الالكتروني</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input name="email" value={student.email} onChange={handleChange} disabled={!isEditing} className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="email" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>رقم الهاتف</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input name="phone" value={student.phone} onChange={handleChange} disabled={!isEditing} className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="phone" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>تاريخ الميلاد</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input name="birthDate" value={student.birthDate} onChange={handleChange} disabled={!isEditing} className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="date" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>العنوان</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input name="address" value={student.address} onChange={handleChange} disabled={!isEditing} className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="text" />
                </div>
            </div>
          </form>

           <div className="flex justify-center mt-1">
              <button onClick={() => setIsEditing(!isEditing)} className="flex items-center gap-2 border border-[#1544B3] text-[#1544B3] px-6 sm:px-10 py-3 rounded-xl hover:bg-[#1544B3] hover:text-white cursor-pointer duration-300">
                <AiOutlineEdit />

                 {isEditing ? "حفظ البيانات" : "تعديل البيانات"}
                 
                 </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 items-stretch'>
        <div className='bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-4 w-full h-full'>
          <div className='flex items-center gap-3'>
            <GiGraduateCap className='text-[#063B8F] w-6 h-6' />
            <h1 className='text-[22px] text-[#062b68] font-bold'>معلومات  اكاديمية</h1>
          </div>

          <div className='grid grid-cols-2 gap-4 bg-[#f0eaff73] p-5 h-full rounded-3xl text-[17px] font-bold'>
            <p>النظام الدراسي</p>
            <p>نظام الساعات المعتمدة</p>

            <p>عدد الساعات المعتمده المطلوبة</p>
            <p>152 ساعة</p>

            <p>عدد الساعات المكتسبة</p>
            <p>124 ساعة</p>

            <p>عدد الساعات المطبقية</p>
            <p>28 ساعة</p>

            <p>الحالة الاكاديمية</p>
            <p className='text-[#42C393] font-bold'>مستمر</p>

          </div>

        </div>

        <div className='bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-4 w-full h-full'>
           <div className='flex items-center gap-3'>
            <IoIosLock className='text-[#063B8F] w-6 h-6' />
            <h1 className='text-[22px] text-[#062b68] font-bold'>تغير كلمة السر</h1>
          </div>

          <form className='bg-[#0345a8] text-white p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 rounded-3xl'>

            <div className='flex flex-col gap-2'>
                <label>كلمة المرور الحالية</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="password" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>كلمة المرور الجديدة</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="password" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <label>تأكيد كلمة المرور الجديدة</label>
                <div className='bg-white w-full h-10 rounded-lg'>
                  <input className='w-full h-full outline-none text-black px-3 text-sm sm:text-base' type="password" />
                </div>
            </div>

            

          </form>

          <button className="  text-[#ffffff] px-6 sm:px-10 py-3 rounded-lg bg-[#1544B3] hover:text-[#1544B3] hover:bg-[#ffffff] cursor-pointer duration-300">حفظ التغيرات</button>
        </div>

        <div className='bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-4 w-full h-full'>
           <div className='flex items-center gap-3'>
            <LuChartSpline className='text-[#063B8F] w-5 h-5 sm:w-6 sm:h-6' />
            <h1 className='text-lg sm:text-[22px] text-[#062b68] font-bold'>الإحصائيات</h1>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 flex-1'>
            <div className='grid grid-cols-2 items-center gap-x-2 gap-y-4'>
              <p className=' text-base sm:text-[20px] font-bold flex items-center gap-3'><TbPointFilled className='text-green-500 w-5 h-5' />94%</p>
              <p className='text-sm sm:text-[18px] font-bold'>نسبة الحضور</p>

              <p className=' text-base sm:text-[20px] font-bold flex items-center gap-3'><TbPointFilled className='text-blue-500 w-5 h-5' />16 يوم</p>
              <p className='text-sm sm:text-[18px] font-bold'>عدد ايام الحضور</p>

              <p className=' text-base sm:text-[20px] font-bold flex items-center gap-3'><TbPointFilled className='text-red-500 w-5 h-5' />4 يوم</p>
              <p className='text-sm sm:text-[18px] font-bold'>عدد ايام  الغياب</p>

            </div>
            <div className="flex items-center justify-center">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52">

                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                     <Pie
                       data={[
                          { name: "حضور", value: 94 },
                          { name: "غياب", value: 6 },
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius="60%"
                        outerRadius="85%"
                        startAngle={90}
                        endAngle={-270}
                        dataKey="value"
                        stroke="none"
                      >
                        <Cell fill="#42C393" />
                        <Cell fill="#FF3B30" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  {/* الكلام اللي في نص الدائرة */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-3xl sm:text-4xl font-bold text-[#0B1F4D]">94%</p>
                    <p className="text-sm text-[#0B1F4D]">نسبة الحضور</p>
                  </div>

                </div>
            </div>

         </div>
         <button className="flex items-center justify-center gap-3  text-[#ffffff] py-3 w-full rounded-lg bg-[#1544B3] hover:text-[#1544B3] hover:bg-[#ffffff] cursor-pointer duration-300"><IoStatsChart className='w-4 h-4 sm:w-5 sm:h-5' /> عرض التقاصيل</button>
          
        </div>
      </div>
    </div>
  )
}
