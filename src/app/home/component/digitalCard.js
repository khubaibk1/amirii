import React from 'react'
import Image from 'next/image'
import LottieAnimation from '@/component/lottieAnimation'
import ExchangeAnimation from '@/component/IconAnimations/exchange'
import SafeAnimation from '@/component/IconAnimations/safe'
import WorldAnimation from '@/component/IconAnimations/world'
import BagesAnimation from '@/component/IconAnimations/bages'


const DigitalCard = ({img,heading,text}) => {
  return (
    <div>
         <div className=' w-[244px] smm:w-[80%] mx-auto  md:w-[244px] h-[310px] rounded-[20px] p-[15px] flex flex-col dark:bg-[#FFFFFF1A]  items-center gap-7 text-center shadow-2xl'>
                           
                            <div className='w-[80px]'>
                            {img=="1"?     <WorldAnimation/>:''}
                    {img=="2"?<LottieAnimation/>:''}
                    {img=="3"?  <SafeAnimation/>:''}
                    {img=="4"?   <ExchangeAnimation/>:''}
                    {img=="5"?       <BagesAnimation/>:''}
                    


          
       
                            </div>


                            <p  className='text-[24px] dark:text-white text-[#02043A] font-medium smm:font-bold leading-7 '>{heading}</p>
                            <p className='text-[14px] dark:text-[#FFFFFF99] text-[#696F9B]'>{text}</p>

                        </div>
      
    </div>
  )
}

export default DigitalCard

