import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#0a0a0a",
          secondary: "#141414",
          tertiary: "#1c1c1c",
          "text-primary": "#f5f5f0",
          "text-secondary": "#b8b8b0",
          "text-muted": "#9ca3af",
        },
        light: {
          primary: "#faf7f2",
          secondary: "#f0ebe0",
          tertiary: "#e6dccd",
          "text-primary": "#1e1610",
          "text-secondary": "#5a4030",
          "text-muted": "#8b7558",
        },
        accent: "#e8e8e0",
        border: "#2a2a2a",
        hover: "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;
