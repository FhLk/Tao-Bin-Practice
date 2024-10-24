import React from 'react'

function TitlePayment() {
  return (
    <div className=''>
        <button className='w-[100px] text-7xl font-semibold absolute left-5'>&#10094;</button>
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
