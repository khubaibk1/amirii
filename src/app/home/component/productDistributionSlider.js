"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import arrowRight from "../../../../public/images/home/arrow-right.svg";
import arrowLeft from "../../../../public/images/home/arrow-left.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`cursor-pointer w-[54px] h-[54px] flex flex-row justify-center items-center ml-[70px] mt-[20px] button-87  hover:border-none transition-all ease-in  rounded-[10px] bg-[#44D3E7]`}
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
      className={`cursor-pointer w-[54px] h-[54px] flex flex-row justify-center items-center  absolute bottom-0  button-87  hover:border-none transition-all ease-in z-10  rounded-[10px] bg-[#44D3E7]`}
      onClick={onClick}
    >
      <Image src={arrowLeft} />
    </div>
  );
}

const CustomDot = ({ onClick, active }) => (
  <div
    className={`custom-dot mt-[-88px]    md:ml-[-325px] lg:ml-[-286px]  xl:ml-[-325px] cursor-pointer ${
      active ? "bg-gray-400" : " bg-[#E0E1EB]"
    } rounded-full w-3 h-3 `}
    onClick={onClick}
  />
);

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const data = [
    {
      id: 1,
      number: "1 out of 4",
      product: "Daily Product Distributions",
      text: "Daily product distributions directly from your Sellvia account.",
    },
    {
      id: 2,
      number: "2 out of 4",
      product: "Maximize Your Earnings",
      text: "Achieve a minimum weekly transaction of $25,000 and share profits.",
    },
    {
      id: 3,
      number: "3 out of 4",
      product: "Seamless Payouts",
      text: "Get credited to your Sellvia debit card without any hassle or transaction fees.",
    },
    {
      id: 4,
      number: "4 out of 4",
      product: "Daily Transfers",
      text: "Transfer your earnings from your Sellvia debit card to your bank daily throughout the week.",
    },
  ];

  const customDotsClass = "absolute left-0 flex-row gap-1 slick-dots";
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
    <div className=" w-full lg:w-[700px] xl:w-full ">
      <Slider
        {...settings}
        className="max-w-[340px]
      smm:max-w-[440px] px-5 sm:text-left text-center sm:max-w-[500px] md:max-w-[780px]"
      >
        {data.map((item, index) => (
          <div key={index} className='className="mx-4'>
            <div className="flex flex-col gap-3 sm:gap-5  mb-10">
              <p className="text-[#696F9B] text-[24px] font-medium">
                {item.number}
              </p>
              <p className="text-[#02043A] sm:leading-normal leading-[28px]  dark:text-white  text-[24px] md:text-[36px] font-bold">
                {item.product}
              </p>
              <p className="text-[#696F9B]  text-[16px] md:text-[20px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
