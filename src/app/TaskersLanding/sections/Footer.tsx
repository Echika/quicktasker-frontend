import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import CustomButton from "@app/components/Button/CustomButton";
import { scrollToRegister } from "./Hero";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f5f6]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Contact Info Column */}
          <div className="mb-8 md:mb-0">
            <div className="flex flex-col space-y-4">
              <Image src={Logo} width={160} height={91} alt="Plentytask logo" className="-ml-5"/>

              <div className="flex flex-col lg:flex-row gap-8">
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <p className="text-gray-400 text-xs">Send us an email</p>
                  <a
                    href="mailto:contact@plentytask.com"
                    className="text-blue-400 hover:text-blue-500"
                  >
                    contact@plentytask.com
                  </a>
                </div>

                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <p className="text-gray-400 text-xs">Call us</p>
                  <a
                    href="tel:+2345566677888"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    +234 5566677888
                  </a>
                </div>
              </div>

              {/* Social Media Icons - Show on desktop only */}
              <div className="hidden md:flex items-center space-x-8">
                {/* X (Twitter) Icon - Stylized bold X */}
                <a 
                  href="https://twitter.com/plentytask" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-gray-600"
                  >
                    <path 
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* Divider */}
                <div className="w-px h-8 bg-gray-500"></div>

                {/* Instagram Icon */}
                <a 
                  href="https://instagram.com/plentytask" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-gray-600"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </a>

                {/* Divider */}
                <div className="w-px h-8 bg-gray-500"></div>

                {/* TikTok Icon */}
                <a 
                  href="https://tiktok.com/@plentytask" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
                >
                  <svg 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-gray-600"
                  >
                    <path 
                      d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.948-1.316-2.158-1.316-3.338h-2.53v13.367a3.298 3.298 0 0 1-3.294 3.295c-1.818 0-3.295-1.477-3.295-3.295 0-1.818 1.477-3.294 3.295-3.294.339 0 .668.052.978.148v-2.596a5.85 5.85 0 0 0-.978-.083c-3.273 0-5.927 2.654-5.927 5.927 0 3.272 2.654 5.926 5.927 5.926 3.272 0 5.926-2.654 5.926-5.926V8.818a8.786 8.786 0 0 0 4.994 1.563V7.752c-.91 0-1.774-.255-2.5-.68-.399-.233-.762-.507-1.076-.823-.262-.264-.495-.556-.696-.875z" 
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Join Community Column */}
          <div className="md:text-left">
            <h2 className="text-2xl md:text-xl font-bold mb-2 text-[#102952]">
              Join Plentytask Community!
            </h2>
            <p className="text-gray-400 mb-6 text-sm  md:text-md lg:text-lg">
              Connecting people to get tasks done easier and faster
            </p>

            <div className="flex justify-start md:justify-start">
              <div className="mt-4 flex items-center justify-center">
              <CustomButton onClick={scrollToRegister} className="px-8 py-3">Join Waitlist</CustomButton>
            </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Show on mobile only, positioned after community section */}
        <div className="md:hidden flex items-center justify-start space-x-8 mt-8">
          {/* X (Twitter) Icon - Stylized bold X */}
          <a 
            href="https://twitter.com/plentytask" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-600"
            >
              <path 
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-500"></div>

          {/* Instagram Icon */}
          <a 
            href="https://instagram.com/plentytask" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-600"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-500"></div>

          {/* TikTok Icon */}
          <a 
            href="https://tiktok.com/@plentytask" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-600"
            >
              <path 
                d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.948-1.316-2.158-1.316-3.338h-2.53v13.367a3.298 3.298 0 0 1-3.294 3.295c-1.818 0-3.295-1.477-3.295-3.295 0-1.818 1.477-3.294 3.295-3.294.339 0 .668.052.978.148v-2.596a5.85 5.85 0 0 0-.978-.083c-3.273 0-5.927 2.654-5.927 5.927 0 3.272 2.654 5.926 5.927 5.926 3.272 0 5.926-2.654 5.926-5.926V8.818a8.786 8.786 0 0 0 4.994 1.563V7.752c-.91 0-1.774-.255-2.5-.68-.399-.233-.762-.507-1.076-.823-.262-.264-.495-.556-.696-.875z" 
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="md:border-t md:border-gray-800 md:bg-gray-800 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            2025 Plentytask. All rights reserved.
          </div>
          <div className="flex-wrap gap-4 mt-4 sm:mt-0 md:block hidden">
            <Link
              href="#"
              className="px-2 text-gray-400 text-sm hover:text-white"
            >
              Terms & Condition
            </Link>
            <Link
              href="#"
              className="px-2 text-gray-400 text-sm hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="px-2 text-gray-400 text-sm hover:text-white"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}