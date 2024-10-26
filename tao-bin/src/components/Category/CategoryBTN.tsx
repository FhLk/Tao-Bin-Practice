"use client"
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface Title {
    title : string
    id : string
}

const CategoryBTN : FC<Title> = ({title, id}) =>{

  const router = useRouter();

  const goToMenu = (category : string) =>{
        router.push(`/menu/${category}`)  
  }
  return (
    <button className='w-[200px] h-[200px] flex justify-center items-center rounded-full bg-[#FFF2D7] hover:bg-white text-3xl'
      onClick={()=> goToMenu(id.toLocaleLowerCase())}>
          <p>{title}</p>
    </button>
  )
}

export default CategoryBTN
