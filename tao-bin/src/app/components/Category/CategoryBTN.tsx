"use client"
import React, { FC } from 'react'

interface Title {
    title : string
    id : number
}

const CategoryBTN : FC<Title> = ({title, id}) =>{
    const goToMenu = (categoryID : number) =>{
        console.log(categoryID);   
    }
  return (
    <button className='w-[200px] h-[200px] flex justify-center items-center rounded-full bg-[#FFF2D7] hover:bg-white'
    onClick={()=> goToMenu(id)}>
        <p>{title}</p>
    </button>
  )
}

export default CategoryBTN
