"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import Card from "./component/card";

import logo from "../../../public/images/amirii.png";
import light from "../../../public/images/home/sun.svg";
import dark from "../../../public/images/home/moon.svg";

import amazon from "../../../public/images/home/amazon.svg";
import shopify from "../../../public/images/home/shopify.svg";
import target from "../../../public/images/home/target.svg";
import Etsy from "../../../public/images/home/etsy.svg";
import man from "../../../public/images/home/man.svg";
import block from "../../../public/images/home/block-bg.svg";


import underline from "../../../public/images/home/underline.svg";
import key from "../../../public/images/home/key.svg";

import { motion } from "framer-motion";
import { useVisibleAnimation } from "@/component/useVisibleAnimation";

import { useTheme } from "next-themes";
import StripSlider from "./component/stripSlider";

import Navbar from "./component/navbar";

import DocAnimationData from "../AnimationData/BlueAnimation/Doc.json";
import ExchangeAnimationData from "../AnimationData/BlueAnimation/Exchange.json";
import RocketAnimationData from "../AnimationData/BlueAnimation/Rocket.json";
import SafeAnimationData from "../AnimationData/BlueAnimation/Safe.json";
import WorldAnimationData from "../AnimationData/BlueAnimation/World.json";
import TradingAnimationData from "../AnimationData/BlueAnimation/trading.json";
import BagesAnimationData from "../AnimationData/BlueAnimation/Bages.json";
import ScanAnimationData from "../AnimationData/BlueAnimation/Scan.json";
import TransportAnimationData from "../AnimationData/BlueAnimation/Transpot.json";
import LogoAnimationData from "../Business Logo Animation.json";
import LoadingAnimationData from "../Loading Animation.json";
import ConversionAnimationData from "../AnimationData/conversion.json";
import BannerSlider from "./component/bannerSlider";
import d1 from "../AnimationData/group27.json";
import d2 from "../AnimationData/image25.json";


