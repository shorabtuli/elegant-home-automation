import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f6f1",
        ink: "#171717",
        mist: "#edf1f2",
        stoneglass: "#d8dedf",
        brass: "#b8945d",
        copper: "#c9792b",
        cedar: "#31564c",
        clay: "#9e6f55"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(23, 23, 23, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
