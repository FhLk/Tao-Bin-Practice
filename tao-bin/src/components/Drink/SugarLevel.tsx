import React from 'react'
import TypeSugar from './TypeSugar'
import SugarBTN from './SugarBTN'

function SugarLevel() {
  return (
    <div className='w-full my-5'>
        <div className='rounded-xl bg-white h-[300px] px-10 py-5'>
            <h1 className='font-semibold text-4xl'>Sugar Level</h1>
            <TypeSugar/>
            <div className='flex justify-between h-[100px] items-center my-3'>
                <img src='./sugar.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl mr-5'/>
                <SugarBTN/>
            </div>
        </div>
    </div>
  )
}

export default SugarLevel
