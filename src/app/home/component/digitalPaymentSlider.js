"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import productType from "../../../../public/images/home/product-type.svg";
import zelleLogo from "../../../../public/images/home/zelle-logo.svg";

const CustomDot = ({ onClick, active }) => (
  <div
    className={`custom-dot   cursor-pointer ${
      active ? "bg-gray-400" : " bg-[#E0E1EB]"
    } rounded-full w-3 h-3 `}
    onClick={onClick}
  />
);

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DigitalPaymentSlider = () => {
  const data = [
    {
      id: 1,
      img: zelleLogo,
      heading: "Digitalized payments for Global Reach",
    },
    {
      id: 2,
      img: zelleLogo,
      heading: "Digitalized payments for Global Reach",
    },
    {
      id: 3,
      img: zelleLogo,
      heading: "Digitalized payments for Global Reach",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 1,

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
    <div className="">
      <Slider {...settings} className="max-w-[1800px]">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row  pb-[35px] sm:pb-[80px]   mx-[15px]">
              <div className="w-[755px] h-[330px] bg-[#7611DB] flex flex-col  justify-between  rounded-[24px]">
                <div className=" radius-circle">
                  <div className="p-[44px]">
                    <div className="flex flex-col gap-5">
                      <Image src={zelleLogo} />
                      <p className="text-[24px] md:text-[36px] font-medium md:font-bold text-white">
                        Digitalized payments for Global Reach
                      </p>
                    </div>
                    <button className="px-[34px] button-87 bg-[#44D3E7] shadow-[#44D3E780] py-[10px] rounded-md max-w-[200px]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DigitalPaymentSlider;
