import React from 'react'
import { BsFillPersonXFill, BsPersonCheckFill } from 'react-icons/bs'
import { CiWarning } from 'react-icons/ci'
import { MdEditCalendar } from 'react-icons/md'
export default function Details() {
  return (
    <div>
         <div className='bg-white p-4 rounded-lg border border-[#a3a3a356]'>
        
                    {/* ---------------------------------------------------------- */}
                <div className='flex items-center justify-evenly gap-5'>
                     <div className='flex items-center gap-4'>
                        <div className='bg-blue-100 text-blue-400 p-6 rounded-full '>
                            <MdEditCalendar className='w-10 h-10' />
                        </div>
        
                        <div>
                            <p className='text-[25px] font-bold text-blue-400'>24</p>
                            <p className='text-[16px] font-bold'>عدد المحاضرات</p>
                        </div>
                    </div>
        
                    <div className='flex items-center gap-4'>
                        <div className='bg-green-100 text-green-400 p-6 rounded-full '>
                            <BsPersonCheckFill className='w-10 h-10' />
                        </div>
        
                        <div>
                            <p className='text-[25px] font-bold text-green-400'>21</p>
                            <p className='text-[16px] font-bold'>حاضر</p>
                        </div>
                    </div>
        
                     <div className='flex items-center gap-4'>
                        <div className='bg-red-100 text-red-600 p-6 rounded-full '>
                            <BsFillPersonXFill className='w-10 h-10' />
                        </div>
        
                        <div>
                            <p className='text-[25px] font-bold text-red-400'>3</p>
                            <p className='text-[16px] font-bold'>غائب</p>
                        </div>
                    </div>
        
                    <div>
                        <div className="radial-progress flex items-center flex-col gap-1 text-[#1c07dd]" style={{ "--value": "80", "--size": "10rem", "--thickness": "1rem" } }  aria-valuenow={90} role="progressbar">
                            <p className='text-[#4d4fec] font-bold text-[20px]'>80%</p>
                            <p>نسبه الحضور</p>
                        </div>
                    </div>
                  </div>
        
                  <div className='bg-amber-100 flex items-center justify-center rounded-2xl gap-4 p-3 mt-10'>
                    <CiWarning className="w-5 h-5 text-amber-700  " />
                    <p>نسبه حضورك في Database منخفضة يرجي متابعة الحضور</p>
                  </div>
                </div>
    </div>
  )
}
