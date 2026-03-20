"use client";

import CustomButton from "@app/components/Button/CustomButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import Tasker1 from "../../../../public/images/tasker1.svg";
import Tasker2 from "../../../../public/images/tasker2.svg";
import Tasker3 from "../../../../public/images/tasker3.svg";
import Tasker4 from "../../../../public/images/tasker4.svg";
import Tasker5 from "../../../../public/images/tasker5.svg";
import Tasker6 from "../../../../public/images/tasker6.svg";
import Tasker7 from "../../../../public/images/tasker7.svg";
import Tasker8 from "../../../../public/images/tasker8.svg";
import Tasker9 from "../../../../public/images/tasker9.svg";

const images = [
  Tasker1,
  Tasker2,
  Tasker3,
  Tasker4,
  Tasker5,
  Tasker6,
  Tasker7,
  Tasker8,
  Tasker9,
];

export const scrollToRegister = () => {
    const registerElement = document.getElementById("registerForm");
    if (registerElement) {
      registerElement.scrollIntoView({ behavior: "smooth" });
    }
   
  };

export default function HeroSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Tasker");

  const handleClick = () => {
    setActiveTab("Tasker");
    router.push("/TaskersLanding");
  };

  return (
    <section className="w-full pt-2 md:pt-4 lg:pt-6 pb-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        {/* Main Heading */}
        <div className="text-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#102952] leading-tight mb-4 md:mb-5">
            Get Anything <span className="block">Done.</span>
          </h1>
        </div>
        {/* Toggle Buttons - First Version */}
        <div className="flex items-center -mt-4 -mb-6 bg-white rounded-full p-1.5 shadow-lg border border-blue-100 w-[234px] h-[66px] md:w-[338px] md:h-[90px]">
          <Link href="/">
            <button
              onClick={() => setActiveTab("Poster")}
              className={`w-[109px] h-[50px] md:w-[161px] md:h-[74px] rounded-full text-[20px] md:text-[24px] lg:text-[32px] font-medium transition-all duration-300 ease-in-out ${
                activeTab === "Poster"
                  ? "bg-[#0a65fc]/20 text-white shadow-md"
                  : "text-[#757d85] hover:text-[#102952]"
              }`}
            >
              Poster
            </button>
          </Link>
          <Link href="#">
            <button
              onClick={handleClick}
              className={`w-[109px] h-[50px] md:w-[161px] md:h-[74px] rounded-full text-[20px] md:text-[24px] lg:text-[32px] font-medium transition-all duration-300 ease-in-out ${
                activeTab === "Tasker"
                  ? "bg-[#0a65fc]/10 text-[#102952] shadow-md border border-[#0a65fc]/20"
                  : "text-[#757d85] hover:text-[#102952]"
              }`}
            >
              Tasker
            </button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <p className="text-md lg:text-[24px] my-4">
            Got a skill or not, we have got Plentytasks waiting for you. Become
            your own boss!
          </p>
        </div>

        <div className=" flex text-center justify-center items-center -m-4">
            <div className="mt-4 flex items-center justify-center">
              <CustomButton onClick={scrollToRegister} className="px-8 py-3">Join Waitlist</CustomButton>
            </div>
          
        </div>

        <div className="lg:max-w-[937px] px-4 md:px-6">
          <div className="grid grid-cols-3 gap-1 md:gap-2 lg:gap-3">
            {images.map((src, index) => (
              <div
                key={index}
                className={`relative rounded-md overflow-hidden ${
                  index >= 3 && index <= 5
                    ? "translate-x-[-40px] sm:translate-x-[-50px] md:translate-x-[-70px] lg:translate-x-[-95px]"
                    : ""
                }`}
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={256}
                  height={256}
                  className="rounded-md object-cover
            w-[77px] h-[77px]
            sm:w-[137px] sm:h-[137px]
            md:w-[177px] md:h-[177px]
            lg:w-[217px] lg:h-[217px]
            xl:w-[256px] xl:h-[256px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
