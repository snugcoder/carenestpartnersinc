/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Adjust this if needed
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        text: '#120409',
        background: '#f4f5ff',
        primary: '#1f3883',
        secondary: '#ab65a2',
        accent: '#c4d399',
      },
    },
  },
  plugins: [],
};
