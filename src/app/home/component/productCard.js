import React from "react";
import Image from "next/image";

const ProductCard = ({
  img,
  brand,
  bonus,
  name,
  price,
  shipping,
  productType,
}) => {
  return (
    <div>
      <div className=" max-w-[360px] lg:block hidden lg:max-w-[330px] xl:max-w-[360px] bg-white h-[460px] dark:bg-white rounded-[20px] shadow-2xl">
        <div className="relative">
          <div className="absolute w-[141px] left-3 top-3 font-bold text-[14px] rounded-lg text-center bg-[#F0F1FE] text-black py-[10px] px-[13px]">
            {productType}
          </div>
          <Image src={img} />
        </div>
        <div className="  p-[20px] ">
          <p className="text-[#696F9B] my-3">{brand}</p>
          {bonus != null && (
            <div className="my-[3px] text-[#219653] font-semibold max-w-[120px] text-[12px] px-[12px] py-[6px] bg-[#27AE601F] rounded-[8px] ">
              {bonus} store bonus
            </div>
          )}
          <p className="text-[22px] font-bold text-[#02043A] bg-white my-4">
            {name}
          </p>
          <p className="text-[#27AE60] font-bold">{price}</p>
          <p className="text-[#047AFF] font-bold">
            {shipping}
            <span className="text-[14px] text-[#696F9B]"> shipping</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
