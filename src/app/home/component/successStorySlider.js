"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import success1 from "../../../../public/images/home/success1.svg";
import success2 from "../../../../public/images/home/success2.svg";
import success3 from "../../../../public/images/home/success3.svg";

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

const SuccessStorySlider = () => {
  const data = [
    {
      id: 1,
      img: success1,
      text: "Mom Earns Over $44,897 with Sellvia . A Remarkable Success Story that motivates",
    },
    {
      id: 2,
      img: success2,
      text: "Dreams to Reality: Tom's $3,583.99 Profit in a Day with Sellvia, Luxurious Cruise to Norway",
    },
    {
      id: 3,
      img: success3,
      text: "How Alex is making a profit of 1000$ per product by partnering up with sellvia and our affiliate's",
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
    <div className="">
      <Slider {...settings} className="w-[340px] smm:w-[400px]  mx-auto">
        {data.map((item, index) => (
          <div key={index}>
            <div className="max-w-[320px] smm:max-w-[380px] mb-10 mx-auto text-center">
              <div className="  max-w-[300px] smm:max-w-[320px]  xl:max-w-[380px]  ">
                <Image src={item.img} className="rounded-[20px]" />
              </div>
              <p className="text-[24px] font-medium smm:font-bold dark:text-white text-[#02043A] leading-8 my-4">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SuccessStorySlider;
