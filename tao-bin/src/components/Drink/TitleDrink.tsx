import Link from 'next/link'
import React, { FC } from 'react'

interface DataTitle {
    name : string
    img : string
    category : string
}

const TitleDrink : FC<DataTitle> = ({name,img, category})=> {
    return (
        <div className='flex flex-col items-center'>
            <Link href={`/menu/${category}`} className='back-btn'>&#10094;</Link>
            <div className='bg-white w-[200px] rounded-full'>
                <img src={img} height={200} width={200} />
            </div>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold py-3'>{name}</h1>
                <h3 className='text-3xl py-3 font-semibold'>{category}</h3>
            </div>
        </div>
    )
}

export default TitleDrink
