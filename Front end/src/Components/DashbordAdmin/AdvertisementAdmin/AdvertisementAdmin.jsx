import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CreateAdButton from './CreateAdButton'
import FilterAd from './FilterAd'
import SearchAd from './SearchAd'
import CardAd from './CardAd'
import { IoMegaphoneOutline } from 'react-icons/io5'

export default function AdvertisementAdmin() {
  return (
    <div className=' w-full flex flex-col gap-7'>
           <div className='flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
               {/* العنوان ولينك الانتقال */}
               <div className='flex flex-col gap-3 sm:gap-4 min-w-0'>
                   <div className='flex items-center gap-3'>
                      <div className='text-blue-600 bg-blue-100 p-3 rounded-4xl'>
                        <IoMegaphoneOutline className='w-7 h-7' />
                      </div>
                      <h1 className='text-xl sm:text-2xl md:text-[25px] font-bold'>الأعلانات</h1>
                  </div>
                   <div className='flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500'>
                       <AiOutlineHome className='text-blue-600 w-5 h-5' />
                       <IoIosArrowBack />
                       <Link className='hover:text-blue-500' to="/Dashbord Admin">الرئيسة</Link>
                       <IoIosArrowBack />
                       <p>الأعلانات</p>
                   </div>
               </div>
   
               {/* انشاء اعلان */}
               <div className='w-full lg:w-auto'>
                <CreateAdButton/>
               </div>
           </div>

          <div className='flex w-full flex-col gap-4'>
                <SearchAd/>
                <FilterAd/>
          </div>

          <div className='flex w-full flex-col gap-4'>
                <CardAd/>
                <CardAd/>
                <CardAd/>
                <CardAd/>
          </div>

    </div>
  )
}
