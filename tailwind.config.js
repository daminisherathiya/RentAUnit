/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "clash-display": ["Clash Display", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      xxs: ["0.625rem", { lineHeight: "0.75rem" }], // 10px/12px
      xs: ["0.75rem", { lineHeight: "1rem" }], // 12px/16px
      sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px/20px
      base: ["1rem", { lineHeight: "1.5rem" }], // 16px/24px
      lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px/28px
      xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px/28px
      "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px/32px
      "3xl": ["2rem", { lineHeight: "2.375rem" }], // 32px/38px
      "4xl": ["2.4375rem", { lineHeight: "3rem" }], // 39px/48px
      "5xl": ["3.25rem", { lineHeight: "3.875rem" }], // 52px/62px
      "6xl": ["3.75rem", { lineHeight: "4.5rem" }], // 60px/72px
      "9xl": ["7.5rem", { lineHeight: "11.25rem" }], // 120px/180px
    },
    colors: {
      white: "#FFFFFF",
      primary: {
        DEFAULT: "#00094A",
        dark: "#0A1039",
        light: "#3C4C5A",
      },
      divider: "#D0E3EF",
      disabled: "#9EB2BE",
      secondary: "#D80043",
      paper: "#E4F0F8",
    },
    backgroundColor: {
      white: "#FFFFFF",
      paper: {
        DEFAULT: "#F2F7FA",
        light: "#F3F8FD",
        dark: "#E4F0F8",
      },
      secondary: "#D80043",
      primary: {
        DEFAULT: "#00094A",
        dark: "#0A1039",
      },
    },
    backgroundImage: {
      "red-gradient":
        "linear-gradient(90deg, rgba(216, 0, 67, 0.1) 0%, rgba(216, 0, 67, 0) 100%);",
    },
    ringColor: {
      white: "#FFFFFF",
      light: "#D0E3EF",
      primary: {
        dark: "#0A1039",
      },
    },
    dropShadow: {
      elevated: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    extend: {
      screens: {
        xs: "393px",
      },
      container: {
        screens: {
          "2xl": "1696px",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  safelist: [
    {
      pattern: /swiper-.*/,
    },
  ],
  plugins: [],
};
