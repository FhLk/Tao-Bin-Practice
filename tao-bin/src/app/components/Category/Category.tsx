"use client"
import React, { FC } from 'react'
import CategoryBTN from './CategoryBTN'

const Category : FC = () => {
  return (
    <div className='grid grid-cols-2 gap-4 text-xl justify-items-center w-full font-semibold'>
      <CategoryBTN title='Recommend Menu' id={1}/>
      <CategoryBTN title='Coffee' id={2}/>
      <CategoryBTN title='Tea' id={3}/>
      <CategoryBTN title='Milk' id={4}/>
      <CategoryBTN title='Soda and Other' id={5}/>
  </div>
  )
}

export default Category
