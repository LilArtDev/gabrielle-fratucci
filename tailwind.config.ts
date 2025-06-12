import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "deep-aubergine": "var(--deep-aubergine)",
        bordeaux: "var(--bordeaux)",
        "dusty-rose": "var(--dusty-rose)",
        "slate-gray": "var(--slate-gray)",
        champagne: "var(--champagne)",
      },
    },
  },
  plugins: [],
};

export default config;
