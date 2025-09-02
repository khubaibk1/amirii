"use client"
import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import productType from "../../../../public/images/home/product-type.svg"
import zelleLogo from "../../../../public/images/home/zelle-logo.svg"
import press1 from "../../../../public/images/home/press1.svg"
import press2 from "../../../../public/images/home/press2.svg"
import press3 from "../../../../public/images/home/press3.svg"






  const CustomDot = ({ onClick, active }) => (
    <div
    className={`custom-dot   cursor-pointer ${active ? 'bg-gray-400' : ' bg-[#E0E1EB]'} rounded-full w-3 h-3 `}
    onClick={onClick}
  />  
  );

 
  import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PressSlider = () => {
    const data = [
        {
          id: 1,
        img:press1,
       heading:"Sellvia Gives an Opportunity to Start an Ecommerce Business for Free",
       text:"Read More"
       
        
        },
        {
          id: 2,
          img:press2,
          heading:"New Ecommerce Fulfillment Center is Launched in California by Sellvia Company    ",
          text:"Read More"
         
        },
        {
          id: 3,
          img:press3,
       heading:"New Ecommerce Fulfillment Center is Launched in California by Sellvia Company    ",
       text:"Read More"
        
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
     <Slider {...settings} className="w-[340px] smm:w-[400px]  mx-auto">
            {data.map((item, index) => (
              
                
              <div key={index} className='' >
                <div className='max-w-[320px] smm:max-w-[380px] mb-10 mx-auto text-center'>
                    <div className='bg-[#44D3E7] w-[320px] smm:w-[380px] flex flex-row justify-center items-center h-[240px] rounded-[20px] px-[34px] py-[24px]'>
                        <Image  src={item.img} />
                    </div>
                    <p className='text-[24px] font-medium smm:font-bold dark:text-white text-[#02043A] leading-8 my-4'>{item.heading}</p>
                    <p className='text-[#047AFF] font-medium'>{item.text}</p>
                    </div>
                </div>

              
            ))}
          </Slider>
    </div>
  )
}

export default PressSlider


