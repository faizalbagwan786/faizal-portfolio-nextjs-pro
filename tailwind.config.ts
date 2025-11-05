import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: { 900: "#121212", 950: "#0a0b17" },
        accent: { 600: "#4f46e5", 500: "#6366f1" }, // Indigo
        glow: { 400: "#22d3ee", 500: "#06b6d4" },   // Cyan/Teal
        mint: { 500: "#10b981" },                   // Emerald
        warm: { 500: "#ff8c00" }                    // Soft orange
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(2,6,23,.6)",
        glow: "0 0 0 1px rgba(99,102,241,.2), 0 10px 40px -10px rgba(99,102,241,.6)",
      },
      borderRadius: { xl2: "1.25rem" }
    },
  },
  plugins: [],
};
export default config;
