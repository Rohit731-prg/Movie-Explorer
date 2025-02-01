/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mybg: "linear-gradient(#2bed92, #23d9d0)",
      },
    },
  },
  plugins: [],
}
