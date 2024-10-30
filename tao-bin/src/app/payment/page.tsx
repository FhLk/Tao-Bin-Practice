"use client"
import ListPayment from '@/components/Payment/ListPayment'
import TitlePayment from '@/components/Payment/TitlePayment'
import React from 'react'
import { useData } from '../DataContext'
import Link from 'next/link'

function PaymentPage() {
  const { data } = useData();
  console.log(data);
  return (
    <div className='flex flex-col items-center py-3'>
      <TitlePayment name={data.name} img={data.img} price={data.price}/>
      <ListPayment/>
      <Link href={`/menu/${data.category}`} className='h-[80px] w-[230px] bg-white rounded-full flex justify-center items-center text-3xl font-semibold mb-5 hover:bg-red-400'>Cancel</Link>
    </div>
  )
}

export default PaymentPage
