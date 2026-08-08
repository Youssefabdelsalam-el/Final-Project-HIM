import React from 'react'
import { PiCodeFill } from 'react-icons/pi'

export default function CardSubjects({subject , doctor , Icon , styleicon , bgicon}) {
  return (
    <>
    <div className='shrink-0 w-[15%] flex flex-col items-center gap-2 py-4 px-6 border border-[#d8d8d85d] rounded-2xl'>
        <div className={bgicon}>
            <Icon className={styleicon} />
        </div>
        <h1 className='text-[18px] font-bold'>{subject}</h1>
        <p className='text-[15px]'>د. {doctor}</p>
    </div>
    </>
  )
}


