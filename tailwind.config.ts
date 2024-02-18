import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': 'hsl(0, 0%, 20%)',
        'dark-grey': 'hsl(0, 0%, 12%)',
        'off-black': 'hsl(0, 0%, 8%)',
        'green': 'hsl(75, 94%, 57%)',
      },
      fontFamily: {
        'inter': 'var(--font-inter)',
      }
    },
  },
  plugins: [],
};
export default config;
