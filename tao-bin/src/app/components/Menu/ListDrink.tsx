import React from 'react'
import Drink from './Drink'

function ListDrink() {
  return (
    <div className='grid grid-cols-4 gap-y-5 justify-items-center'>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
      <Drink name='Next.js' price={40} img='./glass.svg' categoty='Typescript and Javascript'/>
    </div>
  )
}

export default ListDrink
