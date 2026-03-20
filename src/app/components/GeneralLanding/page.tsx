import React from "react";
import Hero from "./Hero";
import Steps from "./Steps";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import FrequentlyAskedQuestions from "../../TaskersLanding/sections/FrequentlyAskedQuestions";
import Register from '../../TaskersLanding/sections/Register';
import Footer from '../../TaskersLanding/sections/Footer'
import PopularTask from "../../components/GeneralLanding/PopularTask"
import TasksType from "../../components/GeneralLanding/TasksType";

const MainLanding = () => {
  return (
    <div className="w-full">
      <main className="w-full">
        <Hero />
        <TasksType/>
        <WhyChooseUs />
        <Steps />
        <Testimonials />
        <FrequentlyAskedQuestions />
        <PopularTask />
        <Register />
        <Footer />
      </main>
    </div>
  );
};

export default MainLanding;
