"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";

import Logo2 from '../../../../public/images/logo2.svg'
import Frequent from "../../../../public/images/Frequent.svg";

const FrequentlyAskedQuestions = () => {
  // FAQ data
  const faqs = [
    {
      question: "What is Plentytask?",
      answer:
        "Plentytask is a professional job connection platform designed to bring task posters and skilled taskers together. Whether you need help with a one-time task, ongoing work, or specialized projects, Quicktasker makes it easy to find reliable professionals. Our platform prioritizes trust, security, and professionalism, ensuring seam",
    },
    {
      question: "How does Plentytask ensure task completion?",
      answer:
        "Plentytask ensures task completion through our rating system, secure payment process, and dedicated support team that monitors all ongoing tasks. We also have dispute resolution procedures in place to resolve any issues that may arise.",
    },
    {
      question: "What kind of tasks can I post or complete?",
      answer:
        "You can post or complete a wide variety of tasks including but not limited to home services, delivery, virtual assistance, design work, writing, technical support, and more. Our platform supports both physical and virtual tasks.",
    },
    {
      question: "Do I need to download an app, or can I use the web version?",
      answer:
        "Both options are available! You can download our mobile app from the App Store or Google Play for a convenient on-the-go experience, or you can use the full-featured web version from any browser.",
    },
    {
      question: "Can I set a budget for my task?",
      answer:
        "Yes, you can set a budget for your task when creating it. You can either specify a fixed price you're willing to pay or provide an hourly rate. Taskers will then be able to see your budget and either accept it or make a counter-offer.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply create an account on Plentytask by signing up, then update your profile with your experience, skills, and location. With your profile complete, you'll be eligible to connect with clients and start accepting tasks immediately.",
    },
    {
      question: "What skills are required?",
      answer:
        "The skills required depend on the tasks you want to complete. Plentytask supports a wide range of services, from manual labor to professional services. You can list all your skills on your profile and only accept tasks that match your abilities.",
    },
    {
      question: "How do I get paid?",
      answer:
        "Once you complete a task, the client approves the completion, and the payment is released from escrow to your account. You can then withdraw funds to your bank account or other payment methods supported on our platform.",
    },
    {
      question: "Is there a registration or membership fee to become a tasker?",
      answer:
        "No, there are no registration or membership fees to become a tasker on Plentytask. We only take a small percentage of each completed task as our service fee.",
    },
    {
      question: "Can I set my own rates for tasks?",
      answer:
        "Yes, as a tasker you can set your own rates for the services you offer. You can either accept the client's proposed budget or make a counter-offer based on your expertise and the requirements of the task.",
    },
  ];

  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  // Toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Mobile Layout */}

        <div className="md:hidden">
          <div className=" flex justify-center mb-3">
            <Image src={Logo2.src} alt="Plentytask Logo" width={50} height={44} />
          </div>

          <h2 className="text-center text-xl md:text-3xl font-bold text-[#102952] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="border-b border-gray-200 mb-10"></div>
          <div className="space-y-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-[#102952] text-[12px] font-semibold">
                    {faq.question}
                  </span>
                  <span className="text-[#757d85] text-[12px] w-6 h-6 rounded-full border border-current flex items-center justify-center ">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="mt-2 text-[#757d85] text-[12px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex">
          <div className="w-[320px] lg:w-[463px] pr-8">
            <div className="mb-2 -ml-5">
              <Image src={Logo2.src} alt="Plentytask Logo" width={80} height={80} />
            </div>
            <h3 className="text-[30px] lg:text-[44px] font-medium text-[#102952] mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-[#757d85] text-[16px] lg:text-[20px] font-normal">
              We&#39;ve provided you answers to questions you might have about
              Plentytask.
            </p>
            <div className=" relative">
              <Image
                src={Frequent}
                alt="FAQ Illustration"
                layout="responsive"
              />
            </div>
          </div>

          <div className="w-2/3 pl-8">
            {faqs.slice(5, 10).map((faq, index) => (
              <div key={index + 5} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-6 text-left"
                  onClick={() => toggleFAQ(index + 5)}
                >
                  <span className="font-semibold text-[18px] lg:text-[24px] text-[#102952]">
                    {faq.question}
                  </span>
                  <span className="text-[#757d85] text-[16px] lg:text-[20px]">
                    {openFAQ === index + 5 ? "−" : "+"}
                  </span>
                </button>
                {openFAQ === index + 5 && (
                  <div className="pb-6 text-[#757d85] text-[16px] lg:text-[20px]">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