import MainAnimation from "@/component/IconAnimations/mainAnimation";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language
  const dropdownRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const handleBookModalClose = () => {
    setIsBookModalOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3000 && !isBookModalOpen) {
        setIsBookModalOpen(true);
        // Optionally, remove the event listener if you only want to show the modal once
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts to clean up resources
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { theme, setTheme } = useTheme("light");
  const data = [
    {
      id: 1,
      title: "Product Distribution",
      paratext:
        "Our system daily distributes products to your workstation from the stores based on market trends and your current balance. The minimum balance on Sellvia should not be less than $100.",
    },
    {
      id: 2,
      title: "Refundable Purchase",
      paratext:
        "Upon receiving the product order, make your purchase, and your balance will be refunded within 5 minutes, as the goal is to ensure each transaction counts.",
    },
    {
      id: 3,
      title: "Cashback Rewards",
      paratext:
        "Enjoy a cashback reward starting from 1% on every purchase, varying with your membership plan.",
    },
    {
      id: 4,
      title: "Daily quota",
      paratext:
        "Each membership plan sets a minimum daily product order quota. Fulfill your daily orders to qualify for profit sharing at week's end.",
    },
    {
      id: 5,
      title: "Weekly Revenue",
      paratext:
        "Every 5 days, partner stores share their revenue profit. Maintain a weekly transaction of at least $25,000 to be eligible for profit sharing.",
    },
  ];

  const [visibleParagraph, setVisibleParagraph] = useState(null);

  const toggleParagraphVisibility = (id) => {
    setVisibleParagraph((prev) => (prev === id ? null : id));
  };
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [btnRef, btnControls] = useVisibleAnimation();
  const [btnRef2, btnControls2] = useVisibleAnimation();
  const [btnRef3, btnControls3] = useVisibleAnimation();
  const [btnRef4, btnControls4] = useVisibleAnimation();
  
  const [btnRef6, btnControls6] = useVisibleAnimation();

  const [t1Ref, , slideLeft] = useVisibleAnimation();
  const [t2Ref, , , slideRight] = useVisibleAnimation();
  const [t3Ref, , , , slideR1, ,] = useVisibleAnimation();
  const [t4Ref, , , , , slideR2] = useVisibleAnimation();
  const [t5Ref, , , , , , slideR3] = useVisibleAnimation();
  const [t6Ref, , , , , , , rotate1] = useVisibleAnimation();
  const [t7Ref, , , , , , , rotate2] = useVisibleAnimation();

  const covariant = {
    hidden: {
      opacity: 0,
      y: 70,
    },
  };
  const slide = {
    hiidden: {
      opacity: 0,
      x: 100,
    },
  };
  const slideR = {
    hiidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <div className="overflow-hidden  dark:bg-[#02043a] ">
      <>
        <div className="hero-bg h-[1100px]  lg:h-[900px]   ">
          <div className="bg-lines max-w-[1300px] mx-auto px-10">
            <div className=" flex  flex-row justify-between items-center pt-[1px]  min-h-[15px]">
              <div className="flex flex-row gap-10 items-center text-white">
                <Image
                  src={logo}
                  className=" w-[117px] lg:w-[100px] sxl:w-[130px]"
                />
                <ul className="hidden lg:flex max-w-[500px]   tracking-wide text-[16px] lg:text-[17px] font-medium  flex-row gap-4  sxl:ml-2 ml-0 sxl:gap-7 ">
                  <li className="">Home</li>
                  <li className="max-w-[78px] min-w-[78px]">About Us</li>
                  <li className="">Service</li>
                  <li className="flex flex-row items-center  min-w-[220px] max-w-[220px] gap-2">
                    <span>Contact Us</span>{" "}
                    {/* <Image src={downArrow} /> */}
                  </li>
                </ul>
              </div>

              <div className="hidden lg:flex flex-row gap-3 xl:gap-5 items-center">
                <div className="w-[54px] h-[28px] rounded-[25px]  bg-[#FFFFFF29]  flex flex-row gap-2 items-center justify-center">
                  <button
                    className={
                      theme == "light"
                        ? "bg-white w-5 h-5  flex flex-row justify-center items-center rounded-full"
                        : ""
                    }
                    onClick={() => {
                      setTheme("light");
                    }}
                  >
                    <Image src={light} className="w-[14px]" />
                  </button>
                  <button
                    className={`${
                      theme == "dark"
                        ? "bg-[#02043A] w-5 h-5 flex flex-row justify-center items-center rounded-full"
                        : ""
                    } `}
                    onClick={() => {
                      setTheme("dark");
                    }}
                  >
                    <Image src={dark} className="w-[14px]" />
                  </button>
                </div>

                {/* <div>
                  <div
                    className="flex text-white flex-row gap-2 overfl items-center"
                    onClick={handleToggleDropdown}
                  >
                    <div>{selectedLanguage}</div>
                    <button>
                      <Image src={downArrow} />
                    </button>
                  </div>

                  {isOpen && (
                    <div
                      ref={dropdownRef}
                      className="w-[240px] absolute z-10 mt-5 bg-white dark:bg-[#02043a] rounded-[20px]"
                    >
                      <p className="text-[#02043A] dark:text-white text-[20px] font-bold py-3 px-6">
                        language
                      </p>
                      <div className="flex flex-col text-[16px] lg:text-[17px] tracking-wide font-medium">
                        {Languages.map((item, index) => (
                          <div
                            key={index}
                            className={`flex flex-row gap-2 ${
                              index == 6 ? " rounded-b-[18px]" : ""
                            } items-center  hover:bg-[#EBECF2] hover:dark:bg-[#9093d0] py-3 px-6`}
                            onClick={() => handleSelectLanguage(item.Language)}
                          >
                            <Image src={item.img} />
                            <p className="text-[16px] lg:text-[17px] tracking-wide font-medium">
                              {item.Language}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div> */}
 <button className="button-87 w-[130px] lg:w-[130px] sxl:text-[16px] text-[16px] lg:text-[17px] sxl:w-[131px] green-shadow h-[40px] lg:h-[41px] sxl:h-[41px] rounded-lg affiliate-btn text-white">
                 Login
                </button>
                <button className="button-87 w-[130px] lg:w-[130px] sxl:text-[16px] text-[16px] lg:text-[17px] sxl:w-[131px] green-shadow h-[40px] lg:h-[41px] sxl:h-[41px] rounded-lg affiliate-btn text-white">
                Register
                </button>
              </div>

              <div className=" lg:hidden block overflow-x-hidden">
                <Navbar />
              </div>
            </div>

           <div className="pt-[10px] flex flex-col gap-32 lg:flex-row lg:gap-3">
  <motion.div
    className="text-white max-w-[565px]"
    ref={t2Ref}
    variants={slideR}
    initial="hiidden"
    animate={slideRight}
  >
    <div className="mt-0 lg:mt-5 lg:leading-[75px]">
      <p className="lg:text-[60px] tracking-normal smm:tracking-wide font-medium sm:text-[36px] text-[28px] smmm:text-[35px] smm:text-[38px]">
        Protecting Your Fleet
      </p>
      <p className="lg:text-[60px] tracking-wide font-medium sm:text-[36px] text-[28px] smmm:text-[35px] smm:text-[38px]">
        Safeguarding Your Business
      </p>
    </div>
    <p className="lg:text-[20px] text-[#FFFFFF] smmm:text-[17px] sm:text-[18px] text-[15px] sm:leading-normal leading-6 font-normal sm:font-medium mt-5">
      Secure your trucks, drivers, and cargo with our comprehensive trucking
      insurance solutions. From liability coverage to cargo protection, we help
      you stay on the road with peace of mind and financial security.
    </p>

    <div>
      <button className="button-87 lg:w-[160px] w-[145px] lg:text-[16px] text-[16px] mt-5 h-[55px] rounded-[14px]">
        Get a Quote
      </button>
    </div>
    <p className="text-[14px] mt-[15px]">
      Trusted by
      <span className="text-[22px] text-[#5AE0F3]"> 5,000+ </span>
      trucking companies nationwide
    </p>
    <div className="flex flex-row items-center gap-4 mt-10">
      <Image src={amazon} className="w-[75px]" />
      <Image src={shopify} className="w-[75px]" />
      <Image src={target} className="w-[75px]" />
      <Image src={Etsy} className="w-[46px]" />
    </div>
  </motion.div>

  <div className="flex flex-col ml-[40px] justify-between relative">
    <div className="lg:w-[230px] w-[161px] h-[60px] lg:h-[90px] z-10 flex flex-col lg:right-auto lg:top-auto top-[-90px] smm:top-[-60px] sm:top-[-40px] smm:mr-auto mr-[-30px] right-0 sm:left-0 text-white justify-center rounded-[18px] pl-5 absolute bg-[#44D3E7]">
      <p className="text-[#FFFFFF] lg:text-[16px] text-[10px]">
      Liability Protection Up to
      </p>
      <p className="lg:text-[30px] text-[20px] font-bold">
      1M+
        <sub className="lg:text-[12px] text-[8px] font-normal text-[#FFFFFF80]">
          Coverage
        </sub>
      </p>
    </div>

    <motion.span
      ref={t1Ref}
      variants={slide}
      initial="hiidden"
      animate={slideLeft}
      className="absolute bottom-[-440px] smm:bottom-[-350px] sm:bottom-[-250px] md:left-[95px] md:bottom-[-200px] min-w-[500px] max-w-[500px] xl:left-[80px] lg:left-0 lg:right-0 left-[-120px] sm:left-[40px] lg:transform-none transform -translate-x-1/2"
    >
      <Image src={man} />
    </motion.span>
    <Image src={block} className="ml-auto lg:ml-[40px] mt-[-60px]" />

    <div className="absolute lg:top-[130px] lg:left-[-20px] xl:top-auto xl:right-[-15px] lg:w-[170px] xl:left-auto w-[85px] left-[-60px] sm:right-0 md:right-auto top-[20px] md:top-[50px]">
      {/* <ConversionAnimation animationData={d1} /> */}
    </div>
    <div className="relative">
      <div className="lg:ml-[-160px] ml-auto lg:w-[680px] w-[150px] mt-auto sm:mt-[-225px] lg:mt-[-195px] left-[-100px] sm:left-auto absolute">
      <img src="/images/insurance.png"  className="w-[350px]  cover rounded-[20px]" width={100} height={100}/>
        {/* <ConversionAnimation animationData={ConversionAnimationData} /> */}
      </div>
    </div>
  </div>
</div>


          </div>
        </div>

        <div className=" mt-[30px] md:mt-[70px] relative">
          <div
            className={`lg:block hidden ${
              theme == "dark" ? "blue-shade" : ""
            } bottom-[-800px] absolute `}
          ></div>
          <div
            className={`lg:block hidden right-0 top-[-400px] ${
              theme == "dark" ? "blue-shade-right" : ""
            } absolute `}
          ></div>
          <div className="w-full  flex flex-row justify-center">
            <motion.div
              className="max-w-[870px] text-center px-4 "
              variants={covariant}
              initial="hidden"
              animate={btnControls}
              ref={btnRef}
            >
            <p className="text-[36px] font-bold smm:text-[36px] lg:text-[48px] md:font-black dark:text-white  sm:leading-auto   pb-5 leading-[46px] text-[#02043A]">
  Reliable <span className="text-[#047AFF]">Coverage</span> You Can Trust
</p>
<p className="text-[#696F9B] dark:text-[#FFFFFF] leading-[26px] md:leading-[24px] ">
  Our trucking insurance policies provide comprehensive protection for fleets,
  drivers, and cargo—helping businesses stay safe on the road with financial
  security and peace of mind.
</p>


            </motion.div>
          </div>
          {/* <div className='w-full  bg-[#F5F6FE] dark:bg-[#F5F6FE1F] min-h-[60px] hidden lg:flex flex-row  justify-center items-center my-[55px]'>
                <div className='flex flex-row justify-center'>

                <div className='w-full flex flex-row gap-[30px] px-[50px] xl:px-[100px] text-[#02043A] dark:text-white items-center'>
                <p className= 'text-[18px] xl:text-[24px]   font-bold'>Up to <span className="text-[#047AFF]">500k+ </span>Store Sales/<span className='text-[#696F9B] dark:text-[#44D3E7] text-[14px]'>Monthly</span></p>
                {theme=='dark'?(<Image src={whitedot}/>):(<Image src={dot}/>)}
                <p className= 'text-[18px] xl:text-[24px]  font-bold'>High-Profit Shares/<span className='text-[#696F9B] dark:text-[#44D3E7] text-[14px]'>Starting at 5%</span></p>
                {theme=='dark'?(<Image src={whitedot}/>):(<Image src={dot}/>)}
                <p className= 'text-[18px] xl:text-[24px]  font-bold'>Flexible Work/<span className='text-[#696F9B] dark:text-[#44D3E7] text-[14px]'>Personalized Hours</span></p>
                </div>
                </div>
            </div> */}
          <div className="lg:block hidden">
            <BannerSlider />
          </div>
          <div className="lg:hidden block">
            <StripSlider />
          </div>
        <div className="flex flex-col gap-5 lg:flex-row justify-center items-center lg:gap-[30px] mt-[0px] md:mt-[50px]">
  <motion.div
    ref={t3Ref}
    initial={{ opacity: 0, x: -80 }}
    animate={slideR1}
    transition={{ duration: 0.25 }}
  >
    <Card
      image={"1"}
      heading={"Comprehensive Coverage"}
      text={
        "Protects liability, cargo, and physical damage with policies designed for trucking businesses."
      }
    />
  </motion.div>

  <motion.div
    ref={t4Ref}
    initial={{ opacity: 0, x: -120 }}
    animate={slideR2}
    transition={{ duration: 0.5 }}
  >
    <Card
      image={"2"}
      heading={"Fast Claims  Processing"}
      text={
        "Our streamlined claims process ensures quick resolutions to keep your trucks moving."
      }
    />
  </motion.div>

  <motion.div
    ref={t5Ref}
    initial={{ opacity: 0, x: -140 }}
    animate={slideR3}
    transition={{ duration: 0.75 }}
  >
    <Card
      image={"3"}
      heading={"Dedicated   Support"}
      text={
        "Our team provides 24/7 assistance and customized insurance solutions for your fleet."
      }
    />
  </motion.div>
</div>

        </div>

        <div
          className={`w-full relative  mt-[80px]  text-center py-14 sm:h-auto h-[80%] sm:py-24 pb ${
            theme == "dark" ? "simple-bg-dark" : "simple-bg"
          } `}
        >
          <div
            className={`lg:block hidden ${
              theme == "dark" ? "blue-shade-right" : ""
            } right-0 bottom-[-400px]  absolute `}
          ></div>
          <div
            className={`w-full ${
              theme == "dark" ? "" : ""
            }  flex flex-row justify-center items-center   `}
          >
            <motion.div
  className="flex flex-col gap-8 max-w-[1240px] px-4"
  variants={covariant}
  initial="hidden"
  animate={btnControls4}
  ref={btnRef4}
>
  <p className="text-[36px] smm:text-[36px] px-4 lg:text-[48px] dark:text-white leading-[42px] sm:leading-normal font-bold md:font-black text-[#02043A]">
    Welcome to{" "}
    <span className="text-[#44D3E7] relative">
      Amirii Insurance
      <div className="absolute right-0 smm:block hidden">
        <Image src={underline} />
      </div>
    </span>
  </p>

  <p className="txt-[20px] smm:text-[24px] px-4 text-[#047AFF] font-semibold md:font-bold">
    Protecting truckers, fleets, and businesses with trusted coverage.
  </p>

  <p className="text-[16px] px-4 dark:text-[#FFFFFF] lg:text-[20px] text-[#696F9B]">
    At Amirii Insurance, we specialize in trucking and commercial insurance designed to keep your drivers, cargo, and business secure on every mile of the road. 
    From small independent operators to large fleet owners, our mission is to deliver reliable coverage that fits your unique needs.
  </p>

  <p className="text-[20px] smm:text-[24px] px-4 text-[#047AFF] font-semibold md:font-bold">
    Why choose Amirii Insurance?
  </p>

  <p className="text-[16px] px-4 dark:text-[#FFFFFF] lg:text-[20px] text-[#696F9B]">
    With access to top-rated carriers, 24/7 roadside support, and policies tailored to the transportation industry, we go beyond basic insurance. 
    Our clients count on us for protection that not only meets state and federal requirements but also provides peace of mind for every journey.
  </p>

  <p className="text-[16px] px-4 dark:text-[#FFFFFF] lg:text-[20px] text-[#696F9B]">
    Whether you’re an owner-operator or managing a growing fleet, Amirii Insurance is here to keep you covered every step of the way.
  </p>
</motion.div>

          </div>
        <div className="flex flex-row justify-center py-0 lg:py-12 items-center">
  <div className="hidden lg:grid grid-cols-2 max-w-[1300px] mx-auto xl:grid-cols-4 gap-4 items-center px-4 ">
    
    {/* Financial Growth */}
    <motion.div
      ref={t6Ref}
      initial={{ scale: 0 }}
      animate={rotate1}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 5,
      }}
    >
      <Card
        width={"200px"}
        image={"4"}
        heading={"Financial Protection"}
        text={
          "Safeguard your trucking business with coverage that minimizes financial risks and unexpected losses."
        }
      />
    </motion.div>

    {/* Compliance Support */}
    <motion.div
      ref={btnRef2}
      initial={{ y: -50 }}
      animate={btnControls2}
    >
      <Card
        width={"200px"}
        image={"1"}
        heading={"Regulatory Compliance"}
        text={
          "Stay compliant with federal and state trucking insurance requirements, keeping your business on the road."
        }
      />
    </motion.div>

    {/* Reputation & Trust */}
    <motion.div
      ref={btnRef3}
      initial={{ y: 50 }}
      animate={btnControls3}
    >
      <Card
        width={"200px"}
        image={"5"}
        heading={"Stronger Reputation"}
        text={
          "Build trust with clients, brokers, and partners by showing your fleet is fully insured and reliable."
        }
      />
    </motion.div>

    {/* Fleet Discounts */}
    <motion.div
      ref={t7Ref}
      initial={{ scale: 0 }}
      animate={rotate2}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 5,
      }}
    >
      <Card
        width={"200px"}
        image={"6"}
        heading={"Fleet Discounts"}
        text={
          "Save more with bundled insurance policies and special discounts designed for multi-truck operations."
        }
      />
    </motion.div>

  </div>
