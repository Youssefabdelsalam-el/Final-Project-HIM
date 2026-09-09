
import { AiOutlineCamera } from 'react-icons/ai'
import { MdLocationPin, MdOutlinePerson, MdPeopleAlt } from 'react-icons/md'
import { useState } from "react";
import CardProfile from './CardProfile';
import { IoMdMailUnread } from 'react-icons/io';
import { FaCalendarMinus, FaGraduationCap, FaIdCard } from 'react-icons/fa';
import { FaPhoneFlip } from 'react-icons/fa6';
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
     
     <div className='flex flex-col sm:flex-col items-center justify-around gap-5'>
      {/* جزء الصوره */}
        <div className='relative w-32 h-32 sm:w-40 sm:h-40'>

          <img  className="w-full h-full rounded-full object-cover border-4 border-[#1544b3] shadow-lg"  src={image} alt="" />

          <label  htmlFor="profileImage"  className="absolute bottom-2 right-2 bg-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-100">
            <AiOutlineCamera />
          </label>
            
          <input  id="profileImage"  accept="image/*" onChange={handleImageChange} className="hidden" type="file" />
        </div>
        {/* الاسم والصفة */}
        <div className='flex flex-col items-center gap-3'>
          <h1 className='text-[#0B1F4D] text-lg sm:text-[23px] font-bold text-center'>يوسف عبد السلام مصطفي السمان</h1>
          <div className='bg-[#cfe0fc] p-2 rounded-3xl'>
            <p className='text-[18px] text-[#0057D9]'>طالب</p>
          </div>
        </div>
      </div>
      
      {/* بانات الطالب */}

      <div className='flex flex-col gap-2'>
        {/* كود الطالب */}
        <CardProfile title="كود الطالب" Icon={FaIdCard} Information="202612345"  />
        {/* التخصص*/}
        <CardProfile title="التخصص" Icon={FaGraduationCap} Information="نظم ومعلومات الاعمال"  />
        {/* الفرقة*/}
        <CardProfile title="الفرقة" Icon={MdPeopleAlt} Information="الثالثة"  />
        {/* العام الدراسي*/}
        <CardProfile title="العام الدراسي" Icon={FaCalendarMinus} Information="2026/2027"  />
        {/* البريد الالكتروني*/}
        <CardProfile title="البريد الالكتروني" Icon={IoMdMailUnread} Information="youssef1234@gmail.com"  />
        {/* رقم الهاتف*/}
        <CardProfile title="رقم الهاتف" Icon={FaPhoneFlip} Information="01007684479"  />
        {/* الهنوان*/}
        <CardProfile title="العنوان" Icon={MdLocationPin} Information="الاسكندريه - العجمي"  />

      </div>
    </div>
  )
}
