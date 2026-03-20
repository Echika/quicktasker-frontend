'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Task1 from '../../../../public/images/task1.svg';
import Task2 from '../../../../public/images/task2.svg';
import Task3 from '../../../../public/images/task3.svg';
import Task4 from '../../../../public/images/task4.svg';

const PopularTasks = [
  {
    id: 1,
    title: 'Marketing & Design',
    description: 'Help with website',
    image: Task1,
  },
  {
    id: 2,
    title: 'Furniture Assembly',
    description: 'Expert flat Assembly & Disassembly',
    image: Task2,
  },
  {
    id: 3,
    title: 'Home Cleaning',
    description: 'Sparkling Clean Homes',
    image: Task3,
  },
  {
    id: 4,
    title: 'Electrical Help',
    description: 'Help with electrical maintenance',
    image: Task4,
  },
];

const PopularTask = () => {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set initial window width and mark as client-side
    setWindowWidth(window.innerWidth);
    setIsClient(true);

    // Add event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full px-4 py-8 md:py-12 max-w-7xl mx-auto">
      {/* Header with title and description */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#102952]">Popular Tasks</h2>
        <p className="text-[#757D85] py-3 mt-1">See the type of tasks people are getting done</p>

        {/* Show All button on mobile and tablet only */}
        <div className="lg:hidden flex justify-end w-full">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 font-medium flex items-center"
          >
            {showAll ? 'Show Less' : 'See All'}
            <svg
              className="h-4 w-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Task cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {PopularTasks.map((task, index) => {
          // Only apply hiding logic after client-side hydration
          const isHidden = isClient && (
            (!showAll && index > 1 && windowWidth < 768) || // mobile >2
            (!showAll && index > 2 && windowWidth >= 768 && windowWidth < 1024) // tablet >3
          );

          return (
            <div
              key={task.id}
              className={`bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300
                ${isHidden ? 'hidden' : ''}`}
            >
              <div className="relative h-28 w-[171px] md:h-[150px] lg:h-[174px] lg:w-[327px] md:w-full mx-auto">
                <Image src={task.image} alt={task.title} fill className="object-cover" />
              </div>
              <div className="px-4 py-2">
                <h3 className="font-medium text-[16px] md:text-[20px] text-[#102952] text-center">
                  {task.title}
                </h3>
                <p className="text-[#757D85] py-2 mb-2 text-[12px] md:text-[16px] text-center">
                  {task.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Join Button */}
      <div className="flex justify-center mt-8">
        <Link
          href="/signup"
          className="bg-[#0a65fc]/80 hover:bg-[#0a65fc] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Join Waitlist
        </Link>
      </div>
    </div>
  );
};

export default PopularTask;