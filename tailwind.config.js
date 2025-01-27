/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinIn: "spinIn 1s ease-in-out forwards",
        fadeIn: "fadeIn 1.5s ease-in-out",
        silverTrace: "silverTrace 2s ease-in-out infinite",
      },
      keyframes: {
        spinIn: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "100%": { transform: "scale(1) rotate(360deg)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        silverTrace: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
