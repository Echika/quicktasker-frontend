"use client";

import React from "react";
import Hero from "./sections/Hero";
import EarnMoney from "./sections/EarnMoney";
import WhyBecomeATasker from "./sections/WhyBecomeATasker";
import FrequentlyAskedQuestions from "./sections/FrequentlyAskedQuestions";

import Register from "./sections/Register";
import Footer from "./sections/Footer";


const TaskersLanding = () => {
  return (
    <div className="w-full">
      <main className="w-full">
        {" "}
        <Hero />
        <WhyBecomeATasker />
        <EarnMoney />
        <FrequentlyAskedQuestions />
        <Register/>
        <Footer />
      </main>
    </div>
  );
};

export default TaskersLanding;
