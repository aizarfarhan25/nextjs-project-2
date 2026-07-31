import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        space: {
          DEFAULT: "#000000",
          elevated: "#0a0a0a",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.04)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          DEFAULT: "#C9A84C",
          hover: "#E8D5A3",
          muted: "rgba(201, 168, 76, 0.12)",
        },
        status: {
          live: "#30D158",
        },
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--text-tertiary)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      fontSize: {
        "display-xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        float: "float 3s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
      keyframes: {
        "ping-large": {
          "75%,100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
