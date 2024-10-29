import React, { FC, useState } from 'react'

interface GetStrawAndLid{
    onGetStraw : (isGetStraw : boolean) => void
    onGetLid : (isGetLid : boolean) => void
}


const StrawLib : FC<GetStrawAndLid> = ({ onGetStraw , onGetLid }) => {
    const [isGetStraw, setIsGetStraw] = useState<boolean>(false)
    const [isGetLid, setIsGetLid] = useState<boolean>(false)

    const handleGetStraw = (isAdd : boolean) => {
        onGetStraw(isAdd)
        setIsGetStraw(isAdd)
    };

    const handleGetLid = (isAdd : boolean) =>{
        onGetLid(isAdd)
        setIsGetLid(isAdd)
    }
  return (
    <div className='w-full my-5'>
        <div className='rounded-xl bg-white h-[300px] px-10 py-5'>
            <p className='font-semibold text-4xl'>Straw and Lid</p>
            <div className='h-[100px] items-center my-3'>
                <ul className='space-y-7'>
                    <li className='flex items-center justify-between'>
                        <img src='/straw.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl' />
                        <label htmlFor="horizontal-list-checkbox-straw" className="text-5xl font-medium w-10/12">Get Straw</label>
                        <input id="horizontal-list-checkbox-straw" type="checkbox" value="" name="list-checkbox" className="w-[90px] h-[90px] rounded-xl" onChange={()=>handleGetStraw(!isGetStraw)}/>
                    </li>
                    <li className='flex items-center justify-between'>
                        <img src='/lid.svg' height={90} width={90} className='bg-[#FFF2D7] rounded-xl' />
                        <label htmlFor="horizontal-list-checkbox-lid" className="text-5xl font-medium w-10/12">Get Lid</label>
                        <input id="horizontal-list-checkbox-lid" type="checkbox" value="" name="list-checkbox" className="w-[90px] h-[90px] rounded-xl" onChange={()=> handleGetLid(!isGetLid)}/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default StrawLib
