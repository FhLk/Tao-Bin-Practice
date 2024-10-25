import React from 'react'

function MixerDrink() {
    return (
        <div className='w-full my-5'>
            <div className='rounded-xl bg-white h-[300px] px-10 py-5'>
                <p className='font-semibold text-4xl'>Add Extra</p>
                <div className='h-[100px] items-center my-3'>
                    <ul className='space-y-7'>
                        <li className='flex items-center justify-between'>
                            <img src='./coffee.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl' />
                            <label htmlFor="horizontal-list-checkbox-espresso" className="text-5xl font-medium w-10/12">Espresso 1 shot</label>
                            <input id="horizontal-list-checkbox-espresso" type="checkbox" value="" name="list-checkbox" className="w-[90px] h-[90px] rounded-xl"/>
                        </li>
                        <li className='flex items-center justify-between'>
                            <img src='./oreo.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl' />
                            <label htmlFor="horizontal-list-checkbox-oreo" className="text-5xl font-medium w-10/12">Topping Oreo</label>
                            <input id="horizontal-list-checkbox-oreo" type="checkbox" value="" name="list-checkbox" className="w-[90px] h-[90px] rounded-xl"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MixerDrink
