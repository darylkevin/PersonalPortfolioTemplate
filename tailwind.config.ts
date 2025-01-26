import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      dropShadow: {
        glow: "0 0 20px rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
