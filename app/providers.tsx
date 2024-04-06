"use client";

import { ThemeProvider } from "@material-tailwind/react";
const theme = {
  navbar: {
    styles: {
      base: {
        navbar: {
          initial: {
            display: "block",
            width: "w-full",
            maxWidth: "max-w-screen-2xl",
            borderRadius: "rounded-xl",
            py: "py-4",
            px: "px-8",
          },
          shadow: {
            boxShadow: "shadow-none sm:shadow-nmd lg:shadow-none",
          },
          blurred: {
            backdropFilter: "backdrop-saturate-200 backdrop-blur-2xl",
            bgOpacity: "bg-opacity-80",
            borderWidth: "border",
            borderColor: "border-white/80",
          },
          fullWidth: {
            width: "w-full",
            maxWidth: "max-w-full",
            rounded: "rounded-none",
            px: "px-4",
          },
        },
        mobileNav: {
          display: "block",
          width: "w-full",
          basis: "basis-full",
          overflow: "overflow-hidden",
        },
      },
    },
  },
  list: {
    defaultProps: {
      ripple: true,
      className: "",
    },
    styles: {
      base: {
        list: {
          display: "flex",
          flexDirection: "flex-col",
          gap: "gap-1",
          minWidth: "min-w-[240px]",
          p: "p-2",
          fontFamily: "font-sans",
          fontSize: "text-base",
          fontWeight: "font-medium",
          color: "text-black",
        },
        item: {
          initial: {
            display: "flex",
            alignItems: "items-center",
            width: "w-full",
            padding: "p-3",
            borderRadius: "rounded-lg",
            textAlign: "text-start",
            lightHeight: "leading-tight",
            transition: "transition-all",
            bg: "hover:bg-white hover:bg-opacity-100 focus:bg-white focus:bg-opacity-100 active:bg-white active:bg-opacity-100",
            color: "hover:text-orange focus:text-orange active:text-orange",
            outline: "outline-none",
          },
          selected: {
            bg: "bg-white",
            color: "text-orange",
          },
          disabled: {
            opacity: "opacity-50",
            cursor: "cursor-not-allowed",
            pointerEvents: "pointer-events-none",
            userSelect: "select-none",
            bg: "hover:bg-transparent focus:bg-transparent active:bg-transparent",
            color:
              "hover:text-blue-gray-500 focus:text-blue-gray-500 active:text-blue-gray-500",
          },
        },
        itemPrefix: {
          display: "grid",
          placeItems: "place-items-center",
          marginRight: "mr-4",
        },
        itemSuffix: {
          display: "grid",
          placeItems: "place-items-center",
          marginRight: "ml-auto justify-self-end",
        },
      },
    },
  },
  button: {
    defaultProps: {
      variant: "filled",
      size: "sm",
      color: "orange",
      fullWidth: false,
      ripple: true,
      className: "",
    },
    valid: {
      variants: ["filled", "outlined", "text", "icon"],
      sizes: ["sm", "md", "lg"],
      colors: ["orange"],
    },
    styles: {
      base: {
        initial: {
          verticalAlign: "align-middle",
          userSelect: "select-none",
          fontFamily: "font-sans",
          fontWeight: "font-bold",
          textAlign: "text-center",
          textTransform: "uppercase",
          transition: "transition-all",
          disabled:
            "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
        },
        fullWidth: {
          display: "block",
          width: "w-full",
        },
      },
      sizes: {
        sm: {
          fontSize: "text-sm",
          py: "py-2",
          px: "px-4",
          borderRadius: "rounded-lg",
        },
        md: {
          fontSize: "text-base",
          py: "py-2",
          px: "px-4",
          borderRadius: "rounded-lg",
        },
        lg: {
          fontSize: "text-lg",
          py: "py-3.5",
          px: "px-7",
          borderRadius: "rounded-lg",
        },
      },
      variants: {
        filled: {
          orange: {
            backgroud: "bg-orange",
            color: "text-white",
            shadow: "shadow-none",
            hover: "hover:shadow-none",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
          },
        },
        outlined: {
          white: {
            border: "border border-white",
            color: "text-white",
            hover: "hover:opacity-75",
            focus: "focus:ring focus:ring-white/50",
            active: "active:opacity-[0.85]",
          },
          orange: {
            backgroud: "bg-white",
            border: "border border-orange",
            color: "text-orange",
            shadow: "shadow-none",
            hover: "hover:shadow-none",
            focus: "focus:opacity-[0.85] focus:shadow-none",
            active: "active:opacity-[0.85] active:shadow-none",
          },
        },
        text: {
          black: {
            color: "text-black",
            hover: "hover:underline hover:bg-transparent",
            active: "active:bg-transparent",
          },
        },
        icon: {
          yellow: {
            backgroud: "bg-yellow-light",
            color: "text-black",
            hover:
              "hover:shadow-yellow hover:shadow-[9px_9px_0_0_rgba(0,0,0,1)] transition-shadow",
          },
          green: {
            backgroud: "bg-green-light",
            color: "text-black",
            hover:
              "hover:shadow-green hover:shadow-[9px_9px_0_0_rgba(0,0,0,1)] transition-shadow",
          },
          pink: {
            backgroud: "bg-pink-light",
            color: "text-black",
            hover:
              "hover:shadow-pink hover:shadow-[9px_9px_0_0_rgba(0,0,0,1)] transition-shadow",
          },
          orange: {
            backgroud: "bg-orange-light",
            color: "text-black",
            hover:
              "hover:shadow-orange hover:shadow-[9px_9px_0_0_rgba(0,0,0,1)] transition-shadow",
          },
        },
      },
    },
  },
  card: {
    defaultProps: {
      variant: "filled",
      color: "yellow",
      shadow: true,
      className: "",
    },
    valid: {
      variants: ["filled", "outlined"],
      colors: ["orange", "green", "yellow", "pink"],
    },
    styles: {
      base: {
        initial: {
          position: "relative",
          display: "flex",
          flexDirection: "flex-col",
          backgroundClip: "bg-clip-border",
          borderRadius: "rounded-md",
        },
        shadow: {
          boxShadow:
            "hover:shadow-[9px_9px_0_0_rgba(0,0,0,1)] transition-shadow",
        },
      },
      variants: {
        filled: {
          yellow: {
            backgroud: "bg-yellow-light",
            color: "text-black",
            shadow: "hover:shadow-yellow",
          },
          green: {
            backgroud: "bg-green-light",
            color: "text-black",
            shadow: "hover:shadow-green",
          },
          pink: {
            backgroud: "bg-pink-light",
            color: "text-black",
            shadow: "hover:shadow-pink",
          },
          orange: {
            backgroud: "bg-orange-light",
            color: "text-black",
            shadow: "hover:shadow-orange",
          },
        },
      },
    },
  },
};

export function Providers({ children }: { children: any }) {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}
