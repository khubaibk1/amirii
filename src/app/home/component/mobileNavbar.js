"use client"

import React from 'react'
import Image from 'next/image'
import downArrow from "../../../../public/images/home/fi_chevron-down.svg"
import { useState } from 'react'

const Languages= [
    {
      id: 1,
     img:'',
     Language:"English"
    
    },
    {
        id: 2,
       img:'',
       Language:"French"
      
      },
      {
        id: 3,
       img:'',
       Language:"Italian"
      
      },
      {
        id: 4,
       img:'',
       Language:"Dutch"
      
      },
      {
        id: 5,
       img:'',
       Language:"Spanish"
      
      },
      {
        id: 6,
       img:'',
       Language:"Portuguese"
      
      },
      {
        id: 7,
       img:'',
       Language:"German"
      
      },
]

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language
    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const handleSelectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false); // Close the dropdown after selecting a language
      };
  return (
    <div className=''>
        <div>
            <div className='flex  flex-row justify-between border-b border-[1px] '>
                <Image/>
                <div>
                    <Image/>
                    <div>
                    <div>
      <div className="flextext-[#02043A] flex-row gap-2 items-center">
        <div>{selectedLanguage}</div>
        <button onClick={handleToggleDropdown}>
        <Image src={downArrow}/>
        </button>
      </div>

      {isOpen && (
        <div className='w-[240px] absolute z-10 mt-5 bg-white dark:bg-[#02043a] rounded-[20px]'>
          <p className='dark:text-[#02043A] text-white text-[20px] font-bold py-3 px-6'>language</p>
          <div className='flex flex-col'>
            {Languages.map((item, index) => (
              <div
                key={index}
                className='flex flex-row gap-2 items-center  hover:bg-[#EBECF2] hover:dark:bg-[#9093d0] py-3 px-6'
                onClick={() => handleSelectLanguage(item.Language)}
              >
                   <Image src={item.img}/>
                                          <p>{item.Language}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
                    </div>

                    <button>
                        
                    </button>

                </div>
            </div>



            <div className='flex flex-col gap-4'>
                <button>
                    Home
                </button>

                <button>
                   About us
                </button>

                <button>
                    Subscription
                </button>

                <button>
                <li className='flex flex-row items-center  min-w-[200px] max-w-[200px] gap-2'><span>Product Sale Affiliating</span> <Image src={downArrow}/></li>
                </button>

            </div>

            <div>
            <button className='button-87 w-[130px] green-shadow h-[40px] rounded-lg affiliate-btn text-white'>
                        Affiliate Hub
                    </button>

                    <button className='button-87 w-[130px] green-shadow h-[40px] rounded-lg affiliate-btn text-white'>
                        Contact Sales
                    </button>
                
            </div>


        </div>
    </div>
  )
}

export default MobileNavbar
