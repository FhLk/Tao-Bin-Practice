import React, { FC, useEffect, useState } from 'react'

interface AddExtraData{
    onAdd : (isAdd : Boolean) => void
}

const MixerDrink : FC<AddExtraData> = ({ onAdd }) => {
    const [isAddExtra, setIsAddExtra] = useState<Boolean>(false)
    const handleAddExtra = (isAdd : Boolean) => {
        onAdd(isAdd)
        setIsAddExtra(isAdd)
    };
    return (
        <div className='w-full my-5'>
            <div className='rounded-xl bg-white h-fit px-10 py-5'>
                <p className='font-semibold text-4xl'>Add Extra</p>
                <div className='h-[100px] items-center my-3'>
                    <ul className='space-y-7'>
                        <li className='flex items-center justify-between' onClick={() => handleAddExtra(!isAddExtra)}>
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
