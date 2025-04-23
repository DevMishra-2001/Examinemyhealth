/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateCircle: {
          // '0%': {transform: 'rotate(0deg) translateX(100px) rotate(0deg)'},
          // '100%': {transform: 'rotate(360deg) translateX(100px) rotate(-360deg)'},
           '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slowBounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.2, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 0.1)',
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        // fadeIn: {
        //   '0%': { opacity: 0 },
        //   '100%': { opacity: 1 },
        // },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        rotateCircle: 'rotateCircle 10s linear infinite',
        slowBounce: 'slowBounce 12s infinite',
        "slide-in-left": 'slide-in-left 0.7s ease-out forwards',
        "slide-in-right": 'slide-in-right 0.7s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}