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
    <button className='bg-[#FFF2D7] w-[200px] h-[90px] text-3xl rounded-t-xl font-semibold hover:bg-white'
    onClick={()=> goToMenu(id)}>
        <p>{title}</p>
    </button>
  )
}

export default CategoryBTN