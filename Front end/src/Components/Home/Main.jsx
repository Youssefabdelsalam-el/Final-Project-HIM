import React from 'react'
import Specializations from './Specializations'
import Summary from './Summary'

export default function Main() {
  return (
    <main className='flex flex-col lg:flex-row gap-10 py-10 px-5 md:px-10 xl:px-20 2xl:px-30'>
        <Specializations/>
        <Summary/>

    </main>
  )
}
