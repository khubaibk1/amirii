"use client"
import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import support1 from "../../../../public/images/home/support1.svg"
import support2 from "../../../../public/images/home/support2.svg"
import support3 from "../../../../public/images/home/support3.svg"





  const CustomDot = ({ onClick, active }) => (
    <div
    className={`custom-dot   cursor-pointer ${active ? 'bg-gray-400' : ' bg-[#E0E1EB]'} rounded-full w-3 h-3 `}
    onClick={onClick}
  />  
  );

 
  import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SupportSlider = () => {
    const data = [
        {
          id: 1,
        img:support1,
       heading:"Dedicated Manager for Affiliates",
       text:"Your advisor, with hands-on affiliate experience, is ready to guide you. We recruit managers who have worked as affiliates for at least three months."
       
        
        },
        {
          id: 2,
          img:support2,
          heading:"Award winning Support",
          text:"Our professional customer support is ready to handle your transactions, resolve issues, and provide expert guidance. Your satisfaction is our priority."
         
        },
        {
          id: 3,
          img:support3,
          heading:"Marketing Academy",
          text:"Our affiliates receive priority if they aspire to open their own store someday, and we provide comprehensive video courses to support their journey."
        
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
     <Slider {...settings} className="max-w-[350px] smm:max-w-[500px] mx-auto">
            {data.map((item, index) => (
              
                
              <div key={index} >
                <div className='w-[320px] smm:w-[360px] mx-auto my-10 dark:bg-[#7976761a] h-[430px] rounded-[20px] shadow-2xl'>
                    <Image src={item.img}/>
                    <div className=' p-[20px] text-center'>
                    <p className='text-[24px] font-medium smm:font-bold text-[#02043A] dark:text-white mb-[4px] leading-8 '>{item.heading}</p>
                    <p className='text-[#696F9B] dark:text-[#FFFFFF99]'>{item.text}</p>
                    </div>
                </div>
                </div>

              
            ))}
          </Slider>
    </div>
  )
}

export default SupportSlider


