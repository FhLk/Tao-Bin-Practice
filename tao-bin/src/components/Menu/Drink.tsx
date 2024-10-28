"use client"
import { useData } from '@/app/DataContext'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface DrinkDataProps {
  name : string
  price : number
  category : string
  img : string
}

const Drink : FC<DrinkDataProps> = ({name, price,category,img}) => {
  const router = useRouter()
  const { setData } = useData()

  const goToDrinkOption = () =>{
    setData({name: name,price : price, category: category, img: img})
    router.push("/drink")
  }
  return (
    <button onClick={goToDrinkOption} className='h-[400px] bg-[#FFF2D7] w-[300px] flex flex-col items-center justify-evenly rounded-2xl hover:bg-white'>
      <p className='text-end w-full px-5 py-3 text-4xl font-semibold'>{price}$</p>
      <img className='h-[200px] w-full' src={img}/>
      <p className='text-start w-full px-5 text-3xl font-medium min-h-20 flex items-center'>{name}</p>
      <p className='text-start w-full px-5 font-semibold'>{category}</p>
    </button>
  )
}

export default Drink
