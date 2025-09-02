"use client";
import React, { useRef, useEffect, useState } from "react";
import greenTick from "../../../../public/images/home/green-tick.svg";
import downloadIcon from "../../../../public/images/home/download-icon.svg";
import book from "../../../../public/images/home/E-Book.svg";
import curve from "../../../../public/images/home/Book-bg-curve.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useVisibleAnimation } from "@/component/useVisibleAnimation";

const BookModel = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState("card");
  const [modalRef, , , , , , , rotate10] = useVisibleAnimation();

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed z-[999] top-0  left-0  w-full px-5 h-full  bg-black bg-opacity-50 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      } `}
    >
      <motion.div
        ref={modalRef}
        className=" bg-white custom-scrollbar dark:bg-[#02043a] px-10  relative   text-white max-w-[1300px] mx-auto rounded-[32px] justify-center items-center  shadow-md "
        initial={{ scale: 0.3 }}
        animate={rotate10}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 4,
        }}
      >
        <div className="absolute bottom-0">
          <Image src={curve} />
        </div>
        <div className="flex items-center  justify-end dark:bg-[#02043a] w-full h-auto pt-[15px]  ">
          <svg
            onClick={onClose}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="18" fill="#E9E9EE" />
            <path
              d="M12 24L24 12M12 12L24 24"
              stroke="#02043A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <div>
            <div className="max-w-[1300px] px-4 mx-auto mb-[60px] lg:mb-32">
              <div className="flex flex-col lg:gap-0 gap-4  lg:flex-row   items-center">
                <div>
                  <Image src={book} className="w-[80%]" />
                </div>

                <div className="flex flex-col gap-10">
                  <p className="text-[28px] smm:text-[36px] lg:text-[48px] font-semibold smm:font-bold text-[#02043A] sm:leading-normal leading-[40px] dark:text-white">
                    Insights into Sellvia Business
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row gap-2">
                      <Image src={greenTick} />
                      <p className="text-[#02043A] dark:text-white font-medium smm:font-bold">
                        Why Partner With Us
                      </p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Image src={greenTick} />
                      <p className="text-[#02043A] dark:text-white font-medium smm:font-bold">
                        Work With Us ( Join Our Affiliate Network )
                      </p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Image src={greenTick} />
                      <p className="text-[#02043A] dark:text-white font-medium smm:font-bold">
                        Our Assurance
                      </p>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Image src={greenTick} />
                      <p className="text-[#02043A] dark:text-white font-medium smm:font-bold">
                        Get Started
                      </p>
                    </div>
                  </div>

                  <button className="max-w-[200px] px-[24px] button-87 py-[10px] min-h-[40px] rounded-lg affiliate-btn text-white items-center flex flex-row gap-2 ">
                    <Image src={downloadIcon} />
                    <p>Download Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookModel;
