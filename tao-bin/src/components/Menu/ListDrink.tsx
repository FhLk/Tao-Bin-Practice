"use client"
import React, { FC, useEffect, useState } from 'react'
import Drink from './Drink'

interface DrinkData {
  name : string
  price : number
  category : string
}

const ListDrink : FC<{id : string}>  = ({ id }) => {
  const [displayDrinks ,setDisplayDrinks] = useState<DrinkData[]>([])
  const [ drinks ] = useState<DrinkData[]>([
    { name: "Mango Yogurt Smoothie", price: 5.50, category: "Smoothie" },
    { name: "Strawberry Banana Smoothie", price: 5.00, category: "Smoothie" },
    { name: "Blueberry Blast Smoothie", price: 6.00, category: "Smoothie" },
    { name: "Mango Lime Refresher", price: 4.50, category: "Smoothie" },
    { name: "Dragon Fruit Delight", price: 6.50, category: "Smoothie" },
    { name: "Green Apple Oasis", price: 4.00, category: "Smoothie" },
    { name: "Carrot Apple Energizer", price: 5.00, category: "Smoothie" },
    { name: "Beet It Smoothie", price: 5.50, category: "Smoothie" },
    { name: "Pineapple Ginger Zing", price: 4.50, category: "Smoothie" },
    { name: "Tomato Celery Tonic", price: 5.00, category: "Smoothie" },
    { name: "Banana Oat Milk Smoothie", price: 5.50,category: "Smoothie" },
    { name: "Chocolate Banana Dream", price: 6.00,category: "Smoothie" },
    { name: "Coffee Banana Boost", price: 6.50,category: "Smoothie" },
    { name: "Matcha Green Tea Smoothie", price: 6.00, category: "Smoothie" },
    { name: "Mango Coconut Bliss", price: 5.50, category: "Smoothie" },
    { name: "Pineapple Mango Tango", price: 5.00, category: "Smoothie" },
    { name: "Watermelon Wonder", price: 4.50, category: "Smoothie" },
    { name: "Cantaloupe Cooler", price: 5.00, category: "Smoothie" },
    { name: "Papaya Paradise", price: 4.50, category: "Smoothie" },
    { name: "Green Power Smoothie", price: 6.00, category: "Smoothie" },
    { name: "Earl Grey", price: 3.50, category: "Tea" },
    { name: "English Breakfast", price: 3.00, category: "Tea" },
    { name: "Green Tea", price: 2.50, category: "Tea" },
    { name: "Oolong Tea", price: 4.00, category: "Tea" },
    { name: "White Tea", price: 3.50, category: "Tea" },
    { name: "Chai Tea", price: 3.00, category: "Tea" },
    { name: "Matcha Latte", price: 4.50, category: "Tea" },
    { name: "Jasmine Pearl Tea", price: 3.50, category: "Tea" },
    { name: "Darjeeling Tea", price: 4.00, category: "Tea" },
    { name: "Pu-erh Tea", price: 5.00, category: "Tea" },
    { name: "Peppermint Tea", price: 2.50, category: "Herbal Tea" },
    { name: "Chamomile Tea", price: 2.00, category: "Herbal Tea" },
    { name: "Hibiscus Tea", price: 2.50, category: "Herbal Tea" },
    { name: "Rooibos Tea",price: 2.00,category: "Herbal Tea" },
    { name: "Lavender Tea",price: 3.00,category: "Herbal Tea" },
    { name: "Ginger Tea",price: 2.50,category: "Herbal Tea" },
    { name: "Lemon Verbena Tea",price: 3.00,category: "Herbal Tea" },
    { name: "Rosehip Tea",price: 2.50,category: "Herbal Tea" },
    { name: "Yerba Mate",price: 3.50,category: "Herbal Tea" },
    { name: "Holy Basil Tea",price: 3.00,category: "Herbal Tea" },
    { name: "Espresso", price: 2.50, category: "Coffee" },
    { name: "Americano", price: 3.00, category: "Coffee" },
    { name: "Latte", price: 4.00, category: "Coffee" },
    { name: "Cappuccino", price: 4.50, category: "Coffee" },
    { name: "Mocha", price: 5.00, category: "Coffee" },
    { name: "Caramel Macchiato", price: 5.50, category: "Coffee" },
    { name: "Flat White", price: 4.50, category: "Coffee" },
    { name: "Macchiato", price: 3.50, category: "Coffee" },
    { name: "Cortado", price: 3.00, category: "Coffee" },
    { name: "Vienna Coffee", price: 4.00, category: "Coffee" },
    { name: "Irish Coffee", price: 6.00, category: "Coffee" },
    { name: "Turkish Coffee", price: 3.50, category: "Coffee" },
    { name: "Affogato", price: 4.50, category: "Coffee" },
    { name: "Nitro Cold Brew", price: 4.00, category: "Coffee" },
    { name: "Espresso Con Panna", price: 3.50, category: "Coffee" },
    { name: "Long Black", price: 3.00, category: "Coffee" },
    { name: "Ristretto", price: 2.00, category: "Coffee" },
    { name: "Glace", price: 3.50, category: "Coffee" },
    { name: "Red Eye", price: 4.00, category: "Coffee" },
    { name: "Breve", price: 4.50, category: "Coffee" },
    { name: "Classic Milk Shake", price: 4.50, category: "Milk" },
    { name: "Chocolate Milk", price: 3.00, category: "Milk" },
    { name: "Strawberry Milk", price: 3.50, category: "Milk" },
    { name: "Banana Milk", price: 3.50, category: "Milk" },
    { name: "Matcha Latte", price: 4.50, category: "Milk" },
    { name: "Caramel Macchiato", price: 5.00, category: "Milk" },
    { name: "Mocha", price: 4.00, category: "Milk" },
    { name: "Horchata", price: 4.50, category: "Milk" },
    { name: "Chai Latte", price: 4.00, category: "Milk" },
    { name: "Oatmeal Milk", price: 3.50, category: "Milk" },
    { name: "Almond Milk Latte", price: 4.00, category: "Milk" },
    { name: "Soy Milk Cappuccino", price: 4.50, category: "Milk" },
    { name: "Coconut Milk Smoothie", price: 5.00, category: "Milk" },
    { name: "Rose Milk", price: 3.50, category: "Milk" },
    { name: "Turmeric Latte", price: 4.50, category: "Milk" },
    { name: "Lavender Latte", price: 4.50, category: "Milk" },
    { name: "Ginger Milk", price: 3.50, category: "Milk" },
    { name: "Honey Milk", price: 3.00, category: "Milk" },
    { name: "Earl Grey Milk Tea", price: 4.00, category: "Milk" },
    { name: "Matcha Milk Tea", price: 4.50, category: "Milk" },
    { name: "Classic Cola", price: 1.50, category: "Soda" },
    { name: "Lemon-Lime Soda", price: 1.25, category: "Soda" },
    { name: "Orange Soda", price: 1.50, category: "Soda" },
    { name: "Root Beer", price: 1.75, category: "Soda" },
    { name: "Ginger Ale", price: 1.50, category: "Soda" },
    { name: "Cream Soda", price: 1.75, category: "Soda" },
    { name: "Cherry Cola", price: 1.60, category: "Soda" },
    { name: "Grape Soda", price: 1.50, category: "Soda" },
    { name: "Raspberry Soda", price: 1.75, category: "Soda" },
    { name: "Blueberry Soda", price: 1.60, category: "Soda" },
    { name: "Pomegranate Soda", price: 1.80, category: "Soda" },
    { name: "Sparkling Water", price: 1.20, category: "Soda" },
    { name: "Tonic Water", price: 1.50, category: "Soda" },
    { name: "Club Soda", price: 1.25, category: "Soda" },
    { name: "Ginger Beer", price: 1.75, category: "Soda" },
    { name: "Sarsaparilla", price: 1.60, category: "Soda" },
    { name: "Birch Beer", price: 1.75, category: "Soda" },
    { name: "Lemon-Lime and Grapefruit", price: 1.80, category: "Soda" },
    { name: "Orange Cream Soda", price: 1.75, category: "Soda" },
    { name: "Cherry Vanilla Soda", price: 1.80, category: "Soda" },
  ])
  useEffect(()=>{
    setDisplayDrinks(drinks.filter((drink) => drink.category.toLocaleLowerCase() === id.toLocaleLowerCase() ))
  },[ id ])
  return (
    <div className='grid grid-cols-4 gap-5 py-5 justify-items-center'>
      {displayDrinks.map((drink, i) => (
        <Drink name={drink.name} price={drink.price} img='/glass.svg' category={drink.category} key={i}/>
      ))}
    </div>
  )
}

export default ListDrink
