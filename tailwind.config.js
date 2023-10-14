/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "'Rancho', cursive",
        secondary: "'Raleway', sans-serif",
      },
      colors: {
        primary: "#331A15",
        secondary: "#E3B577",
        "secondary-shadow": "#D2B48C",
        heading: "#1B1A1A",
        text: "#5C5B5B",
        bgGray: "#ECEAE3",
        bgGrayOverlay: "rgba(236, 234, 227, 0.6)",
      },
    },
  },
  plugins: [],
};
