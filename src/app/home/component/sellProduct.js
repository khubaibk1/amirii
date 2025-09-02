"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import arrowRight from "../../../../public/images/home/arrow-right.svg";
import arrowLeft from "../../../../public/images/home/arrow-left.svg";
import productType from "../../../../public/images/home/product-type.svg";
import key from "../../../../public/images/home/key.svg";

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

const SellProductSlider = () => {
  const data = [
    {
      id: 1,
      img: productType,
      heading: "What products are the partnering stores selling?",
      text2:
        "Sellvia partners with stores globally, offering a diverse range of products, including various nieces. Currently, we accept over 837 types of items into the program.",
    },
  ];

  const settings = {
    dots: true,

    infinite: false,
    speed: 200,
    slidesToShow: 1,
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
    <div className="max-w-[1300px]">
      <Slider {...settings} className="max-w-[1300px]   ">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col lg:flex-row lg:justify-between justify-center lg:items-start  items-center pb-10 ">
              <Image src={item.img} />
              <div className="max-w-[620px] flex flex-col gap-4">
                <p className="text-[#02043A] dark:text-[white] md:text-left text-center text-[28px] smm:text-[36px] md:text-[48px] sm:pt-0 pt-[40px] leading-[40px] sm:leading-[54px] smm:pt-[80px] font-bold smm:font-bold">
                  {item.heading}
                </p>
                <p className="text-[#696F9B]  dark:text-[#FFFFFF99] md:text-left text-center text-[20px]">
                  {" "}
                  {item.text2}
                </p>
                <div className=" md:block flex flex-row justify-center items-center">
                  <button className="   max-h-[60px]   py-[12px]      text-white">
                    <div className="flex flex-row  items-center   button-87 rounded-[20px] ">
                      <div className="bg-[#BFF3FA33] min-h-[15px] max-h-[80px] rounded-l-[20px] flex flex-row justify-center items-center h-[50px] px-[10px]">
                        <Image src={key} className="h-[25px]" />
                      </div>
                      <p className="bg-[#44D3E7] h-[50px] text-center flex flex-row items-center rounded-r-[20px] px-[25px]">
                        <span> Access Affiliate Hub 🔥</span>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SellProductSlider;
