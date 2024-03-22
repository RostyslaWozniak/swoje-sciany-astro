/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors:{
        primary: "#7a7979",
        secondary: "#bcbcbc",
        dark: "#281e32",
        light: "#ffffff",
        accent: "#F1573B"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require('@tailwindcss/typography')],
};


