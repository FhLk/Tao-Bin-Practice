import React, { FC, useState } from 'react'

interface TypeDrinkData {
  onType : (price : number,type : string) => void
}

const TypeDrink : FC<TypeDrinkData> = ({ onType }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);
    switch (option) {
      case 1:
        onType(0,"hot")
        break;
      case 2:
        onType(5,"cold")
        break;
      case 3:
        onType(10,"spin")
        break;
      default:
        onType(0,"hot")
        break;
    }
  };
  
  return (
    <div className='w-full my-5'>
        <div className='rounded-xl bg-white h-[180px] px-10 py-5'>
            <p className='font-semibold text-4xl'>Type Drink</p>
            <div className='flex justify-between h-[100px] items-center my-3'>
                <img src='./glass-2.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl'/>
                <div className='bg-[#D8AE7E] w-1/2 grid grid-cols-3 gap-0 justify-items-center rounded-full h-[60px] border-4 border-[#F8C794] font-medium text-3xl'>
                  <button onClick={() => handleOptionSelect(1)} className={selectedOption === 1 ? "type-drink-btn-left-selected":"type-drink-btn-left"}>Hot</button>
                  <button onClick={() => handleOptionSelect(2)} className={selectedOption === 2 ? "type-drink-btn-middle-selected":"type-drink-btn-middle"}>Cold(+5฿)</button>
                  <button onClick={() => handleOptionSelect(3)} className={selectedOption === 3 ? "type-drink-btn-right-selected":"type-drink-btn-right"}>Spin(+10฿)</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TypeDrink
