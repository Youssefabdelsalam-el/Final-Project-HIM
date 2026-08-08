import React from 'react'


export default function CardProfile({title,num,Icon,styleicon}) {
  return (
    <div className='flex items-center gap-4 '>
        <div className= {styleicon} >
            <Icon className='w-8 h-8' />
        </div>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[#6B7890] whitespace-nowrap'>{title}</h1>
            <p className='text-[20px] font-bold'>{num}</p>
        </div>
    </div>
  )
}
