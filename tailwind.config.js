module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      inset: {
        18: "77px",
        22: "90px",
        34: "140px",
      },
      padding: {
        34: "149px",
      },
      maxWidth: {
        12: "200px",
      },
    },
  },
  plugins: [],
};
