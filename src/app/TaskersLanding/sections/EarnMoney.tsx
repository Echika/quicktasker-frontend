import React from 'react';
import Image from 'next/image';

// Import your images
import Step1Image from "../../../../public/images/Step1Image.svg"
import Step2Image from '../../../../public/images/Step2Image.png';
import Step3Image from '../../../../public/images/Step3Image.svg';
import Step4Image from '../../../../public/images/Step4Image.svg'
import { scrollToRegister } from './Hero';

const EarnMoney = () => {
  const steps = [
    {
      id: "01",
      title: "Sign Up.",
      description: "Create your profile and list your skills.",
      image: Step1Image,
    },
    {
      id: "02",
      title: "Search for Tasks.",
      description: "Find tasks near you or remote jobs.",
      image: Step2Image,
    },
    {
      id: "03",
      title: "Make an offer.",
      description: "Negotiate and agree on terms with clients.",
      image: Step3Image,
    },
    {
      id: "04",
      title: "Earn money.",
      description: "Complete the task and get paid securely.",
      image: Step4Image,
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-blue-900 mb-1">
            Start earning money with your skill in no <span className="text-blue-600">TIME.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto sm:text-sm md:text-lg">
            {/* Mobile text */}
            <span className="md:hidden text-xs ">
              Focus on things that matter while you get your tasks done by someone else.
            </span>
            {/* Desktop text */}
            <span className="hidden md:inline text-[#757085]">
              Access hundreds of jobs in your city and choose when and how you want to work!
            </span>
          </p>
        </div>

        {/* Mobile Layout with alternating image positions */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-4 mb-4 flex flex-row items-center"
            >
              {/* For even indices (0, 2), show number on left, image on right */}
              {index % 2 === 0 ? (
                <>
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center">
                      <div className="text-2xl font-bold text-blue-900 mr-2">
                        {step.id}
                      </div>
                      <div className="h-12 w-1 bg-blue-600"></div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2 text-[#102952]">{step.title}</h3>
                    <p className="text-[#757d85] text-sm">{step.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 w-24 h-24 relative ml-2">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </>
              ) : (
                /* For odd indices (1, 3), show image on left, number on right */
                <>
                  <div className="flex-shrink-0 w-24 h-24 relative mr-2">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold mb-2 text-[#102952]">{step.title}</h3>
                    <p className="text-[#757d85] text-sm">{step.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 ml-4">
                    <div className="flex items-center">
                      <div className="h-12 w-1 bg-blue-600 mr-2"></div>
                      <div className="text-2xl font-bold text-blue-900">
                        {step.id}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout - Updated to match the design */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 mt-12">
            {/* Left column */}
            <div className="space-y-16">
              {/* Step 1 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-3xl font-bold text-blue-900 mr-2">
                    {steps[0].id}
                  </div>
                  <div className="h-12 w-1 bg-blue-600"></div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-1">{steps[0].title}</h3>
                <p className="text-gray-600 mb-4">{steps[0].description}</p>
                <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={steps[0].image}
                    alt={steps[0].title}
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
              
              {/* Step 3 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-3xl font-bold text-blue-900 mr-2">
                    {steps[2].id}
                  </div>
                  <div className="h-12 w-1 bg-blue-600"></div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-1">{steps[2].title}</h3>
                <p className="text-gray-600 mb-4">{steps[2].description}</p>
                <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={steps[2].image}
                    alt={steps[2].title}
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Right column */}
            {/* Right column */}
<div className="space-y-16">
  {/* Step 2 */}
  <div>
    <div className="flex items-center justify-end mb-4">
      {/* Change this part - switch the order */}
      <div className="text-3xl font-bold text-blue-900 mr-2">
        {steps[1].id}
      </div>
      <div className="h-12 w-1 bg-blue-600"></div>
    </div>
    <h3 className="text-xl font-semibold text-blue-900 mb-1 text-right">{steps[1].title}</h3>
    <p className="text-gray-600 mb-4 text-right">{steps[1].description}</p>
    <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-md">
      <Image
        src={steps[1].image}
        alt={steps[1].title}
        fill
        objectFit="cover"
      />
    </div>
  </div>
  
  {/* Step 4 */}
  <div>
    <div className="flex items-center justify-end mb-4">
      {/* Change this part too - switch the order */}
      <div className="text-3xl font-bold text-blue-900 mr-2">
        {steps[3].id}
      </div>
      <div className="h-12 w-1 bg-blue-600"></div>
    </div>
    <h3 className="text-xl font-semibold text-blue-900 mb-1 text-right">{steps[3].title}</h3>
    <p className="text-gray-600 mb-4 text-right">{steps[3].description}</p>
    <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-md">
      <Image
        src={steps[3].image}
        alt={steps[3].title}
        fill
        objectFit="cover"
      />
    </div>
  </div>
</div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
        
            <button onClick={scrollToRegister} className="cursor-pointer px-6 py-4 rounded-xl bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition-colors">
              {/* Different text for mobile/desktop */}
              <span className="md:hidden">Join Plentytask</span>
              <span className="hidden md:inline">Become a Tasker</span>
            </button>
       
        </div>
      </div>
    </section>
  );
};

export default EarnMoney;