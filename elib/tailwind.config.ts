import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            50: '#fcf6f0',
            100: '#f7eadd',
            200: '#eed2ba',
            300: '#e3b28e',
            400: '#d78d60',
            500: '#ce7041',
            600: '#bf5a36',
            700: '#9f462f',
            800: '#803a2c',
            900: '#683226',
            950: '#381712',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
