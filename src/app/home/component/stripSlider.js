"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import arrowRight from "../../../../public/images/home/arrow-right.svg";
import arrowLeft from "../../../../public/images/home/arrow-left.svg";
import qouteComma from "../../../../public/images/home/quote-right.svg";
import dot from "../../../../public/images/home/dot.svg";

import whitedot from "../../../../public/images/home/white-dot.svg";
import { useTheme } from "next-themes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StripSlider = () => {
  const { theme, setTheme } = useTheme();
 const data = [ 
  {
    id: 1,
    text:"Up to $1M+ Coverage/",
    smalltext:" Per Policy"
  },
  {
    id: 2,
    text:"24/7 Roadside Support/",
    smalltext:" Nationwide"
  },
  {
    id: 3,
    text:"Custom Plans/",
    smalltext:" Tailored to Your Fleet"
  }
];


  const settings = {
    dots: false,

    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          infinite: true,
          speed: 2000,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider
        {...settings}
        className="w-full flex flex-row items-center justify-center"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#F5F6FE]  max-h-[60px] dark:bg-[#F5F6FE1F] min-h-[60px] flex flex-row  justify-center items-center my-[55px]"
          >
            <div className="w-full flex flex-row lg:justify-evenly  justify-center  gap-5 py-4  smm:py-3 px-[100px] text-[#02043A] dark:text-white items-center">
              {theme == "dark" ? <Image src={whitedot} /> : <Image src={dot} />}
              <div className="text-[16px] smm:text-[24px]    min-w-[300px] max-w-[300px]   smm:min-w-[400px] smm:max-w-[400px]  flex flex-row  items-end pt-  font-bold">
                {index == 0 ? (
                  <p className=" font-semibold">
                    Up to <span className={`text-[#047AFF]`}>500k+ </span>Store
                    Sales/
                  </p>
                ) : (
                  item.text
                )}{" "}
                {item.id == 1 && index != 0 ? item.text : ""}
                <span className="text-[#696F9B] dark:text-[#44D3E7] text-[14px] pt-1">
                  {" "}
                  {item.smalltext}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StripSlider;
