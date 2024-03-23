/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors:{
        primary: "#909091",
        secondary: "#6C6C6B",
        dark: "#434343",
        light: "#B4B4B4",
        accent: "#ec7a1c"
      },
      boxShadow: {
        castom: "0 0 10px 1px rgba(0,0,0,0.5)"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require('@tailwindcss/typography')],
};


        // primary: "#808080",
        // secondary: "#535353",
        // dark: "#20110E",
        // light: "#ffffff",
        // accent: "#ec7a1c"