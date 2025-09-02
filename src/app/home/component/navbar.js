"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobileNavbar from "./mobileNavbar";
import downArrow from "../../../../public/images/home/fi_chevron-down.svg"
import Image from "next/image";
import logo from '../../../../public/images/home/Logo.svg'
import blueGlobalIcon from '../../../../public/images/home/blue-global-icon.svg'
import light from "../../../../public/images/home/sun.svg"
import dark from "../../../../public/images/home/moon.svg"
import { useTheme } from 'next-themes'
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

const   Navbar = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const toggleSignInModal = () => {
    setShowSignInModal(!showSignInModal);
  };
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };
  const closeMenu = () => {
    setNav(false);
  };


  const {theme,setTheme}=useTheme()

  



    const [isOpento, setIsOpento] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language
    const handleToggleDropdown = () => {
        setIsOpento(!isOpento);
      };
    
      const handleSelectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsOpento(false); // Close the dropdown after selecting a language
      };

      useEffect(() => {
        // Disable scroll when nav is true
        if (nav) {
          document.body.style.overflow = 'hidden';
        } else {
          // Re-enable scroll when nav is false
          document.body.style.overflow = 'visible';
        }
    
        // Clean up the effect
        return () => {
          document.body.style.overflow = 'visible';
        };
      }, [nav]);



  return (
    <div>
      <div className="flex justify-between  md:justify-evenly md:gap-52 items-center text-white overflow-x-hidden  py-5  ">
        {/* mobile menu  */}
        <div
          className={`sm:block xl:hidden  flex gap-1 overflow-x-hidden items-center z-50  `}
          onClick={handleNavbar}
        >
          {nav ? (
           ''
          ) : (
            <button className=" border-[1px] rounded-[10px] p-1 border-[#FFFFFF29] w-[40px] h-[40px] flex items-center justify-center  grey-glass backdrop-blur-[18px] text-white ">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L17 1" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M1 9L17 9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M1 17L17 17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>

            </button>
          )}
        </div>
        <div
          className={
            nav
              ? "xl:hidden z-40 fixed overflow-x-hidden top-0 right-0 shadow-md  bottom-0 flex justify-start items-start  w-full   h-[100vh] text-white  bg-[#1A1522]   ease-linear duration-200 transform translate-x-0"
              : "xl:hidden z-40 fixed overflow-x-hidden top-0 right-0 shadow-md  bottom-0 flex justify-start items-start  w-full   h-[100vh] text-white bg-[#1A1522]    ease-linear duration-200  transform translate-x-full"
          }
        >
      
      
      <div className='w-full overflow-x-hidden'>
        <div className="h-[80px] sm:h-[100px] w-full hero flex flex-row justify-center items-center ">
            <p className="text-[#FFFFFF] text-[13px] px-2  sm:text-[15px] md:text-[18px] text-center font-medium">Lorem ipsum dolor sit amet consectetur. Nulla sagittis sollicitudin sit id auctor.</p>
        </div>

      


        <div className="p-5">
            <div className='flex pb-5  items-center flex-row justify-between border-b  '>
            <Image src={logo} className='w-[150px] smm:w-[217px]'/>
                <div className="flex flex-row gap-2  items-center">
                    <Image src={blueGlobalIcon}/>
                    <div>
                    <div>
      <div className="flex  flex-row gap-2 items-center" onClick={handleToggleDropdown}>
        <div >{selectedLanguage}</div>
        <button >
        <Image src={downArrow}/>
        </button>
      </div>

      {isOpento && (
        <div className='w-[240px] absolute ml-[-150px] z-10 mt-2 bg-white dark:bg-[#02043a] rounded-[20px]'>
          <p className='text-[#02043A] dark:text-white text-[20px] font-bold py-3 px-6'>language</p>
          <div className='flex flex-col'>
            {Languages.map((item, index) => (
              <div
                key={index}
                className='flex flex-row gap-2 items-center text-black dark:text-white hover:bg-[#EBECF2] hover:dark:bg-[#9093d0] py-3 px-6'
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

                    <button   className="border-[1px] rounded-[10px] p-2 border-[#E7E8EC]" onClick={handleNavbar}>
        <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

        </button>

                </div>

                
            </div>



            <div className='flex  mt-[40px] text-left flex-col gap-4'>
                <button className='border-b pb-3'>
                  
                    <li className='flex flex-row items-center  text-[20px] font-medium min-w-[200px] max-w-[250px] gap-2'>Home</li>
                </button>

                <button className='border-b pb-3'>
                  
                   <li className='flex flex-row items-center text-[20px] font-medium  min-w-[200px] max-w-[250px] gap-2'> About us</li>
                </button>

                <button className='border-b pb-3'>
                <li className='flex flex-row items-center text-[20px] font-medium  min-w-[200px] max-w-[250px] gap-2'>Subscription</li>
                </button>

                <button className='border-b pb-3'>
                <li className='flex flex-row items-center text-[20px] font-medium  min-w-[200px] max-w-[250px] gap-2'><span>Product Sale Affiliating</span> <Image src={downArrow}/></li>
                </button>

            </div>

            <div className="w-full flex flex-col gap-3 my-10 items-center ">
            <button className='button-87 w-[230px] green-shadow h-[40px] rounded-lg affiliate-btn text-white'>
                        Affiliate Hub
                    </button>

                    <button className='button-87 w-[230px] green-shadow h-[40px] rounded-lg affiliate-btn text-white'>
                        Contact Sales
                    </button>
                
            </div>


            <div className='flex flex-row gap-5   justify-center items-center'>
                    <div className='w-[97px] h-[45px] rounded-[25px]  bg-[#FFFFFF29]  flex flex-row  items-center justify-evenly '>
                        <button className={theme=='light'?'bg-white w-8 h-8 flex flex-row justify-center items-center rounded-full' :'w-8 h-8 flex flex-row justify-center items-center rounded-full'} onClick={()=>{setTheme('light')}}>
                            <Image src={light} className='w-[12px]'/>    
                        </button>
                        <button className={`${theme=='dark'?'bg-black  w-8 h-8 flex flex-row justify-center items-center rounded-full':'w-8 h-8 flex flex-row justify-center items-center rounded-full'} `} onClick={()=>{setTheme('dark')}}>
                        <Image src={dark} className='w-[12px]'/>    
                        </button>
                    </div>

                    </div>


        </div>
    </div>
      


         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
