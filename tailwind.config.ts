import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveCar: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },

      },
      animation: {
        'car-move': 'moveCar 15s linear infinite',
      }
    }, screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'md2': '930px',
      'lg': '1024px',
      'lg2': '1120px',
      'xl': '1281px',
      '2xl': '1536px',
    }
  },

  plugins: [
    require('daisyui'),
  ],
};
export default config;
