import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");

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
        "gradient-transparent-white":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
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
          DEFAULT: "#d04a0b",
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
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "slide-in": "slide-in 2s ease-in-out",
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities }: { matchUtilities: any }) => {
      matchUtilities({
        perspective: (value: any) => ({
          perspective: value,
        }),
      });
    }),
  ],
});
export default config;
