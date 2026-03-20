"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import Testimonial1 from "../../../../public/assets/images/testimonial1.svg";
import Testimonial2 from "../../../../public/assets/images/testimonial2.svg";
import Testimonial3 from "../../../../public/assets/images/testimonial3.svg";

export default function Testimonials() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Check if screen is mobile or tablet
  useEffect(() => {
    const checkScreenSize = () => {
      // Changed from < 1024 to <= 1024 to include 1024px screens
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      image: Testimonial1,
      name: "Anita E., Lagos",
      text: "The furniture assembler arrived right on time and got my new wardrobe up in less than an hour. No stress, no haggling—just smooth service. I'll definitely be using Plentytask again!",
      category: "FURNITURE ASSEMBLY",
      position: { left: "72px", top: "221px" },
    },
    {
      id: 2,
      image: Testimonial2,
      name: "Seyi T., Abuja",
      text: "I hired a cleaner through Plentytask and my apartment looked brand new. She paid attention to every corner. The app made everything so easy—from booking to payment.",
      category: "Deep Cleaning",
      position: { left: "535px", top: "181px" },
      hasShadow: true,
    },
    {
      id: 3,
      image: Testimonial3,
      name: "Chuka O., Enugu",
      text: "As a small business owner, getting a professional logo within 48 hours was a game-changer. The designer was super responsive and understood my brand perfectly.",
      category: "Graphic Design (Logo)",
      position: { left: "998px", top: "221px" },
    },
    {
      id: 4,
      image: Testimonial3,
      name: "Halima M., Kano",
      text: "I needed an electrician urgently and found one on Plentytask within minutes. He fixed my wiring issue and even followed up the next day. Really impressed!",
      category: "Electrical Repairs",
      position: { left: "72px", top: "231px" },
    },
  ];

  // Star rating component
  const StarRating = () => (
    <div className="flex justify-end items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M9.07088 0.648363C9.41462 -0.216122 10.5854 -0.216121 10.9291 0.648365L12.9579 5.75071C13.1029 6.11516 13.4306 6.36417 13.8067 6.39571L19.0727 6.83732C19.9649 6.91215 20.3267 8.07684 19.6469 8.68594L15.6348 12.2809C15.3482 12.5378 15.223 12.9407 15.3106 13.3246L16.5363 18.6999C16.744 19.6106 15.7969 20.3305 15.033 19.8425L10.5245 16.9619C10.2025 16.7561 9.7975 16.7561 9.47548 16.9619L4.96699 19.8425C4.20311 20.3305 3.25596 19.6106 3.46363 18.6999L4.68942 13.3246C4.77698 12.9407 4.65182 12.5378 4.36526 12.2809L0.353062 8.68594C-0.326718 8.07684 0.0350679 6.91215 0.927291 6.83732L6.19336 6.39571C6.5695 6.36417 6.89716 6.11516 7.04207 5.75071L9.07088 0.648363Z"
            fill="#F9C934"
          />
        </svg>
      ))}
    </div>
  );

  interface TestimonialCardProp {
    image: string;
    name: string;
    text: string;
    category: string;
    style?: React.CSSProperties;
    hasShadow?: boolean;
  }
  // Testimonial card component (used for both mobile and desktop)
  const TestimonialCard = ({
    image,
    name,
    text,
    category,
    style = {},
    hasShadow = false,
  }: TestimonialCardProp) => {
    const boxShadow = hasShadow
      ? { boxShadow: "0px 28px 72px 0 rgba(16,41,82,0.07)" }
      : {};

    return (
      <div
        className="flex flex-col justify-start items-start overflow-hidden gap-6 p-4 rounded-lg bg-white"
        style={{
          ...style,
          ...boxShadow,
          width: isMobileOrTablet ? "100%" : "443px",
        }}
      >
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-3">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-3">
            <Image
              src={image}
              alt={name}
              className="flex-grow-0 flex-shrink-0"
              width={48}
              height={48}
              priority
            />
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-[#102952]">
              {name}
            </p>
          </div>
          <StarRating />
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-8">
          <p className="self-stretch flex-grow-0 flex-shrink-0 text-xl text-left text-[#757d85]">
            {text}
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left  text-[#757d85] uppercase">
            {category}
          </p>
        </div>
      </div>
    );
  };


  return (
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-[685px] relative overflow-hidden bg-[#f5f6f7]">
      {/* Header - same for both layouts */}
      <div className="flex flex-col justify-start items-center w-[668px] absolute left-1/2 transform -translate-x-1/2 top-16 gap-3">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
          <svg
            width={2}
            height={16}
            viewBox="0 0 2 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
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
          <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#102952]">
            Testimonials
          </p>
        </div>
        <h1 className="self-stretch flex-grow-0 flex-shrink-0 w-full sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          What People Are Saying about{" "}<br/> <span className="text-[#0a65fc]">Plentytask</span>
        </h1>{" "}
        
      </div>

      {isMobileOrTablet ? (
        <div className="w-full px-8  py-8 absolute top-48">
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              className="pb-12 px-6"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      ) : (
        <>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              style={{ position: "absolute", ...testimonial.position }}
              hasShadow={testimonial.hasShadow}
            />
          ))}
          
        </>
      )}
    </div>
  );
}