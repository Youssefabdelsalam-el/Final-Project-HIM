import React from 'react'


export default function CardProfile({title,Icon,Information}) {
  return (
   <>
   {/* كود الطالب */}
    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 bg-white rounded-2xl p-3 sm:p-4 border border-[#adadadbd] shadow-lg '>
      <div className='flex items-center gap-2 sm:gap-4 min-w-0'>
        <Icon className='w-5 h-5 text-[#0057D9]' />
        <h1 className='text-base sm:text-[18px] font-bold'>{title}</h1>
      </div>
      <p className='text-base sm:text-[18px] font-bold'>{Information}</p>
    </div>
   </>
  )
}
