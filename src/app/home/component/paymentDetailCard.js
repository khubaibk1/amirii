import React from 'react'
import Image from 'next/image'

const PaymentDetailCard = ({bg,img,text}) => {
  return (
    <div>
      <div className={`px-[24px] lg:mx-[15px] mx-auto max-w-[380px] min-h-[230px] py-[34px] rounded-[20px] ${bg} flex flex-col gap-3 items-center`}>
                    <Image src={img}/>
                    <p className='text-center text-[24px] text-white font-medium smm:font-bold'>{text}</p>
                </div>
    </div>
  )
}

export default PaymentDetailCard
