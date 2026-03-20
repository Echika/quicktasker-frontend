'use client'

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CustomButton from "@app/components/Button/CustomButton";
import taskImage1 from "../../../../public/images/maintask1.svg";
import taskImage2 from "../../../../public/images/maintask2.svg";
import taskImage3 from "../../../../public/images/maintask3.svg";
import taskImage4 from "../../../../public/images/maintask4.svg";
import taskImage5 from "../../../../public/images/maintask5.svg";
import taskImage6 from "../../../../public/images/maintask6.svg";
import taskImage7 from "../../../../public/images/maintask7.svg";
import taskImage8 from "../../../../public/images/maintask8.svg";

const taskTypes = [
  { id: 1, image: taskImage1, alt: "A woman washing as a task" },
  { id: 2, image: taskImage2, alt: "A painter carrying out his task" },
  { id: 3, image: taskImage3, alt: "A home tutor carrying out her assigned task" },
  { id: 4, image: taskImage4, alt: "A mechanic working on a vehicle" },
];

const scrollToRegister = () => {
    const registerElement = document.getElementById("registerForm");
    if (registerElement) {
      registerElement.scrollIntoView({ behavior: "smooth" });
    }
   
  };
const taskTypesB = [
  { id: 5, image: taskImage5, alt: 'A man carrying out a task for someone using his laptop' },
  { id: 6, image: taskImage6, alt: 'A man carrying out a carpentry job for a client' },
  { id: 7, image: taskImage7, alt: 'A female electrical engineer' },
  { id: 8, image: taskImage8, alt: 'A tasker carrying out his assignment' }
];

const typeOfTask = ['Laundry?', 'Cleaning?', 'Painting?', 'Errands?', 'Car repairs?'];

const TasksType = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [currentSet, setCurrentSet] = useState(taskTypes);
  const [transitioning, setTransitioning] = useState(false);
  
  // Store previous set for smooth transition
  const prevSetRef = useRef(taskTypes);
  
  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Text cycling every 2 seconds
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % typeOfTask.length);
    }, 2000);
    
    return () => clearInterval(textInterval);
  }, []);

  // Image cycling every 5 seconds with smooth transition
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setTransitioning(true);
      
      // Smooth transition effect
      setTimeout(() => {
        setCurrentSet(prev => {
          prevSetRef.current = prev;
          return prev === taskTypes ? taskTypesB : taskTypes;
        });
        setTransitioning(false);
      }, 500); // Half-second transition
    }, 5000);
  
    return () => clearInterval(imageInterval);
  }, []);

  // Determine how many images to show based on screen size
  const getVisibleTasks = () => {
    if (!isClient) return taskTypes.slice(0, 3);
    
    if (windowWidth >= 1024) {
      return currentSet;
    } else {
      return currentSet.slice(0, 3);
    }
  };

  const visibleTasks = getVisibleTasks();
  const prevVisibleTasks = prevSetRef.current.slice(0, visibleTasks.length);
  const gridCols = isClient && windowWidth >= 1024 ? 'grid-cols-4' : 'grid-cols-3';

  return (
    <section className="w-full flex flex-col items-center justify-center py-2">
      {/* Header Section */}
      <div className="mb-6 lg:mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <h3 className="text-[#0a65fc] text-[16px] lg:text-[22px] bg-[#ebf2ff] mb-2.5 px-3 py-2 mr-1 rounded-4xl font-medium whitespace-nowrap">
            {typeOfTask[currentTextIndex]} {/* Fixed: Use currentTextIndex directly */}
          </h3>
          <p className="text-[16px] lg:text-[22px] text-center mb-2 leading-relaxed text-normal">
            Post it and watch others get it done for you while you focus on
            what matters most.
          </p>
        </div>
        <div className="flex my-4 items-center justify-center">
          <CustomButton  onClick={scrollToRegister} className="w-[69px] h-[16px] font-medium">Join Waitlist</CustomButton>
        </div>
      </div>

      {/* Images Grid with Transition */}
      <div className="w-[95%] flex justify-center">
        <div className={`grid ${gridCols} gap-2 lg:gap-5 w-full max-w-[380px] sm:max-w-4xl lg:max-w-[1500px]`}>
          {visibleTasks.map((task, index) => {
            const prevTask = prevVisibleTasks[index];
            return (
              <div key={`cell-${index}`} className="relative">
                {/* Previous image (fading out) */}
                {prevTask && (
                  <div className={`absolute inset-0 transition-opacity duration-500 ${transitioning ? 'opacity-100' : 'opacity-0'}`}>
                    <ImageContainer task={prevTask} />
                  </div>
                )}
                
                {/* Current image (fading in) */}
                <div className={`transition-opacity duration-500 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
                  <ImageContainer task={task} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TasksType;

// Extracted Image Container Component
import type { StaticImageData } from "next/image";

type TaskType = {
  id: number;
  image: StaticImageData;
  alt: string;
};

const ImageContainer = ({ task }: { task: TaskType }) => (
  <div className="relative group overflow-hidden aspect-[9/16] lg:aspect-auto lg:h-[560px] rounded-lg lg:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
    <Image
      src={task.image}
      alt={task.alt}
      fill
      className="object-cover transition-all duration-700 group-hover:scale-110 brightness-110 contrast-105 saturate-110"
      style={{ filter: 'brightness(1.1) contrast(1.05) saturate(1.1)' }}
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
  </div>
);

// Add custom shimmer animation styles
const shimmerStyles = `
  @keyframes shimmer {
    0% { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(300%) skewX(-12deg); }
  }
  
  .animate-shimmer {
    animation: shimmer 3s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = shimmerStyles;
  if (!document.head.querySelector('[data-shimmer-styles]')) {
    style.setAttribute('data-shimmer-styles', 'true');
    document.head.appendChild(style);
  }
}