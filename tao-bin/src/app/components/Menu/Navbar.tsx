import React from 'react'
import CategoryBTN from './CategoryBTN'

function NavbarCategory() {
  return (
    <div className='w-full h-[90px] flex justify-evenly border-b-4 border-b-[#FFF2D7]'>
      <button className='rounded-t-xl text-7xl'> &#10094; </button>
      <CategoryBTN title='Recommend Menu' id={1}/>
      <CategoryBTN title='Coffee' id={2}/>
      <CategoryBTN title='Tea' id={3}/>
      <CategoryBTN title='Milk' id={4}/>
      <CategoryBTN title='Soda and Other' id={5}/>
    </div>
  )
}

export default NavbarCategory
