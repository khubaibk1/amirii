"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import arrowRight from "../../../../public/images/home/arrow-right.svg";
import arrowLeft from "../../../../public/images/home/arrow-left.svg";
import qouteComma from "../../../../public/images/home/quote-right.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`cursor-pointer w-[54px] h-[54px] flex mt-10  button-87 flex-row justify-center items-center ml-[70px]   hover:border-none transition-all ease-in  rounded-[10px] bg-[#44D3E7]`}
      onClick={onClick}
    >
      <Image src={arrowRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`cursor-pointer w-[54px] h-[54px] flex flex-row button-87 justify-center items-center  absolute bottom-0   hover:border-none transition-all ease-in z-10  rounded-[10px] bg-[#44D3E7]`}
      onClick={onClick}
    >
      <Image src={arrowLeft} />
    </div>
  );
}

const CustomDot = ({ onClick, active }) => (
  <div
    className={`custom-dot  absolute mt-[-94px] ml-[-120px] sm:ml-[-153px] md:ml-[-200px] lg:ml-[-340px]  cursor-pointer ${
      active ? "bg-gray-400" : " bg-[#E0E1EB]"
    } rounded-full w-3 h-3 `}
    onClick={onClick}
  />
);

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
  const data = [
    {
      id: 1,
      heading: "I’m proud that I found Sellvia",
      text: "First of all, I just wanna give a big thank you to everyone who’s working at Sellvia. You make everything work so fast and easy  for people like me who just wanna manage their own business without stress. I think it’s an opportunity not to miss.",
      customer: "Rachel, Sellvia Customer",
    },
    {
      id: 2,
      heading: "I’m proud that I found Sellvia",
      text: "First of all, I just wanna give a big thank you to everyone who’s working at Sellvia. You make everything work so fast and easy  for people like me who just wanna manage their own business without stress. I think it’s an opportunity not to miss.",
      customer: "Rachel, Sellvia Customer",
    },
    {
      id: 3,
      heading: "I’m proud that I found Sellvia",
      text: "First of all, I just wanna give a big thank you to everyone who’s working at Sellvia. You make everything work so fast and easy  for people like me who just wanna manage their own business without stress. I think it’s an opportunity not to miss.",
      customer: "Rachel, Sellvia Customer",
    },
  ];

  const settings = {
    dots: true,

    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => <CustomDot key={i} />,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider
        {...settings}
        className=" max-w-[320px] smmm:max-w-[360px] smm:max-w-[370px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[780px] "
      >
        {/* w-[320px] smmm:w-[360px] smm:max-w-[370px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[780px]  */}
        {/* max-w-[340px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[780px] */}
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-10 ">
            <Image src={qouteComma} className="mb-10" />
            <p className="text-[24px] md:text-[36px] font-extrabold  my-7 dark:text-white text-[#02043A]">
              {item.heading}
            </p>
            <p className="text-[16px] md:text-[20px] text-[#696F9B] dark:text-white my-7">
              {item.text}
            </p>
            <p className="text-[16px] md:text-[20px] text-[#047AFF] font-bold my-7">
              {item.customer}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

{
  /* <div className='' >
     <Slider {...settings} className=" max-w-[340px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[780px]">
            {data.map((item, index) => (
              
                
              <div key={index} className='flex flex-col gap-10 '>
              <Image src={qouteComma} className='my-10'/>
              <p className='text-[24px] md:text-[36px] font-bold my-7 dark:text-white text-[#02043A]'>{item.heading}</p>
              <p className='text-[16px] md:text-[20px] text-[#696F9B] dark:text-white my-7'>{item.text}</p>
              <p className='text-[16px] md:text-[20px] text-[#047AFF] font-bold my-7'>{item.customer}</p>

          </div> 

              
            ))}
          </Slider>
    </div> */
}

export default ReviewSlider;
