"use client"
import MixerDrink from '@/components/Drink/MixerDrink'
import StrawLib from '@/components/Drink/StrawLib'
import SugarLevel from '@/components/Drink/SugarLevel'
import TitleDrink from '@/components/Drink/TitleDrink'
import TypeDrink from '@/components/Drink/TypeDrink'
import React from 'react'
import { useData } from '../DataContext'
import Link from 'next/link'

function DrinkPage() {
  const { data, setData } = useData();
  const setNewDrink = ( newDrink : {type : string, price : number}) =>{
    console.log(newDrink);
  }
  return (
    <div className='flex flex-col items-center py-3'>
        <TitleDrink name={data?.name} img={data?.img} category={data?.category} />
        <TypeDrink/>
        <SugarLevel/>
        <MixerDrink/>
        <StrawLib/>
        <div className='w-full flex justify-between'>
          <Link href={`/menu/${data?.category}`} className='manange-btn bg-gray-300 hover:bg-red-400 '>
            Cancel
          </Link>
          <Link href={`/payment`} className='manange-btn gap-4 bg-[#FFE0B5] hover:bg-[#FFF2D7]'>
              Buy | ${data?.price} 
          </Link>
        </div>
    </div>
  )
}

export default DrinkPage
