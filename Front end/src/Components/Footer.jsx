import React from 'react'
import { FaPhoneAlt, FaRegClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'

export default function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-[#0A192F] px-5 md:px-10 lg:px-30 py-8 text-[#ffff]'>

        <div className='flex flex-col gap-4'>
            <div className='Logo flex gap-5 w-full justify-center items-center'>
                <img className='w-15 rounded-full' src="LOGO.jpeg" alt="logo" />
                <div className='titel flex flex-col '>
                    <h1 className=' text-center lg:text-right'>المعهد العالي للاداره</h1>
                    <h1 className=' text-center lg:text-right'>بالمحله الكبري</h1>
                </div>
            </div>
            
            <div className='text-[#9497a5] flex flex-col gap-5 w-full justify-center items-center'>
                <p>نحو تعليم متميز يصنع قاده المستقبل ويؤهل كوادر</p>
                <p>قادره علي الابداع والمنافسه في سوق العمل</p>
            </div>

            <div className='social social flex justify-center items-center gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path d="M0 0h256v256H0z" fill="none" /><g fill="none"><rect width="256" height="256" fill="url(#SVGKdMMobCR)" rx="60" /><rect width="256" height="256" fill="url(#SVGqYUiQbXV)" rx="60" /><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334" /><defs><radialGradient id="SVGKdMMobCR" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5" /><stop offset=".1" stop-color="#fd5" /><stop offset=".5" stop-color="#ff543e" /><stop offset="1" stop-color="#c837ab" /></radialGradient><radialGradient id="SVGqYUiQbXV" cx="0" cy="0" r="1" gradientTransform="rotate(78.68 -32.69 -16.937)scale(113.412 467.488)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8" /><stop offset=".128" stop-color="#3771c8" /><stop offset="1" stop-color="#60f" stop-opacity="0" /></radialGradient></defs></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="none" /><path fill="red" d="M501.3 132.8c-5.9-22-23.2-39.4-45.3-45.3c-39.9-10.7-200-10.7-200-10.7s-160.1 0-200 10.7c-22 5.9-39.4 23.2-45.3 45.3C0 172.7 0 256 0 256s0 83.3 10.7 123.2c5.9 22 23.2 39.4 45.3 45.3c39.9 10.7 200 10.7 200 10.7s160.1 0 200-10.7c22-5.9 39.4-23.2 45.3-45.3C512 339.3 512 256 512 256s0-83.3-10.7-123.2" /><path fill="#fff" d="m204.8 332.8l133-76.8l-133-76.8z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="none" /><path fill="#007ebb" fill-rule="evenodd" d="M56.9 512h398.2c31.4 0 56.9-25.5 56.9-56.9V56.9C512 25.5 486.5 0 455.1 0H56.9C25.5 0 0 25.5 0 56.9v398.2C0 486.5 25.5 512 56.9 512" /><path fill="#fff" fill-rule="evenodd" d="M440.9 440.9h-76V311.5c0-35.5-13.5-55.3-41.6-55.3c-30.5 0-46.5 20.6-46.5 55.3v129.4h-73.2V194.4h73.2v33.2s22-40.7 74.3-40.7s89.7 31.9 89.7 98v156zM116.3 162.1c-24.9 0-45.2-20.4-45.2-45.5s20.2-45.5 45.2-45.5s45.1 20.4 45.1 45.5s-20.2 45.5-45.1 45.5M78.5 440.9h76.4V194.4H78.5z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="none" /><path fill="#0866ff" d="M213.8 509.4C92.2 487.7 0 382.7 0 256C0 115.2 115.2 0 256 0s256 115.2 256 256c0 126.7-92.2 231.7-213.8 253.4l-14.1-11.5h-56.3z" /><path fill="#fff" d="m355.8 327.7l11.5-71.7h-67.8v-49.9c0-20.5 7.7-35.8 38.4-35.8h33.3V105c-17.9-2.6-38.4-5.1-56.3-5.1c-58.9 0-99.8 35.8-99.8 99.8V256h-64v71.7h64v180.5c14.1 2.6 28.2 3.8 42.2 3.8c14.1 0 28.2-1.3 42.2-3.8V327.7z" /></svg>
            </div>
        </div>

        

        <div className='flex flex-col items-center gap-3 '>
            <h1 className='text-center'>الاقسام</h1>
            <div className='flex flex-col items-center text-[#9497a5]  gap-1'>
                <a href=""><p className='hover:text-[#ffff]'>داره اعمال</p></a>
                <a href=""><p className='hover:text-[#ffff]'>محاسبة ومراجعة</p></a>
                <a href=""><p className='hover:text-[#ffff]'>نظم ومعلومات الأعمال</p></a>
            </div>
        </div>

        <div className='flex flex-col items-center gap-3 '>
            <h1 className='text-center'>روابط سريعة</h1>
            <div className='flex flex-col items-center text-[#9497a5]  gap-1'>
                <a href=""><p className='hover:text-[#ffff]'>الرئسية</p></a>
                <a href=""><p className='hover:text-[#ffff]'>عن المعهد</p></a>
                <a href=""><p className='hover:text-[#ffff]'>الاقسام</p></a>
                <a href=""><p className='hover:text-[#ffff]'>اعضاء هيئة التدريس</p></a>
                <a href=""><p className='hover:text-[#ffff]'>تواصل معنا</p></a>
            </div>
        </div>

        <div className='flex flex-col items-center  gap-3 '>
            <h1 className='text-center'>معلمومات الاتصال</h1>
           <div className='flex items-start gap-3'>

            <div className='flex flex-col items-center gap-3 mt-1'>
                <FaLocationDot className='w-6 h-6 text-[#06a38e]' />
                <FaPhoneAlt className='w-6 h-6 text-[#06a38e]' />
                <MdMail className='w-6 h-6 text-[#06a38e]' />
                <FaRegClock className='w-6 h-6 text-[#06a38e]' />
            </div>

             <div className='flex flex-col items-center text-[#9497a5]  gap-3'>
                <a href=""><p className='hover:text-[#ffff]'>المحله الكبرى - الغربية </p></a>
                <p className='hover:text-[#ffff] cursor-pointer'>01007684480</p>
                <p className='hover:text-[#ffff] cursor-pointer'>HIM@gmail.com</p>
                <div className=' text-[#9497a5] hover:text-[#ffff] cursor-pointer'>
                    <p >من الاحد الي الاربعاء</p>
                    <p>9:00 ص - 4:00 م</p>
                </div>
            </div>
           </div>
        </div>

        

    </div>
  )
}
