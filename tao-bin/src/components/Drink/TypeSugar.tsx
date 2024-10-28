import React, { FC } from 'react'

interface TypeSugarData{
    onType : (price : number, type : string) => void
}

const TypeSugar : FC<TypeSugarData> = ({ onType }) => {
    const handleOptionSelect = (option: number) => {
        switch (option) {
            case 1:
                onType(0,"sugar")
                break;
            case 2:
                onType(5,"honey")
                break;
            case 3:
                onType(10,"zero")
                break;
            default:
                onType(0,"sugar")
                break;
        }
      };
  return (
    <div className='py-4'>
        <ul className="items-center w-full font-medium flex">
            <li className="w-full" onClick={() => handleOptionSelect(1)}>
                <div className="flex items-center ps-3" >
                    <input id="horizontal-list-radio-sugar" type="radio" value="" name="list-radio" className="w-[80px] h-[80px]"/>
                    <label htmlFor="horizontal-list-radio-sugar" className="w-full py-3 ms-2 text-3xl font-medium">Sugar (0฿)</label>
                </div>
            </li>
            <li className="w-full" onClick={() => handleOptionSelect(2)}>
                <div className="flex items-center ps-3">
                    <input id="horizontal-list-radio-honey" type="radio" value="" name="list-radio" className="w-[80px] h-[80px]"/>
                    <label htmlFor="horizontal-list-radio-honey" className="w-full py-3 ms-2 text-3xl font-medium">Honey (+5฿)</label>
                </div>
            </li>
            <li className="w-full" onClick={() => handleOptionSelect(3)}>
                <div className="flex items-center ps-3">
                    <input id="horizontal-list-radio-zero" type="radio" value="" name="list-radio" className="w-[80px] h-[80px]"/>
                    <label htmlFor="horizontal-list-radio-zero" className="w-full py-3 ms-2 text-3xl font-medium" >Sugar 0 Cal (+10฿)</label>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default TypeSugar
