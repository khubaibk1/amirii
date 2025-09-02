import React from 'react'
import Image from 'next/image'
import burger from '../../public/images/burgerbtn.png'
import talon from "../../public/images/talon-1.png"
import  bell from "../../public/images/bell.png"
import bg from "../../public/images/homebg.png"

const Header = () => {
  return (
    <div >
      <div className='flex flex-row justify-between  min-h-[100px] bg-blue-500 px-10 items-center'>
        <div>
          <Image src={burger} className='w-[20px] h-[40px]'/>
        </div>
        <div>
          <Image src={talon} className='w-[80px]'/>
        </div>
        <div>
          <Image src={bell} className='w-[20px]'/>
        </div>
      </div>
    </div>
  )
}

export default Header
