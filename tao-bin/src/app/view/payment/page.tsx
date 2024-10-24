"use client"
import ListPayment from '@/app/components/Payment/ListPayment'
import TitlePayment from '@/app/components/Payment/TitlePayment'
import React from 'react'

function PaymentPage() {
  return (
    <div className='flex flex-col items-center'>
      <TitlePayment/>
      <ListPayment/>
        <button className='h-[80px] w-[230px] bg-white rounded-full text-3xl font-semibold mb-5 hover:bg-red-400'>Cancel</button>
    </div>
  )
}

export default PaymentPage
