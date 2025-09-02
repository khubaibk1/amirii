import React from "react";
import BagesAnimation from "@/component/IconAnimations/bages";
import DocAnimation from "@/component/IconAnimations/doc";
import RocketAnimation from "@/component/IconAnimations/rocket";
import TradingAnimation from "@/component/IconAnimations/trading";
import ScanAnimation from "@/component/IconAnimations/scan";
import TransportAnimation from "@/component/transportAnimation";

const Card = ({ image, heading, text, width }) => {
  return (
    <div>
      <div
        className={`min-h-[280px] sm:min-h-[300px] h-full ${
          width != null
            ? `    xll:w-[${width}] w-[450px]  xl:w-[300px]`
            : "w-full   lg:max-w-[300px] xl:max-w-[390px]"
        }  flex flex-col  items-center gap-1 sm:gap-3 rounded-[20px] dark:bg-[#FFFFFF1A] bg-white shadow-2xl dark:border-[2px] dark:border-[#FFFFFF1A] text-center relative overflow-hidden`}
        style={{
          backgroundImage: 'url(/images/darken.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dull overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[20px]"></div>
        
        {/* Content with relative positioning to appear above overlay */}
        <div className="relative z-10 w-full flex flex-col items-center gap-1 sm:gap-3">
          {/* <Image src={image}/> */}
          <div className="w-full flex flex-row justify-center items-center mt-3 sm:mt-5 sm:min-h-[80px] min-h-[100px] ">
            <div className="w-[80px] ">
              {image == "1" ? <BagesAnimation /> : ""}
              {image == "2" ? <DocAnimation /> : ""}
              {image == "3" ? <RocketAnimation /> : ""}
              {image == "4" ? <TradingAnimation /> : ""}
              {image == "5" ? <ScanAnimation /> : ""}
              {image == "6" ? <TransportAnimation /> : ""}
            </div>
          </div>

          <p className="text-[24px] dark:text-[#FFFFFF]    leading-[26px]  text-[#44D2E7] font-semibold md:font-bold  max-w-[320px] smm:max-w-[360px] sm:max-w-[580px] lg:max-w-[300px]">
            {heading}
          </p>
          <p
            className={
              "text-white dark:text-[#FFFFFF] p-[15px] sm:px-[10px] max-w-[320px]  smm:max-w-[360px] sm:max-w-[580px] lg:max-w-[360px]"
            }
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
