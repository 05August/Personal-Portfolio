import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ["Space Mono", ...defaultTheme.fontFamily.mono],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "terminal-green": "#01f53f",
      },
    },
  },
  plugins: [],
};
export default config;