</div>

        </div>

       
<div className="w-full flex flex-row justify-center mt-[80px] sm:mt-[100px] px-4">
  <div className="max-w-[1300px] pb-3 sm:pb-8">
    <motion.p
      className="text-[36px] leading-[44px] smm:text-[36px] px-4 lg:text-[48px] w-[340px] smmm:w-[390px] smm:w-[400px] sm:w-[500px] md:w-full mx-auto text-center font-bold md:font-black  sm:leading-[60px]  dark:text-white text-[#02043A]"
      variants={covariant}
      initial="hidden"
      animate={btnControls6}
      ref={btnRef6}
    >
      Why Choose{" "}
      <span className="text-[#047AFF] dark:text-white">
        Amirii Insurance?
      </span>
    </motion.p>

    <div className="flex flex-col lg:flex-row w-[60%] smmm:w-[70%] smm:w-[80%] sm:w-full mx-auto justify-between mt-[20px] sm:mt-[40px] mb-[20px] sm:mb-[30px] gap-8 sm:gap-10 items-center">
      <div className="block lg:hidden ">
        <MainAnimation animationData={d2} />
      </div>

      <div className="md:w-[600px] w-[350px] smm:w-[450px] sm:w-[580px] px-4 lg:min-w-[600px] dark:bg-[#FFFFFF1A] rounded-[20px] shadow-2xl">
        
        {/* Comprehensive Coverage */}
        <div className="flex flex-row items-center p-[20px] gap-4 border-b-2 dark:border-[#FFFFFF1A] border-[#DFE0E6]">
          <div className="w-[80px]">
            <MainAnimation animationData={TradingAnimationData} />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] md:text-[20px] font-semibold smm:font-bold dark:text-white text-[#02043A]">
              Comprehensive Coverage
            </p>
            <p className="text-[#696F9B] dark:text-[#999CB4] text-[14px] md:text-[17px]">
              Protection for liability, cargo, physical damage, and more—tailored to your trucking needs.
            </p>
          </div>
        </div>

        {/* Affordable Premiums */}
        <div className="flex flex-row items-center p-[20px] gap-4 border-b-2 dark:border-[#FFFFFF1A] border-[#DFE0E6]">
          <div className="w-[80px] max-w-[80px]">
            <MainAnimation animationData={BagesAnimationData} />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] md:text-[20px] font-semibold smm:font-bold dark:text-white text-[#02043A]">
              Affordable Premiums
            </p>
            <p className="text-[#696F9B] dark:text-[#999CB4] text-[14px] md:text-[17px]">
              Flexible plans and competitive rates designed to fit both owner-operators and large fleets.
            </p>
          </div>
        </div>

        {/* 24/7 Claims Support */}
        <div className="flex flex-row items-center p-[20px] gap-4 border-b-2 dark:border-[#FFFFFF1A] border-[#DFE0E6]">
          <div className="w-[80px] max-w-[80px]">
            <MainAnimation animationData={DocAnimationData} />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] md:text-[20px] font-semibold smm:font-bold dark:text-white text-[#02043A]">
              24/7 Claims Assistance
            </p>
            <p className="text-[#696F9B] dark:text-[#999CB4] text-[14px] md:text-[17px]">
              Fast, reliable claims handling to get you back on the road quickly after an accident.
            </p>
          </div>
        </div>

        {/* Safety & Compliance */}
        <div className="flex flex-row items-center p-[20px] gap-4 border-b-2 dark:border-[#FFFFFF1A] border-[#DFE0E6]">
          <div className="w-[83px] max-w-[83px]">
            <MainAnimation animationData={SafeAnimationData} />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] md:text-[20px] font-semibold smm:font-bold dark:text-white text-[#02043A]">
              Safety & Compliance
            </p>
            <p className="text-[#696F9B] dark:text-[#999CB4] text-[14px] md:text-[17px]">
              Stay compliant with FMCSA and DOT requirements while protecting your drivers and cargo.
            </p>
          </div>
        </div>

        {/* Nationwide Coverage */}
        <div className="flex flex-row p-[20px] gap-4 border-b-2 dark:border-[#FFFFFF1A] border-[#DFE0E6]">
          <div className="w-[83px] max-w-[83px]">
            <MainAnimation animationData={WorldAnimationData} />
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] md:text-[20px] font-semibold smm:font-bold dark:text-white text-[#02043A]">
              Nationwide Protection
            </p>
            <p className="text-[#696F9B] dark:text-[#999CB4] text-[14px] md:text-[17px]">
              Wherever the road takes you, Amirii Insurance has your back—coast to coast.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:block hidden">
        <MainAnimation animationData={d2} />
      </div>
    </div>

    {/* CTA Button */}
    <div className="w-full flex flex-row justify-center">
      <div className="w-[700px] h-[150px] sm:my-0 sm:h-[240px] button-bg items-center flex flex-row justify-center">
        <button className="max-h-[80px] py-[8px] sm:py-[15px] text-white">
          <div className="flex flex-row items-center button-87 rounded-[20px]">
            <div className="bg-[#BFF3FA33] min-h-[15px] max-h-[80px] rounded-l-[20px] flex flex-row justify-center items-center h-[60px] px-[10px]">
              <Image src={key} className="h-[25px]" />
            </div>
            <p className="bg-[#44D3E7] h-[60px] text-center flex flex-row items-center rounded-r-[20px] px-[30px]">
              <span> Get Your Free Quote 🔑</span>
            </p>
          </div>
        </button>
      </div>
    </div>
  </div>
</div>

      </>
    </div>
  );
};

export default Home;
