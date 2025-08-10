/** @type {import('tailwindcss').Config} */
// esline-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: { pizza: "#123456" },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
