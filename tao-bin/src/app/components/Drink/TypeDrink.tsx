import React from 'react'

function CategoryMenu() {
  return (
    <div className='w-full my-5'>
        <div className='rounded-xl bg-white h-[180px] px-10 py-5'>
            <p className='font-semibold text-4xl'>Category Drink</p>
            <div className='flex justify-between h-[100px] items-center my-3'>
                <img src='./glass-2.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl'/>
                <div className='bg-[#D8AE7E] w-1/2 grid grid-cols-3 justify-items-center rounded-full h-[60px] border-4 border-[#F8C794] font-medium text-3xl '>
                    <button className='w-full border-r-4 border-[#F8C794] hover:bg-[#C1C1C1] rounded-l-full'>Hot</button>
                    <button className='w-full border-x-4 border-[#F8C794] hover:bg-[#C1C1C1]'>Cold(+5฿)</button>
                    <button className='w-full border-l-4 border-[#F8C794] hover:bg-[#C1C1C1] rounded-r-full'>Spin(+10฿)</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryMenu
