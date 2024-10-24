"use client"
import React from 'react'
import TypeDrink from '@/app/components/Drink/TypeDrink'
import TitleDrink from '@/app/components/Drink/TitleDrink'
import SugarLevel from '@/app/components/Drink/SugarLevel'
import MixerDrink from '@/app/components/Drink/MixerDrink'
import StrawLib from '@/app/components/Drink/StrawLib'

function DrinkPage() {
  return (
    <div className='flex flex-col items-center'>
        <TitleDrink/>
        <TypeDrink/>
        <SugarLevel/>
        <MixerDrink/>
        <StrawLib/>
        <div className='w-full flex justify-between'>
          <button className='h-[100px] w-[250px] bg-gray-300 rounded-full text-5xl font-semibold hover:bg-red-400'>Cancel</button>
          <button className='h-[100px] w-[350px] bg-[#FFE0B5] rounded-full text-5xl font-semibold hover:bg-[#FFF2D7]'>Buy <span> | </span> 40฿ </button>
        </div>
    </div>
  )
}

export default DrinkPage
