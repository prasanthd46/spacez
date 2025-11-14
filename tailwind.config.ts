import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This lets us use 'font-lexend' and 'font-caslon'
        lexend: ["var(--font-lexend)", "sans-serif"],
        caslon: ["var(--font-caslon)", "serif"],
      },
      colors: {
        // This lets us use 'bg-primary', 'text-text-secondary', etc.
        primary: "#C16B3E",
        "text-primary": "#4B4E4B",
        "text-secondary": "#7D817D",
        "coupon-bg": "#FDF9F7",
        "coupon-border": "#AD6038",
        "text-copy": "#874B2C",
      },
    },
  },
  plugins: [],
};
export default config;