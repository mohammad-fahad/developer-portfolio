/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "4k": "1980px",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
      },
      colors: {
        violet: {
          50: "rgb(var(--accent-soft-rgb) / <alpha-value>)",
          100: "rgb(var(--accent-soft-rgb) / <alpha-value>)",
          200: "rgb(var(--accent-strong-rgb) / <alpha-value>)",
          300: "rgb(var(--accent-rgb) / <alpha-value>)",
          400: "rgb(var(--accent-rgb) / <alpha-value>)",
          500: "rgb(var(--accent-rgb) / <alpha-value>)",
          600: "rgb(var(--accent-button-rgb) / <alpha-value>)",
          700: "rgb(var(--accent-button-rgb) / <alpha-value>)",
          800: "rgb(var(--accent-button-rgb) / <alpha-value>)",
          900: "rgb(var(--accent-button-rgb) / <alpha-value>)",
        },
        red: {
          400: "rgb(var(--error-rgb) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },
    },
  },
  plugins: [],
};
