import lineClamp from '@tailwindcss/line-clamp';
import scrollbarHide from 'tailwind-scrollbar-hide';

const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [lineClamp, scrollbarHide],
};

export default config;
