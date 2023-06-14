/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        buccaneer: {
          50: "#f2fbf4",
          100: "#d5f5dd",
          200: "#c3efce",
          300: "#94e1a9",
          400: "#5eca7b",
          500: "#38af59",
          600: "#299045",
          700: "#23723a",
          800: "#215a32",
          900: "#1c4b2b",
          950: "#0b2814",
        },
      },
    },
  },
  plugins: [],
};
