import React from 'react'
import Select from './Select'

export default function TitelPage({titel,description,Icon}) {
  return (
    <div className='flex flex-col gap-5 px-2 sm:px-4 md:px-6'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 '>
            <div className='flex items-center gap-2'>
                <div className='bg-[#cfe0fc] text-[#0057D9] p-4 rounded-2xl'>
                <Icon className='w-7 h-7' />
                </div>
                <div>
                <h1 className='text-2xl md:text-3xl font-bold'>{titel}</h1>
                <p className='text-[17px] text-[#68758A]'>{description}</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}
