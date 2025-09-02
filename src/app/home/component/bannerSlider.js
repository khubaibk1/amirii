"use client"
import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import arrowRight from "../../../../public/images/home/arrow-right.svg"
import arrowLeft from "../../../../public/images/home/arrow-left.svg"
import qouteComma from "../../../../public/images/home/quote-right.svg"
import dot from "../../../../public/images/home/dot.svg"

import whitedot from "../../../../public/images/home/white-dot.svg"
import { useTheme } from 'next-themes'






import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerSlider = () => {
  const { theme, setTheme } = useTheme()
  const data = [
    {
      id: 1,
      text: "Up to $1M+ Coverage/",
      smalltext: " Per Policy"
    },
    {
      id: 2,
      text: "24/7 Roadside Support/",
      smalltext: " Nationwide"
    },
    {
      id: 3,
      text: "Custom Plans/",
      smalltext: " Tailored to Your Fleet"
    }
  ];



  const settings = {
    dots: false,


    speed: 200,
    slidesToShow: 1,
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
    <div className='' >
      <Slider {...settings} className="">
        {data.map((item, index) => (

          <div key={index}>
            <div className="w-full bg-[#F5F6FE] dark:bg-[#F5F6FE1F] min-h-[60px] hidden lg:flex flex-row justify-center items-center my-[55px]">
              <div className="w-full flex flex-row justify-evenly px-[50px] xl:px-[100px] text-[#02043A] dark:text-white items-center">

                <p className="text-[18px] xl:text-[24px] font-bold">
                  Up to <span className="text-[#047AFF]">$1M+ </span>Coverage/
                  <span className="text-[#696F9B] dark:text-[#44D3E7] text-[14px]">Per Policy</span>
                </p>
                {theme == "dark" ? <Image src={whitedot} /> : <Image src={dot} />}

                <p className="text-[18px] xl:text-[24px] font-bold">
                  24/7 Roadside Support/
                  <span className="text-[#696F9B] dark:text-[#44D3E7] text-[14px]">Nationwide</span>
                </p>
                {theme == "dark" ? <Image src={whitedot} /> : <Image src={dot} />}

                <p className="text-[18px] xl:text-[24px] font-bold">
                  Custom Plans/
                  <span className="text-[#696F9B] dark:text-[#44D3E7] text-[14px]">Tailored to Your Fleet</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BannerSlider


