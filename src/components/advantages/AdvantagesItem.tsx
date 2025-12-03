import React from 'react'
import type { advantageItemType } from '../types/Types'

const AdvantagesItem = ({item}:{item:advantageItemType}) => {
  return (  
        <div className="w-[230px] bg-[#1B263B] rounded-[25px] mb-[10px] py-[28px] pl-[15px] text-white text-center" >           
            <h3 className="font-anek font-semibold text-2xl mt-[12px]">{item.title}</h3>
            <h3 className="font-anek font-semibold text-2xl mt-[12px]">{item.subTitle}</h3>
            <p className='font-anek font-normal text-[16px] mt-[12px]'>{item.discription}</p>
        </div>
      
   
  )
}

export default AdvantagesItem
