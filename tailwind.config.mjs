/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        foreground: "#333333",
        primary: "#FF7A00",
        "primary-foreground": "#FFFFFF",
        secondary: "#505050",
        "secondary-foreground": "#FFFFFF",
        card: "#FF7A0010",
        "card-foreground": "#54462C",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans"],
      montserrat: ["Montserrat", "sans"],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/typography"),
  ],
};
