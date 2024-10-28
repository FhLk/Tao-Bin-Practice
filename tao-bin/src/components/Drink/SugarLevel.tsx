import React, { FC, useEffect, useState } from 'react'
import TypeSugar from './TypeSugar'
import SugarBTN from './SugarBTN'

interface SugarLevelData{
  onLevel : (type : string , level : number , price : number ) => void
}

interface SugarData{
  type : string 
  level : number
  price : number
}

const SugarLevel : FC<SugarLevelData> = ({ onLevel }) => {
  const [sugar , setSugar] = useState<SugarData>({type : "", level : 0, price : 0})
  const setSugarType = (price : number,type:string) =>{
    setSugar({type : type,level : sugar.level,price : price})
  }

  const setSugarLevel = (level : number) =>{
    setSugar({type : sugar.type,level : level,price : sugar.price})
  }

  useEffect(()=>{
    onLevel(sugar.type,sugar.level,sugar.price)
  },[sugar])
  return (
    <div className='w-full my-5'>
        <div className='rounded-xl bg-white h-[300px] px-10 py-5'>
            <h1 className='font-semibold text-4xl'>Sugar Level</h1>
            <TypeSugar onType={setSugarType}/>
            <div className='flex justify-between h-[100px] items-center my-3'>
                <img src='./sugar.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl mr-5'/>
                <SugarBTN onLevel={setSugarLevel}/>
            </div>
        </div>
    </div>
  )
}

export default SugarLevel
