import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5'

export default function Table({typetaple , title1 , title2 , title3 , title4 , Icon}) {
  return (
    <>
     {/* الجدول*/}
            <div className=' bg-white p-4 md:p-5 rounded-2xl flex flex-col gap-4 w-full '>
              <div className='flex items-center justify-between text-[#1300c0]'>
                <h1 className='text-[15px] font-bold'>{typetaple}</h1>
                <Icon className='w-5 h-5 md:w-6 md:h-6' />
              </div>
              <div className="w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table text-xs md:text-sm lg:text-base">
                  {/* head */}
                  <thead>
                    <tr className='text-[#1300c0] text-xs md:text-sm'>
                      <th>#</th>
                      <th>{title1}</th>
                      <th>{title2}</th>
                      <th>{title3}</th>
                      <th>{title4}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className=' text-xs md:text-sm'>
                      <th>1</th>
                      <td>قاعه 501</td>
                      <td>د. محمد احمد</td>
                      <td>تصميم مواقع</td>
                      <td>
                        <div>
                          <p>10:00</p>
                          <p>11:00</p>
                        </div>
    
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr className=' text-xs md:text-sm'>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                      <td>
                        <div>
                          <p>11:00</p>
                          <p>12:00</p>
                        </div>
    
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr className=' text-xs md:text-sm'>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                      <td>
                        <div>
                          <p>12:00</p>
                          <p>1:00</p>
                        </div>
    
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
    
    </>
  )
}
