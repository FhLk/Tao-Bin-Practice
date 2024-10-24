"use client"
import React, { FC } from 'react'
import CategoryBTN from './CategoryBTN'

const Category : FC = () => {
  return (
    <div className='grid grid-cols-2 w-full text-xl font-semibold py-5'>
      <div className='flex flex-col items-end pr-20 space-y-10'>
        <CategoryBTN title='Recommend Menu' id={1}/>
        <CategoryBTN title='Coffee' id={2}/>
      </div>
      <div className='flex flex-col items-start pl-20 gap-10'>
        <CategoryBTN title='Tea' id={3}/>
        <CategoryBTN title='Milk' id={4}/>
      </div>
      <div className='col-span-2 flex justify-center pt-10'>
        <CategoryBTN title='Soda and Other' id={5}/>
      </div>
  </div>
  )
}

export default Category
