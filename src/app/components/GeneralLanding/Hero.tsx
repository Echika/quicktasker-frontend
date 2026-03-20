"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Poster");

  // Sync tab state with current route
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("TaskersLanding")) {
      setActiveTab("Tasker");
    } else {
      setActiveTab("Poster");
    }
  }, []);

  interface HandleTabChange {
    (tabName: "Poster" | "Tasker"): void;
  }

  const handleTabChange: HandleTabChange = (tabName) => {
    if (tabName === activeTab) return;
    
    setActiveTab(tabName);
    
    // Use setTimeout to ensure UI updates before navigation
    setTimeout(() => {
      if (tabName === "Poster") {
        router.push("/GeneralLanding");
      } else {
        router.push("/TaskersLanding");
      }
    }, 0);
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

        <div className="flex items-center -mt-4 -mb-6 bg-white rounded-full p-1.5 shadow-lg border border-[#0a65fc]/20 w-[234px] h-[66px] md:w-[338px] md:h-[90px]">
          <button
            onClick={() => handleTabChange("Poster")}
            className={`w-[109px] h-[50px] md:w-[161px] md:h-[74px] rounded-full text-[20px] md:text-[24px] lg:text-[32px] font-medium transition-all duration-300 ease-in-out ${
              activeTab === "Poster"
                ? "bg-[#ebf2ff] text-[#102952] shadow-md border border-[#0a65fc]/20"
                : "text-[#757d85] hover:text-[#102952]"
            }`}
          >
            Poster
          </button>
          <button
            onClick={() => handleTabChange("Tasker")}
            className={`w-[109px] h-[50px] md:w-[161px] md:h-[74px] rounded-full text-[20px] md:text-[24px] lg:text-[32px] font-medium transition-all duration-300 ease-in-out ${
              activeTab === "Tasker"
                ? "bg-[#102952] text-white shadow-md"
                : "text-[#757d85] hover:text-[#102952]"
            }`}
          >
            Tasker
          </button>
        </div>
      </div>
    </section>
  );
}