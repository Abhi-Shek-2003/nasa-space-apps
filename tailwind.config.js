/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lavender: "#ece5f4",
        black: "#000",
        lightgray: "#d6c9c9",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0.69)",
        },
        tomato: "#ff3a3a",
        darkslategray: {
          "100": "#3b5c66",
          "200": "rgba(47, 46, 65, 0.53)",
        },
        darkseagreen: "#8cd297",
        maroon: "rgba(88, 27, 27, 0)",
        crimson: "#d31414",
        gray: {
          "100": "#2b2a27",
          "200": "rgba(0, 0, 0, 0.37)",
          "300": "rgba(0, 0, 0, 0)",
          "400": "#211a1a",
        },
        green: "#1ca31a",
        indigo: "#461478",
        seagreen: "#0c765c",
        saddlebrown: "#715911",
        darkolivegreen: "#053004",
        silver: "rgba(189, 200, 189, 0.37)",
        goldenrod: "#d2bc48",
        plum: "#946ca7",
        mediumseagreen: "#47a055",
        peru: "#d28a48",
        forestgreen: "#0b9832",
        indianred: "#dd5555",
        dimgray: {
          "100": "#776c6c",
          "200": "#615656",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "6xl": "25px",
        "8xs": "5px",
        "16xl": "35px",
        "36xl": "55px",
        "3xs": "10px",
        xl: "20px",
        "41xl": "60px",
        "11xl": "30px",
        "26xl": "45px",
      },
    },
    fontSize: {
      lgi: "19px",
      sm: "14px",
      "11xl": "30px",
      "3xl": "22px",
      xl: "20px",
      "6xl": "25px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
