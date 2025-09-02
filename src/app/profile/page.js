import React from 'react'
import Image from 'next/image'
import burger from '../../../public/images/burgerbtn.png'
import talon from "../../../public/images/talon-1.png"
import  bell from "../../../public/images/bell.png"
import copy from "../../../public/images/cpy.png"
import user from '../../../public/images/user1.jpg'
import silver from '../../../public/images/silver.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/component/footer'


const Profile = () => {
  return (
    <div>
       <div className='bgset flex flex-col  w-full '>

<div className='flex flex-row justify-between min-h-[80px] bg-blue-900 px-10 items-center'>
  <div>
    <Image src={burger} className='w-[40px]'/>
  </div>
  <div>
    <Image src={talon} className='w-[180px]'/>
  </div>
  <div>
    <Image src={bell} className='w-[40px]'/>
  </div>
</div>



<div className='w-full justify-center flex  '>

<div className='box text-white  w-[30%]  my-3 p-10 rounded-[10px]'>
  <div className='flex flex-row   justify-between pl-5 mb-4'>
    <div className='flex flex-row items-center gap-5'>
    <Image src={user} className='w-[50px] rounded-full' />
    <div className='flex flex-col gap-1  '>
      <p className='text-[18px] font-medium'>
        Kelvin
      </p>
      <p className='flex flex-row gap-1 text-gray-200'>
        Refferal Code : <span className='flex flex-row gap-1 '> 44 IKWT <Image className='w-[20px]' src={copy}/></span>
      </p>

    </div>
    </div>
    <div>
      <Image  src={silver} className='w-[50px]'/>
    </div>
  </div>

  <div className='flex flex-row  justify-between'>
    <p>Total Balance</p>
    <p>20000.00 USDT</p>
  </div>

  <div className='flex flex-row  justify-between mt-3'>
    <p>Daily Profit</p>
    <p>20000.00 USDT</p>
  </div>


  

</div>

</div>


<div>
<div className="lists w-[31%] mx-auto text-white px-10 py-10">
  <div className=' flex flex-col gap-4'>
  <div class=" box-shadow  ">
    <div className='flex flex-row justify-between px-3'>
    <div class="label">Profile Picture</div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
      <path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
    </div>
    
    <div className='boder-b border-[1px] mt-4 border-white'>

    </div>
    
  </div>

  <div class=" box-shadow  ">
    <div className='flex flex-row justify-between px-3'>
    <div class="label">Gender</div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
      <path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
    </div>
    
    <div className='boder-b border-[1px] mt-4 border-white'>

    </div>
    
  </div>

  <div class=" box-shadow  ">
    <div className='flex flex-row justify-between px-3'>
    <div class="label">Transaction</div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
      <path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
    </div>
    
    <div className='boder-b border-[1px] mt-4 border-white'>

    </div>
    
  </div>

  <div class=" box-shadow  ">
    <div className='flex flex-row justify-between px-3'>
    <div class="label">Chect-in</div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
      <path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
    </div>
    
    <div className='boder-b border-[1px] mt-4 border-white'>

    </div>
    
  </div>

  <div class=" box-shadow  ">
    <div className='flex flex-row justify-between px-3'>
    <div class="label">Customer Service</div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
      <path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
    </div>
    
    <div className='boder-b border-[1px] mt-4 border-white'>

    </div>
    
  </div>

  <div class=" box-shadow  ">
    <div className='flex flex-row justify-between px-3'>
    <div class="label">Withdraw Details</div>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
      <path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
    </div>
    
    <div className='boder-b border-[1px] mt-4 border-white'>

    </div>
    
  </div>
</div>
</div>
</div>

<div className='w-full flex justify-center items-center mt-7 mb-10'>
<button class="button-71 bg-blue-500 rounded-full text-white cursor-pointer inline-block font-semibold text-lg px-6 py-4 transition-all duration-300 select-none" role="button">
  Sign Out
  <span class="before-hover bg-gradient-to-b from-white via-transparent to-transparent block h-1/2 w-92 absolute left-4 top-0 rounded-full opacity-50 transition-all duration-300"></span>
</button>
</div>


</div>


<div>
<Footer/>
</div>
    </div>

  )
}

export default Profile
