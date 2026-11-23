import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          saffron: "#E05A1B", // Traditional Kanku/Saffron
          saffronDark: "#B83E0A",
          saffronLight: "#FFF4EE",
          gold: "#D4AF37", // Elegant gold
          goldDark: "#997A15",
          goldLight: "#FAF5E4",
          maroon: "#781414", // Deep sacred maroon
          maroonDark: "#4D0A0A",
          cream: "#FAF8F5",
          sand: "#F4ECE1",
          charcoal: "#1F2421",
        },
      },
      fontFamily: {
        gujarati: [
          '"Noto Sans Gujarati"',
          '"Shruti"',
          '"Gujarati MT"',
          'system-ui',
          'sans-serif',
        ],
        serifGujarati: [
          '"Rasa"',
          '"Noto Serif Gujarati"',
          'Georgia',
          'serif',
        ],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        card: "0 10px 30px -5px rgba(224, 90, 27, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;

