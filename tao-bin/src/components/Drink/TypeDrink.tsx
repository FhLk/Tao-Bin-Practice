import React from 'react'

function CategoryMenu() {
  const selectedOption = () =>{
  }
  return (
    <div className='w-full my-5'>
        <div className='rounded-xl bg-white h-[180px] px-10 py-5'>
            <p className='font-semibold text-4xl'>Type Drink</p>
            <div className='flex justify-between h-[100px] items-center my-3'>
                <img src='./glass-2.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl'/>
                <div className='bg-[#D8AE7E] w-1/2 grid grid-cols-3 gap-0 justify-items-center rounded-full h-[60px] border-4 border-[#F8C794] font-medium text-3xl '>
                    <button onClick={()=> selectedOption()} className="type-drink-btn-left">Hot</button>
                    <button onClick={()=> selectedOption()} className='type-drink-btn-middle'>Cold(+5฿)</button>
                    <button onClick={()=> selectedOption()} className='type-drink-btn-right'>Spin(+10฿)</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryMenu
