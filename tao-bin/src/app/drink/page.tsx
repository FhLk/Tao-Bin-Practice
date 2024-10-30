"use client"
import MixerDrink from '@/components/Drink/MixerDrink'
import StrawLib from '@/components/Drink/StrawLib'
import SugarLevel from '@/components/Drink/SugarLevel'
import TitleDrink from '@/components/Drink/TitleDrink'
import TypeDrink from '@/components/Drink/TypeDrink'
import React, { useEffect, useState } from 'react'
import { useData } from '../DataContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function DrinkPage() {
  const { data ,setData } = useData();
  const route = useRouter();
  const [ priceTypeDrink , setPriceTypeDrink ] = useState<number>(0)
  const [ priceSugarLevel , setPriceSugarlevel] = useState<number>(0)
  const [ priceTopping , setPriceTopping] = useState<number>(0)

  const [totalNewPrice , setTotalNewPrice] = useState<number>(0)

  const [typeDrink , setTypeDrink] = useState<string>("")

  const [typeSugar , setTypeSugar] = useState<string>("")
  const [levelSugar , setLevelSugar] = useState<number>(0)

  const [ isTopping , setIsTopping ] = useState<boolean>(false)
  const [ isStraw , setIsStraw ] = useState<boolean>(false)
  const [ isLid , setIsLid ] = useState<boolean>(false)


  const setNewDrink = (price : number,type:string) =>{
    setTotalNewPrice(0)
    setTypeDrink(type)
    setPriceTypeDrink(price)
  }

  const setNewSugar = (type : string,level : number, price : number) =>{
    setTotalNewPrice(0)
    setTypeSugar(type)
    setLevelSugar(level)
    setPriceSugarlevel(price)
  }

  const setNewTopping = (isAdd : boolean,price : number) =>{
    setTotalNewPrice(0)
    setIsTopping(isAdd);
    setPriceTopping(price)
  }

  const setStraw = (isGetStraw : boolean) =>{
    setIsStraw(isGetStraw);
  }

  const setLid = (isGetLid : boolean) =>{
    setIsLid(isGetLid);
  }

  useEffect(()=>{
    setTotalNewPrice(priceTypeDrink + priceSugarLevel + priceTopping)
  },[priceTypeDrink,priceSugarLevel,priceTopping])

  const confirmBuyDrink = (totalPrice : number) =>{
    setData({
      name : data.name,
      category : data.category, 
      img: data.img,
      price : totalPrice,
      typeDrink : typeDrink,
      sugar : { type : typeSugar, level : levelSugar},
      isTopping : isTopping,
      isStraw : isStraw,
      isLid : isLid
    })
    route.push("/payment")
  }

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
          <button onClick={()=>confirmBuyDrink(data.price + totalNewPrice)} className='manange-btn gap-4 bg-[#FFE0B5] hover:bg-[#FFF2D7]'>
              Buy | ${data.price + totalNewPrice} 
          </button>
        </div>
    </div>
  )
}

export default DrinkPage
