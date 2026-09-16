import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        accent: '#B8962E',
        dark: '#030303',
        secondary: '#121212',
        light: '#FFFFFF',
        muted: '#8A8A8A'
      },
    },
  },
  plugins: [],
};
export default config;
