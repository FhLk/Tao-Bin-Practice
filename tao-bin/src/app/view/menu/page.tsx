import ListDrink from '@/app/components/Menu/ListDrink'
import NavbarCategory from '@/app/components/Menu/Navbar'
import React from 'react'

function MenuPage() {
  return (
    <div className='space-y-7'>
        <NavbarCategory/>
        <ListDrink/>
    </div>
  )
}

export default MenuPage
