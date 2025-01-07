/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-text": "hsl(229, 25%, 31%)",
        "Score-text": "hsl(229, 64%, 46%)",
        "Header-outline": "hsl(217, 16%, 45%)",
      },
      backgroundImage: {
        "scissors-gradient":
          "linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "paper-gradient":
          "linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "rock-gradient":
          "linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        "background-gradient":
          "linear-gradient(to right, hsl(214, 47%, 23%),  hsl(237, 49%, 15%))",
      },
      screens: {
        mobile: "375px",
        desktop: "1366px",
      },
      fontFamily: {
        main: '"Barlow Semi Condensed", serif',
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
      boxShadow: {
        item: "inset 0px 6px 0px 0px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
