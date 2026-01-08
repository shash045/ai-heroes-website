/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // 'Space Grotesk' for headings to give that "Tech/Sci-Fi" feel
          sans: ['Inter', 'sans-serif'], 
          display: ['Space Grotesk', 'sans-serif'],
        },
        colors: {
          slate: {
            950: '#020617', // The Deep Marvel Black
          }
        },
        animation: {
          'gradient-x': 'gradient-x 15s ease infinite',
          'spin-slow': 'spin 8s linear infinite'
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center',
            },
          },
        },
      },
    },
    plugins: [],
  }

