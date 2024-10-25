import React from 'react'
import CategoryBTN from './CategoryBTN'
import Link from 'next/link'

function NavbarCategory() {
  return (
    <div className='w-full h-[90px] flex justify-center gap-16 border-b-4 border-b-[#FFF2D7]'>
      <Link href={"/"} className='w-[70px] absolute left-10'>
        <button className='rounded-t-xl text-7xl'>&#10094;</button>
      </Link>
      <CategoryBTN title='Smoothie' id={"Smoothie"}/>
      <CategoryBTN title='Coffee' id={"Coffee"}/>
      <CategoryBTN title='Tea' id={"Tea"}/>
      <CategoryBTN title='Milk' id={"Milk"}/>
      <CategoryBTN title='Soda' id={"Soda"}/>
    </div>
  )
}

export default NavbarCategory
