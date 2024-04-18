import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#540D6E",
      coral: "#EE4266",
      teal: "#3BCEAC",
      green: "#0EAD69",
      yellow: "#FFD23F",
    },
  },
  plugins: [],
};
export default config;
