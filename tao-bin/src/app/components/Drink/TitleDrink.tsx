import React from 'react'

function TitleMenu() {
    return (
        <div>
            <div className='bg-white w-[200px] rounded-full '>
                <img src='./glass.svg' height={200} width={200} />
            </div>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold py-3'>Next.js</h1>
                <h3 className='text-xl py-3'>Typescript and Javascript</h3>
            </div>
        </div>
    )
}

export default TitleMenu
