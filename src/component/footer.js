import React from 'react'
import Image from 'next/image'
import homebtn from '../../public/images/homebtn.png'
import startbtn from "../../public/images/startbtn.png"
import profilebtn from "../../public/images/profilebtn.png"
import settingbtn from "../../public/images/settingbtn.png"

const Footer = () => {
  return (
    <div>
      <div className='w-full min-h-[80px] flex flex-row  justify-evenly bg-blue-900 py-2  text-gray-500 '>
  <button className='flex flex-col  text-center '>
    <Image className='w-[50px]' src={homebtn}/>
    <p>Home</p>
  </button>

  <button className='flex flex-col  text-center '>
    <Image className='w-[50px]' src={startbtn}/>
    <p>Start</p>
  </button>

  <button className='flex flex-col  text-center '>
    <Image className='w-[50px]' src={profilebtn}/>
    <p>Profile</p>
  </button>

  <button className='flex flex-col  text-center '>
    <Image className='w-[50px]' src={settingbtn}/>
    <p>Setting</p>
  </button>
</div>
    </div>
  )
}

export default Footer
