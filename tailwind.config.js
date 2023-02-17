/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#B7C6C1",
        black: "rgba(0, 0, 0)",
        white: "rgba(255, 255, 255)",
        green: "rgba(236, 253, 245,1)",
        bg: "#F3F3F3",
        BGyellow: "#FFA500",
        card1: "#EAE9E7",
        card2: "#FAF3E9",
        card3: "#EBF0F3",
        card4: "#A9C5D1",
        card5: "#A8C9D0",
        card6: "#B7B17D",
        card7: "#F2F2F2",
        card8: "#E5E5E5",
        bisque: "#FEE3C3",
        silver: "#ADAAAB",
        platinum: "#E4E4E4",
        cultured: "#F6F6F6",
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
