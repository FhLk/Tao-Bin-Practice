import Link from 'next/link'
import React, { FC } from 'react'

interface TitleData {
  name : string
  img : string
  price : number
}

const TitlePayment : FC<TitleData> = ({name,img,price}) => {
  return (
    <div>
        <Link href={"/drink"} className='back-btn'>&#10094;</Link>
        <div className='grid grid-rows-2 items-center justify-items-center'>
          <div className='bg-white w-[200px] rounded-full'>
              <img src={img} height={200} width={200} />
          </div>
          <div className='text-center'>
              <h1 className='text-4xl font-semibold py-3'>{name}</h1>
              <h3 className='text-6xl py-2 font-semibold'>฿{price}</h3>
          </div>
        </div>
    </div>
  )
}

export default TitlePayment
