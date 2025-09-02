"use client"
import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import productType from "../../../../public/images/home/product-type.svg"
import zelleLogo from "../../../../public/images/home/zelle-logo.svg"
import press1 from "../../../../public/images/home/press1.svg"
import press2 from "../../../../public/images/home/press2.svg"
import press3 from "../../../../public/images/home/press3.svg"

import facebookLogo from "../../../../public/images/home/facebook-logo.svg"
import g2Logo from "../../../../public/images/home/g2-logo.svg"
import sitejabberLogo from "../../../../public/images/home/sitejabber-logo.svg"
import yellowStar from "../../../../public/images/home/yellow-stars.svg"
import orangeStar from "../../../../public/images/home/orange-star.svg"
import darkStar from "../../../../public/images/home/dark-orange-stars.svg"






  const CustomDot = ({ onClick, active }) => (
    <div
    className={`custom-dot   cursor-pointer ${active ? 'bg-gray-400' : ' bg-[#E0E1EB]'} rounded-full w-3 h-3 `}
    onClick={onClick}
  />  
  );

 
  import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SolutionSlider = () => {
    const data = [
        {
          id: 1,
        img1:facebookLogo,
        img2:orangeStar,
       rating:"4.79",
       review:"Based on 70 Sitejabber reviews"
       
        
        },
        {
          id: 2,
          img1:sitejabberLogo,
        img2:yellowStar,
       rating:"4.9",
       review:"Based on 318 Facebook reviews"
         
        },
        {
          id: 3,
          img1:g2Logo,
          img2:darkStar,
         rating:"4.69",
         review:"Based on 44 G2 reviews"
        
        },
         
        
      ];

      
    const settings = {
        dots: true,
        
        infinite: false,
        speed: 200,
        slidesToShow: 1 ,
        slidesToScroll: 1,
        arrows: false,
     
        customPaging: (i) => <CustomDot key={i} />,
         
        
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,

            },
          },
        ],
      };
  return (
    <div className=''>
     <Slider {...settings} className="max-w-[300px] mx-auto">
            {data.map((item, index) => (
              
                
              <div key={index} >
                <div className='mx-auto my-10 max-w-[250px]'>
                <div className='flex flex-row text-center justify-center items-center'>     
                        <Image src={item.img1}/>
                        </div>
                        <div className='flex flex-row items-center gap-3'>
                            <Image src={item.img2}/>
                            <p className='text-[20px] text-[#02043A] font-bold dark:text-[#FFFFFF]'>{item.rating}</p>    
                        </div>
                        <p className='text-[#02043A] dark:text-[#FFFFFF] '>{item.review}</p>
                    </div>
                </div>

              
            ))}
          </Slider>
    </div>
  )
}

export default SolutionSlider


