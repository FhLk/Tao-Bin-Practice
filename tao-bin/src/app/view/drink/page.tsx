import TypeDrink from '@/app/components/Drink/TypeDrink'
import TitleDrink from '@/app/components/Drink/TitleDrink'
import React from 'react'
import SugarLevel from '@/app/components/Drink/SugarLevel'

function DrinkPage() {
  return (
    <div className='flex flex-col items-center'>
        <TitleDrink/>
        <TypeDrink/>
        <SugarLevel/>
    </div>
  )
}

export default DrinkPage
