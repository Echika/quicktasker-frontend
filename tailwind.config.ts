import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "custom-blue": "#102952",
        secondary: "var(--secondary)",
        "custom-light-blue": "#F1F5FD",
        "heading": "#102952",
        "text": "#757d85",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"], // DM Sans as default
        bricolage: ["var(--font-bricolage)", "sans-serif"], // Bricolage for headings
      },
    },
  },
  plugins: [
    // Custom plugin to add base styles for headings and body text
    function({ addBase }: { addBase: any }) {
      addBase({
        // Headings styles
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'var(--font-bricolage), sans-serif',
          color: '#102952',
        },
        // Body text styles - removed span from here
        'body, p, div, a, li, td, th': {
          fontFamily: 'var(--font-dm-sans), sans-serif',
          color: '#757d85',
        },
        // Make span inherit from parent
        'span': {
          fontFamily: 'inherit',
          color: 'inherit',
        },
        // Ensure buttons and inputs inherit appropriate styling
        'button, input, textarea, select': {
          fontFamily: 'var(--font-dm-sans), sans-serif',
          color: '#757d85'
        }
      });
    }
  ],
} satisfies Config;