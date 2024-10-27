import Link from 'next/link'
import React from 'react'

function TitlePayment() {
  return (
    <div className=''>
        <Link href={"/drink"} className='back-btn'>&#10094;</Link>
        <div className='bg-white w-[200px] rounded-full '>
            <img src='./glass.svg' height={200} width={200} />
        </div>
        <div className='text-center'>
            <h1 className='text-4xl font-semibold py-3'>Next.js</h1>
            <h3 className='text-6xl py-2 font-semibold'>฿40</h3>
        </div>
    </div>
  )
}

export default TitlePayment
