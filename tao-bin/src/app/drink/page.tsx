"use client"
import MixerDrink from '@/components/Drink/MixerDrink'
import StrawLib from '@/components/Drink/StrawLib'
import SugarLevel from '@/components/Drink/SugarLevel'
import TitleDrink from '@/components/Drink/TitleDrink'
import TypeDrink from '@/components/Drink/TypeDrink'
import React, { useEffect, useState } from 'react'
import { useData } from '../DataContext'
import Link from 'next/link'

function DrinkPage() {
  const { data } = useData();
  const [ priceTypeDrink , setPriceTypeDrink ] = useState<number>(0)
  const [ priceSugarLevel , setPriceSugarlevel] = useState<number>(0)
  const [ priceTopping , setPriceTopping] = useState<number>(0)

  const [totalNewPrice , setTotalNewPrice] = useState<number>(0)
  const setNewDrink = (price : number,type:string) =>{
    setTotalNewPrice(0)
    console.log("Drink Type : " + type);
    console.log("Drink Price : "+ price);
    setPriceTypeDrink(price)
  }

  const setNewSugar = (type : string,level : number, price : number) =>{
    setTotalNewPrice(0)
    console.log("Sugar Type : " + type);
    console.log("Sugar Level : " + level);
    console.log("Sugar Price : " + price);
    setPriceSugarlevel(price)
  }

  const setNewTopping = (isAdd : boolean,price : number) =>{
    setTotalNewPrice(0)
    console.log("Is Topping : " + isAdd);
    setPriceTopping(price)
  }

  const setStraw = (isGetStraw : boolean) =>{
    console.log("Is Get Straw : " + isGetStraw);
  }

  const setLid = (isGetLid : boolean) =>{
    console.log("Is Get Lid : " + isGetLid);
  }

  useEffect(()=>{
    setTotalNewPrice(priceTypeDrink + priceSugarLevel + priceTopping)
  },[priceTypeDrink,priceSugarLevel,priceTopping])

  return (
    <div className='flex flex-col items-center py-3'>
        <TitleDrink name={data.name} img={data.img} category={data.category} />
        <TypeDrink onType={setNewDrink}/>
        <SugarLevel onLevel={setNewSugar}/>
        <MixerDrink onAdd={setNewTopping}/>
        <StrawLib onGetStraw={setStraw} onGetLid={setLid}/>
        <div className='w-full flex justify-between'>
          <Link href={`/menu/${data.category}`} className='manange-btn bg-gray-300 hover:bg-red-400 '>
            Cancel
          </Link>
          <Link href={`/payment`} className='manange-btn gap-4 bg-[#FFE0B5] hover:bg-[#FFF2D7]'>
              Buy | ${data.price + totalNewPrice} 
          </Link>
        </div>
    </div>
  )
}

export default DrinkPage
