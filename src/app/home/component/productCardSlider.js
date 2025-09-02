"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import arrowRight from "../../../../public/images/home/arrow-right.svg";
import arrowLeft from "../../../../public/images/home/arrow-left.svg";
import qouteComma from "../../../../public/images/home/quote-right.svg";
import flash from "../../../../public/images/home/flash.svg";
import product2 from "../../../../public/images/home/product2.svg";
import product3 from "../../../../public/images/home/product3.svg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`cursor-pointer w-[54px] h-[54px] flex flex-row justify-center items-center ml-[70px]   hover:border-none transition-all ease-in  rounded-[10px] bg-[#44D3E7]`}
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
      className={`cursor-pointer w-[54px] h-[54px] flex flex-row justify-center items-center  absolute bottom-0   hover:border-none transition-all ease-in z-10  rounded-[10px] bg-[#44D3E7]`}
      onClick={onClick}
    >
      <Image src={arrowLeft} />
    </div>
  );
}

const CustomDot = ({ onClick, active }) => (
  <div
    className={`custom-dot mt-5  cursor-pointer ${
      active ? "bg-gray-400" : " bg-[#E0E1EB]"
    } rounded-full w-3 h-3 `}
    onClick={onClick}
  />
);

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCardSlider = () => {
  const data = [
    {
      img: flash,
      brand: "Kodak",
      name: "Fun Flash 27+12 Disposable",
      price: "$61.00",
      shipping: "$37.01",
      productType: "Single Product",
    },
    {
      id: 2,
      img: product2,
      bonus: "7%",
      brand: "LG",
      name: "Home appliance full set",
      price: "$3,300.00",
      shipping: "$202.00",
      productType: "Package Deal",
    },
    {
      id: 3,
      img: product3,
      bonus: "10%",
      brand: "Velvet Pure 24 carat Gold Ring",
      name: "Golden Velvet Pure",
      price: "$965.00",
      shipping: "$37.01",
      productType: "Special-Off Item",
    },
  ];

  const settings = {
    dots: true,

    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
          arrows: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings} className="max-w-[500px] mx-auto">
        {data.map((item, index) => (
          <div key={index} className="mt-7 mb-5">
            <div className="w-[320px] smm:w-[360px] bg-white h-[430px] mx-auto  rounded-[20px]  dark:bg-[#30325f] shadow-2xl">
              <div className="relative ">
                <div className="absolute w-[141px] left-3 top-3 font-bold text-[14px] rounded-lg text-center bg-[#F0F1FE] text-black py-[10px] px-[13px]">
                  {item.productType}
                </div>
                <Image src={item.img} />
              </div>
              <div className="  p-[20px]">
                <p className="text-[#696F9B] my-3">{item.brand}</p>
                {item.bonus != null && (
                  <div className="my-[3px] text-[#219653] font-semibold text-[12px] max-w-[130px] px-[12px] py-[6px] bg-[#27AE601F] rounded-[8px] ">
                    {item.bonus} store bonus
                  </div>
                )}
                <p className="text-[22px] font-bold dark:text-white text-[#02043A] my-4">
                  {item.name}
                </p>
                <p className="text-[#27AE60] font-bold">{item.price}</p>
                <p className="text-[#047AFF] font-bold">
                  {item.shipping}
                  <span className="text-[14px] text-[#696F9B]">shipping</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCardSlider;
