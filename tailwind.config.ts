import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2.5xl": "1680px", // Custom breakpoint for screens wider than 1680px
        "3xl": "1920px", // Custom breakpoint for screens wider than 1920px
        "3.5xl": "2600px", // Custom breakpoint for "3.5xl"
      },
    },
  },
  plugins: [],
};

export default config;
