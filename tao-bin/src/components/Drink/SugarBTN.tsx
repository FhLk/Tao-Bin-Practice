import React, { FC, useState } from 'react'

interface LevelSugarData {
  onLevel : (level : number) => void
}

const SugarBTN : FC<LevelSugarData> = ({ onLevel }) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);
    onLevel(option)
  };
  return (
    <div className='w-full flex gap-5 h-[60px] font-medium text-3xl '>
        <button onClick={() => handleOptionSelect(1)} className={selectedOption === 1 ? "sugar-btn-selected":"sugar-btn"}>No Sugar</button>
        <button onClick={() => handleOptionSelect(2)} className={selectedOption === 2 ? "sugar-btn-selected":"sugar-btn"}>Low Sugar</button>
        <button onClick={() => handleOptionSelect(3)} className={selectedOption === 3 ? "sugar-btn-selected":"sugar-btn"}>Normal Sugar</button>
        <button onClick={() => handleOptionSelect(4)} className={selectedOption === 4 ? "sugar-btn-selected":"sugar-btn"}>High Sugar</button>
        <button onClick={() => handleOptionSelect(5)} className={selectedOption === 5 ? "sugar-btn-selected":"sugar-btn"}>Extream Sugar</button>
    </div>
  )
}

export default SugarBTN
