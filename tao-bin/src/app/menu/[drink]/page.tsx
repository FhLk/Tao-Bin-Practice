"use client"
import { DataProvider } from '@/app/DataContext'
import ListDrink from '@/components/Menu/ListDrink'
import NavbarCategory from '@/components/Menu/Navbar'
import { useParams } from 'next/navigation'
import React from 'react'

function MenuPage() {
  const params = useParams<{ drink : string }>();  
  return (
    <div className='py-3'>
      <NavbarCategory/>
      <ListDrink id={params.drink} />
    </div>
  )
}

export default MenuPage
