"use client"
import MixerDrink from '@/components/Drink/MixerDrink'
import StrawLib from '@/components/Drink/StrawLib'
import SugarLevel from '@/components/Drink/SugarLevel'
import TitleDrink from '@/components/Drink/TitleDrink'
import TypeDrink from '@/components/Drink/TypeDrink'
import React from 'react'
import { useData } from '../DataContext'
import Link from 'next/link'

interface NewDrinkData {
  type : string
  price : number
}

function DrinkPage() {
  const { data, setData } = useData();
  const setNewDrink = (price : number,type:string) =>{
    console.log("Drink Type : " + type);
    console.log("Drink Price : "+ price);
  }

  const setNewSugar = (type : string,level : number, price : number) =>{
    console.log("Sugar Type : " + type);
    console.log("Sugar Level : " + level);
    console.log("Sugar Price : " + price);
  }

  const setNewTopping = (isAdd : Boolean) =>{
    console.log("Is Topping : " + isAdd);
  }

  const setStraw = (isGetStraw : Boolean) =>{
    console.log("Is Get Straw : " + isGetStraw);
  }

  const setLid = (isGetLid : Boolean) =>{
    console.log("Is Get Lid : " + isGetLid);
  }
  return (
    <div className='flex flex-col items-center py-3'>
        <TitleDrink name={data?.name} img={data?.img} category={data?.category} />
        <TypeDrink onType={setNewDrink}/>
        <SugarLevel onLevel={setNewSugar}/>
        <MixerDrink onAdd={setNewTopping}/>
        <StrawLib onGetStraw={setStraw} onGetLid={setLid}/>
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
