import React from 'react'

function TypeSugar() {
  return (
    <div className='py-4'>
        <ul className="items-center w-full font-medium flex">
            <li className="w-full">
                <div className="flex items-center ps-3">
                    <input id="horizontal-list-radio-sugar" type="radio" value="" name="list-radio" className="w-[80px] h-[80px]"/>
                    <label htmlFor="horizontal-list-radio-sugar" className="w-full py-3 ms-2 text-3xl font-medium">Sugar</label>
                </div>
            </li>
            <li className="w-full">
                <div className="flex items-center ps-3">
                    <input id="horizontal-list-radio-honey" type="radio" value="" name="list-radio" className="w-[80px] h-[80px]"/>
                    <label htmlFor="horizontal-list-radio-honey" className="w-full py-3 ms-2 text-3xl font-medium">Honey</label>
                </div>
            </li>
            <li className="w-full">
                <div className="flex items-center ps-3">
                    <input id="horizontal-list-radio-zero" type="radio" value="" name="list-radio" className="w-[80px] h-[80px]"/>
                    <label htmlFor="horizontal-list-radio-zero" className="w-full py-3 ms-2 text-3xl font-medium">Sugar 0 Cal</label>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default TypeSugar
