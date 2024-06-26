import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "marquee-left": "marquee-left 25s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        "marquee-up": "marquee-up 25s linear infinite",
        "marquee-down": "marquee-down 25s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-up":{
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        "marquee-down":{
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#012d87",
        suppport: "#F2F6FF",
        borderCustom: "#DDE6F8",
        borderTextHeader: "#2A387F",
        featureHeader: "#494F6F",
        featureSubHeader: "#6D76A3",
        newBox: "#F2F6FF",
        placeholder: "#667085",
      },
      screens:{
        'mobile':{'max':'640px'},
        "desktop":{'max':'1080px'},
        "desktop-min":{'min':'1080px'}
      },
    },
  },
  plugins: [],
};
export default config;
