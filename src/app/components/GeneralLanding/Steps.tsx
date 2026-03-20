import Image from "next/image";
import StepsBanner from "../../../../public/images/steps-banner.svg"

export default function Steps() {
  return (
    <div className="bg-[#102952]">
      {/* Mobile View (column layout) */}
      <div className="lg:hidden flex flex-col px-4 py-8 gap-8">
        {/* Post your first task section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-white">
            Post your first task and get a tasker in no{" "}
            <span className="text-[#f7d02d]">TIME.</span>
          </h1>
          <p className="text-lg text-white">
            Focus on things that matter while you get your tasks done by someone
            else.
          </p>
        </div>

        {/* Steps section */}
        <div className="bg-white rounded-2xl p-5 shadow-lg">
          <h2 className="text-xl font-semibold text-[#102952] mb-4">Steps:</h2>
          <div className="flex flex-col gap-4">
            {[
              "Post a Task: Share your needs and offer a fair price.",
              "Find a Tasker: Browse offers and choose the right person.",
              "Get It Done: Sit back and relax while your task gets completed.",
              "Rate & Review: Help build the community by sharing your experience.",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center justify-center h-7 w-7 rounded-xl bg-[#ebf2ff]">
                  <span className="text-sm font-medium text-[#102952]">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm text-[#102952]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image with floating cards */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/20">
          <Image
            src={StepsBanner}
            alt="Task illustration"
            className="object-cover"
            fill
            priority
          />

          {/* Need a cleaner card (top right) - SMALLER FOR MOBILE */}
          <div className="absolute top-3 right-3 md:w-[80%] w-full md:max-w-[260px] max-w-[192px] bg-white p-3 rounded-lg shadow-md">
            <p className="md:text-sm text-[8px] font-medium text-[#102952] mb-1">
              Need a cleaner to help clean my garden
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="md:text-xs text-[8px] text-[#969da3]">Budget: </span>
                <span className="md:text-base text-[8px] font-medium text-[#0a65fc]">
                  N10,000
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="md:text-xs text-[8px] text-[#969da3]">
                  Oworonshoki, Lagos
                </span>
                <LocationIcon size={16} />
              </div>
            </div>
          </div>

          {/* Need a laborer card (bottom left) - SMALLER FOR MOBILE */}
          <div className="absolute bottom-3 left-3 md:w-[80%] w-full md:max-w-[260px] max-w-[192px] bg-white p-3 rounded-lg shadow-md">
            <p className="md:text-sm text-[8px] font-medium text-[#102952] mb-1">
              Need a laborer to help with my building job
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="md:text-xs text-[8px] text-[#969da3]">Budget: </span>
                <span className="md:text-base text-[8px] font-medium text-[#0a65fc]">
                  N20,000
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="md:text-xs text-[8px] text-[#969da3]">Kuje, Abuja</span>
                <LocationIcon size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View (original layout) */}
      <div className="hidden lg:block relative h-[680px] overflow-hidden">
        <div className="container mx-auto h-full">
          <div className="absolute left-[72px] top-[57px] w-[597px] flex flex-col gap-3">
            <div className="flex flex-col gap-2 w-[412px]">
              <h1 className="text-[44px] font-semibold text-white">
                Post your first task and get a tasker <br />
                in no <span className="text-[#f7d02d]">TIME.</span>
              </h1>
              <p className="text-xl text-white">
                Focus on things that matter while you get your tasks done by
                someone else.
              </p>
            </div>


          </div>

          <Image
            src={StepsBanner}
            alt="Task illustration"
            className="absolute left-[620px] top-14 rounded-[20px]"
            width={820}
            height={568}
            priority
          />

            <div className="absolute bg-white rounded-2xl p-6 shadow-xl left-[71px] bottom-[50px] w-[601px] h-[290px]">
              <h2 className="text-[28px] font-semibold text-[#102952] mb-2">
                Steps:
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  "Post a Task: Share your needs and offer a fair price.",
                  "Find a Tasker: Browse offers and choose the right person.",
                  "Get It Done: Sit back and relax while your task gets completed.",
                  "Rate & Review: Help build the community by sharing your experience.",
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-8 w-8 rounded-2xl bg-[#ebf2ff]">
                      <span className="text-base font-medium text-[#102952]">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-base text-[#102952]">{text}</p>
                  </div>
                ))}
              </div>
            </div>

          {/* Desktop floating cards */}
          <div className="absolute left-[1124px] top-[84px] w-[360px] bg-white p-4 rounded-xl shadow-xl">
            <p className="font-medium text-[#102952] mb-2">
              Need a laborer to help with my building job
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#969da3]">Budget: </span>
                <span className="text-xl font-medium text-[#0a65fc]">
                  N20,000
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#969da3]">Kuje, Abuja</span>
                <LocationIcon />
              </div>
            </div>
          </div>

          <div className="absolute left-[431px] top-[154px] w-[360px] bg-white p-4 rounded-xl shadow-xl">
            <p className="font-medium text-[#102952] mb-2">
              Need a cleaner to help clean my garden
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#969da3]">Budget: </span>
                <span className="text-xl font-medium text-[#0a65fc]">
                  N10,000
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#969da3]">Oworonshoki, Lagos</span>
                <LocationIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type LocationIconProps = {
  size?: number;
};

function LocationIcon({ size = 20 }: LocationIconProps) {
  return (
    <svg
      width={size}
      height={size * 1.05}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
    >
      <path
        d="M11.3481 18.3058C10.9867 18.6441 10.5037 18.8333 10.0009 18.8333C9.49817 18.8333 9.01517 18.6441 8.65375 18.3058C5.34418 15.1883 0.908967 11.7057 3.07189 6.64968C4.24136 3.91593 7.04862 2.16663 10.0009 2.16663C12.9532 2.16663 15.7605 3.91593 16.93 6.64968C19.0902 11.6994 14.6658 15.199 11.3481 18.3058Z"
        stroke="#969DA3"
        strokeWidth="1.25"
      />
      <path
        d="M12.9167 9.66667C12.9167 11.2775 11.6108 12.5833 10 12.5833C8.38917 12.5833 7.08333 11.2775 7.08333 9.66667C7.08333 8.05583 8.38917 6.75 10 6.75C11.6108 6.75 12.9167 8.05583 12.9167 9.66667Z"
        stroke="#969DA3"
        strokeWidth="1.25"
      />
    </svg>
  );
}
