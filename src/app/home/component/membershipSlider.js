"use client"
import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import productType from "../../../../public/images/home/product-type.svg"
import zelleLogo from "../../../../public/images/home/zelle-logo.svg"
import arrowRight from "../../../../public/images/home/arrow-right.svg"
import arrowLeft from "../../../../public/images/home/arrow-left.svg"
import Card1 from "../../../../public/images/home/card1.svg"
import Card2 from "../../../../public/images/home/card2.svg"
import Card3 from "../../../../public/images/home/card3.svg"


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`cursor-pointer w-[54px] h-[54px] flex flex-row justify-center items-center  absolute  top-[30%] right-[-25px]  hover:border-none transition-all ease-in  rounded-[10px] bg-[#44D3E7]`}
        onClick={onClick}
      >
       <Image src={arrowRight}/>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`cursor-pointer w-[54px] h-[54px] flex flex-row justify-center items-center  absolute  left-[-25px] top-[30%]   hover:border-none transition-all ease-in z-10  rounded-[10px] bg-[#44D3E7]`}
        onClick={onClick}
      >
       <Image src={arrowLeft}/>
      </div>
    );
  }


  const CustomDot = ({ onClick, active }) => (
    <div
    className={`custom-dot   cursor-pointer ${active ? 'bg-gray-400' : ' bg-[#E0E1EB]'} rounded-full w-3 h-3 `}
    onClick={onClick}
  />  
  );

 
  import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MembershipSlider = () => {
    const data = [
        {
          id: 1,
        img:Card1,
      
       
        
        },
        {
          id: 2,
          img:Card2,
         
          
         
        },
        {
          id: 3,
          img:Card1,
      
       
        
        },
        {
            id: 4,
            img:Card2,
        
         
          
          },
         
        
      ];

      
    const settings = {
        dots: false,
        
        infinite: false,
        speed: 200,
        arrows: true,
        slidesToShow: 3 ,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
     
        customPaging: (i) => <CustomDot key={i} />,
         
        
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: true,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
              

            },
          },
        ],
      };
  return (
    <div className='w-full'>
     <Slider {...settings} className="w-full mb-[80px]">
            {data.map((item, index) => (
              
                
              <div key={index} >
                <div className='flex flex-row gap-5  mx-5'>
                <Image src={item.img}/> 
                </div>
                </div>

              
            ))}
          </Slider>
    </div>
  )
}

export default MembershipSlider


