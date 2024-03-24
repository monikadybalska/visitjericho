import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inria-sans)"],
        serif: ["var(--font-inria-serif)"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        orange: {
          light: "#F8CCB6",
          DEFAULT: "#E5540B",
        },
        green: {
          light: "#008040",
          DEFAULT: "#F8CCB6",
        },
        yellow: {
          light: "#FFEAC2",
          DEFAULT: "#FFA900",
        },
        pink: {
          light: "#F7D9D6",
          DEFAULT: "#E59289",
        },
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
});
export default config;
