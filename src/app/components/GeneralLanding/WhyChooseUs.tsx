'use client'

import React from "react";
import Image from "next/image";
import TaskDailyIcon from '../../../../public/images/arrow-up.svg'
import BriefCaseIcon from '../../../../public/images/briefcase.svg';
import SquareLockIcon from '../../../../public/images/chatbox.svg';
import StarIcon from '../../../../public/images/star.svg'
import CustomButton from "@app/components/Button/CustomButton";


const WhyChooseUs = () => {
  const benefits = [
    {
      icon: TaskDailyIcon,
      title: "Post a Task Daily",
      description: "Describe your task, set a budget, choose your location, and you're done in minutes.",
      gradient:
        "radial-gradient(circle at top left, #EBF2FF 0%, rgba(235, 242, 255, 0) 70%)",
    },
    {
      icon: BriefCaseIcon,
      title: "Find Trusted Taskers",
      description: "Get matched with skilled and reliable taskers near you or online ready to help fast.",
      gradient:
        "radial-gradient(circle at top left, #EBF2FF 0%, rgba(235, 242, 255, 0) 70%)",
    },
    {
      icon: SquareLockIcon,
      title: "Chat & Negotiate",
      description: "Message taskers directly to discuss details, negotiate price, and stay in control.",
      gradient:
        "radial-gradient(circle at top left, #EBFAEF 0%, rgba(235, 250, 239, 0) 70%)",
    },
    {
      icon: StarIcon,
      title: "Ratings & Reviews",
      description: "Choose the right tasker for your task through reviews and ratings from other users",
      gradient:
        "radial-gradient(circle at top left, #EBF2FF 0%, rgba(235, 242, 255, 0) 70%)",
    },
  ];


  const scrollToRegister = () => {
    const registerElement = document.getElementById("registerForm");
    if (registerElement) {
      registerElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
      <div className="w-full max-w-8xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2">
            <svg
              width={2}
              height={16}
              viewBox="0 0 2 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.9"
                y1="0.9"
                x2="0.9"
                y2="15.1"
                stroke="#0A65FC"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
  
            <p className="text-base font-medium text-[#102952]">Features</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mt-1">
            Why Choose Plentytask?
          </h2>
        </div>
  
         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-self-center mx-auto max-w-[95%] md:max-w-[90%] md:gap-6.5 lg:max-w-[1320px] lg:max-h-[296px]">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col p-2 sm:p-3 md:p-4 rounded-2xl border-[2px] border-white"
              style={{
                background: benefit.gradient,
                boxShadow: "0px 20px 28px 0 rgba(16, 41, 82, 0.08)",
              }}
            >
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <Image
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  width={40}
                  height={40}
                  className="w-12 h-12 sm:w-16 -ml-3 md:-ml-5 sm:h-16 md:w-20 md:h-20"
                />
                <h3 className="text-[12px] md:text-[18px] font-semibold text-[#102952]">
                  {benefit.title}
                </h3>
                <p className="text-[10px] sm:text-[12px]  md:text-[14px] lg:text-[16px] mb-3 text-[#757d85] font-normal text-left">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      <div className=" flex justify-center text-center mt-12">
        <CustomButton
          onClick={scrollToRegister}
          className="cursor-pointer items-center px-8 py-4 rounded-xl bg-[#0a65fc] text-white text-lg font-medium hover:bg-[#0954c7] transition-colors"
        >
          Join Waitlist
        </CustomButton>
      </div>
    </div>
  )
}

export default WhyChooseUs