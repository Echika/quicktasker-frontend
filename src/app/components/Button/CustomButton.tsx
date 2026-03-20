'use client';

import React from 'react';

// Define the props interface
interface CustomButtonProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'none';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = 'contained',
  onClick = () => {},
  disabled = false,
  className = '',
}) => {
  // Define base styles - allow width/height to be overridden by className
  const baseStyles = 'flex gap-[10px] rounded-[12px] font-medium focus:outline-none transition-colors duration-200 w-[149px] h-[44px] md:w-[195px] md:h-[59px] text-[12px] md:text-[20px] items-center justify-center';
  
  // Define styles based on the variant
  const variantStyles = {
    contained: 'bg-[#0a65fc] text-[#f5f9ff] hover:bg-[#0858e6] disabled:bg-gray-400 disabled:cursor-not-allowed',
    outlined: 'bg-[#f0f4ff] border border-[#0a65fc]/20 text-[#0a65fc] hover:bg-[#e6edff] disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed',
    none: 'bg-transparent disabled:opacity-50 disabled:cursor-not-allowed'
  };
  
  // Combine base styles, variant styles, and custom className
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;