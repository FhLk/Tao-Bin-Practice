"use client"
import MixerDrink from '@/components/Drink/MixerDrink'
import StrawLib from '@/components/Drink/StrawLib'
import SugarLevel from '@/components/Drink/SugarLevel'
import TitleDrink from '@/components/Drink/TitleDrink'
import TypeDrink from '@/components/Drink/TypeDrink'
import React from 'react'

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
