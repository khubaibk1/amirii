"use client"
import React, { useRef, useEffect, useState } from "react";
import MembershipSlider from './membershipSlider'
import Card1 from "../../../../public/images/home/card1.svg"
import membership1 from "../../../../public/images/home/membership1.svg"
import circle1 from "../../../../public/images/home/circle-1.svg"
import circle2 from "../../../../public/images/home/circle-2.svg"
import starTick from "../../../../public/images/home/star-tick.svg"
import cardIcon from "../../../../public/images/home/card-icon.svg"
import giftIcon from "../../../../public/images/home/gift-icon.svg"
import peopleIcon from "../../../../public/images/home/people-icon.svg"
import buyCart from "../../../../public/images/home/buy-cart.svg"
import Image from "next/image";


const MembershipModel = ({ isOpen, onClose }) => {
    const [selectedTab, setSelectedTab] = useState("card");
    const modalRef = useRef(null);

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
            className={`fixed z-[999] top-0  left-0  w-full px-5 h-full   bg-black bg-opacity-50 flex justify-center items-center ${isOpen ? "" : "hidden"
                } `}
        >   
            <div
                ref={modalRef}
                className="  custom-scrollbar dark:bg-[#02043a] px-10 max-h-[95vh] overflow-y-scroll   overflow-x-hidden  text-white max-w-[1300px] mx-auto rounded-[20px] justify-center items-center  shadow-md "
            >
                <div className="flex items-center justify-end dark:bg-[#02043a] w-full h-full sm:ml-0 ml-7 pt-[10px]  ">
                    
                <svg onClick={onClose}  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="#E9E9EE"/>
<path d="M12 24L24 12M12 12L24 24" stroke="#02043A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                </div>
               
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[#02043A] dark:text-white leading-9 md:leading-normal  text-[30px]  md:text-[48px] font-bold pt-5'>Sellvia Membership</p>
                    <p className='text-[#696F9B] dark:text-[#A9ADC6] text-[17px] md:text-[20px] max-w-[830px] my-10 text-center'>Join Sellvia's Sales Affiliate Program today and together, let's drive sales up and divide the revenue. Let's team up for success!</p>
                </div>
                <div>
                 
                        <MembershipSlider/>
                 

                    <p className=" text-[#02043A] font-bold  text-[20px]  text-center">Sellvia Deluxe</p>
                </div>

<div className="flex flex-row justify-center items-center">
                <div className='grid grid-cols-1 gap-5   md:grid-cols-2 xl:grid-cols-4 my-10 justify-between'>
                    <div className='w-[260px] dark:bg-[#FFFFFF1F] rounded-[20px] dark:text-white bg-white h-[442px]  shadow-xl'>
                    <div className='v-bg rounded-[20px] relative'>
                        <div className="absolute right-0"><Image src={circle1} className="rounded-tr-[22px]" /></div>
                        <div className="absolute right-0"   ><Image src={circle2} className="rounded-tr-[22px]"/></div>

                        <div className="box-bg-member">
                        <div className='pt-10 pb-6  flex flex-row justify-center'>
                        <Image src={membership1}/>
                        </div>

                        <div className='flex flex-col gap-1 px-[20px] pb-[20px]'>
                            <p className='text-[20px] pb-3 text-center dark:text-[#FFFFFF] text-[#02043A] font-bold' >Overview</p>
                            <div className=''>
                                <p className='text-[12px]  mb-[3px] dark:text-[#A3A7C2] text-[#696F9B]'>Opening Balance:</p>
                                <p  className='text-[14px] dark:text-[#FFFFFF] text-[#02043A] font-bold'>$100+</p>
                            </div>
                            <div className=''>
                                <p className='text-[12px]  mb-[3px] dark:text-[#A3A7C2] text-[#696F9B]'>Transaction Weekly Milestones:</p>
                                <p  className='text-[14px] dark:text-[#FFFFFF] text-[#02043A] font-bold'>$25,000+</p>
                            </div>
                            <div className=''>
                                <p className='text-[12px]  mb-[3px] dark:text-[#A3A7C2] text-[#696F9B]'>Revenue Share:</p>
                                <p  className='text-[14px] dark:text-[#FFFFFF] text-[#02043A] font-bold'>Starting at 5% Weekly</p>
                            </div>
                            <div className=''>
                                <p className='text-[12px] mb-[3px] dark:text-[#A3A7C2] text-[#696F9B]'>Weekly Affiliate Share:</p>
                                <p  className='text-[14px] dark:text-[#FFFFFF] text-[#02043A] font-bold'>$1,250+</p>
                            </div>
                            <div className=''>
                                <p className='text-[12px] mb-[3px]  dark:text-[#A3A7C2] text-[#696F9B]'>Monthly Affiliate Share:</p>
                                <p  className='text-[14px] dark:text-[#FFFFFF] text-[#02043A] font-bold'>$5,000</p>
                            </div>
                        </div>


                    </div>
                        </div>
                    </div>



                    <div className='w-[260px] dark:bg-[#FFFFFF1F] bg-white h-[442px] rounded-[20px] shadow-xl'>
                    <div className='v-bg relative h-full'>
                        <div className="absolute right-0"><Image src={circle1} className="rounded-tr-[22px]"/></div>
                        <div className="absolute right-0"><Image src={circle2} className="rounded-tr-[22px]"/></div>
                        <div className="box-bg-member h-full">
                        <div className='pt-10 pb-6 flex flex-row justify-center'>
                        <Image src={cardIcon}/>
                        </div>
                        <div className='flex flex-col gap-1 px-[20px] pb-[20px] dark:text-white text-[#02043A]'>
                            <p className='text-[20px] text-center dark:text-white text-[#02043A] font-bold pb-3'>Card Features</p>
                            <div className='flex flex-row text-[14px] gap-3'>
                                <Image src={starTick}/>
                                <p>Essential platform access</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Limited, product distribution.</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Responsive Customer Support.</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Simplified Analytics for Insight</p>
                            </div>

                        </div>
                    </div>
                        </div>
                    </div>

                    <div className='w-[260px] dark:bg-[#FFFFFF1F] bg-white h-[442px] rounded-[20px] shadow-xl'>
                    <div className='v-bg relative h-full'>
                        <div className="absolute right-0"><Image src={circle1} className="rounded-tr-[22px]"/></div>
                        <div className="absolute right-0"><Image src={circle2} className="rounded-tr-[22px]"/></div>
                        <div className="box-bg-member h-full">

                        <div className='pt-10 pb-6 flex flex-row justify-center'>
                        <Image src={giftIcon}/>
                        </div>
                        <div className='flex flex-col gap-1 px-[20px] dark:text-white text-[#02043A] pb-[20px]'>
                            <p className='text-[20px] text-center dark:text-white text-[#02043A] font-bold pb-3' >Benefits</p>
                            <div className='flex flex-row text-[14px] gap-3'>
                                <Image src={starTick}/>
                                <p>Budget-friendly starting pricing.</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Simple transaction milestone targets.</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Ideal for beginners.</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Bonus and rewards applicable.</p>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>



                    <div className='w-[260px] bg-white h-[442px] rounded-[20px] shadow-xl'>
                    <div className='blue-bg-member h-full'>
                        
                       

                        <div className='py-10 flex flex-row justify-center'>
                        <Image src={peopleIcon}/>
                        </div>

                        <div className='flex flex-col gap-1 px-[20px] text-white pb-[20px]'>
                            <p className='text-[20px] text-center font-bold' >Target Stores</p>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Fashion Boutiques</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Electronic and Gatgets shop</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Toy and Hobbies Stores.</p>
                            </div>
                            <div className='flex flex-row  gap-3'>
                                <Image src={starTick}/>
                                <p>Jewellery and Accessories Boutiques.</p>
                            </div>

                            <button className='mx-auto mt-3 max-w-[200px] px-[24px] py-[10px] min-h-[40px] rounded-lg affiliate-btn text-white items-center flex flex-row gap-2 '>
                            <Image src={buyCart}/>
                            <p>GET STARTED</p>
                         </button>

                        </div>


                    
                        </div>
                    </div>



                </div>
                </div>


            </div>

            
        </div>
    );
};

export default MembershipModel;
