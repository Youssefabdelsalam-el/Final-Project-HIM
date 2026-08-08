import React from 'react'
import Select from '../Select'
import Search from '../Search'
import TitelPage from '../TitelPage'
import { FaTasks } from 'react-icons/fa'
import Table from './Table'

export default function Assignment() {
  return (
     <div className='w-full flex flex-col gap-5 px-2 sm:px-4 md:px-6'>
        <TitelPage titel="الواجبات" description="عرض الواجبات ودرجات ورفع الواجب ومتابعه الدرجات" Icon={FaTasks} />
        <div className='w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4'>
            <Search placeholder="البحث عن الواجب"/>
            <Select/>
        </div>
        <Table/>
    </div>
  )
}
