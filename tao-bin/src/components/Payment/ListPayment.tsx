import React from 'react'

function ListPayment() {
  return (
    <div className='grid grid-cols-3 gap-5 my-5'>
        <button className='bg-white h-[200px] w-[200px] rounded-2xl flex flex-col items-center justify-center hover:bg-[#FFE0B5]'>
            <img src='./cash.svg' height={100} width={100}/>
            <p className='font-semibold text-4xl'>Cash</p>
        </button>
        <button className='bg-white h-[200px] w-[200px] rounded-2xl flex flex-col items-center justify-center hover:bg-[#FFE0B5]'>
            <img src='./promtpay.svg' height={100} width={100}/>
            <p className='font-semibold text-4xl'>Prompt Pay </p>
        </button>
        <button className='bg-white h-[200px] w-[200px] rounded-2xl flex flex-col items-center justify-center hover:bg-[#FFE0B5]'>
            <img src='./credit.svg' height={100} width={100}/>
            <p className='font-semibold text-4xl'>Credit</p>
        </button>
        <div className='col-span-3 flex w-full gap-5 justify-center'>
            <button className='bg-white h-[200px] w-[200px] rounded-2xl flex flex-col items-center justify-center hover:bg-[#FFE0B5]'>
                <img src='./coupon.svg' height={100} width={100}/>
                <p className='font-semibold text-4xl'>Coupon</p>
            </button>
            <button className='bg-white h-[200px] w-[200px] rounded-2xl flex flex-col items-center justify-center hover:bg-[#FFE0B5]'>
                <img src='./gift.svg' height={100} width={100}/>
                <p className='font-semibold text-4xl'>Promotion</p>
            </button>
        </div>
    </div>
  )
}

export default ListPayment
