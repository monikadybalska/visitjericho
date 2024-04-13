import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
        current: "currentColor",
        white: "#FFFFFF",
        black: "#000000",
        orange: {
          light: "#F8CCB6",
          DEFAULT: "#E5540B",
        },
        green: {
          light: "#B8DCCA",
          DEFAULT: "#008040",
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
      // screens: {
      //   "3xl": "2000px",
      // },
    },
  },
  plugins: [],
});
export default config;
