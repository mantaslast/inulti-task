module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    /**
     * FONTS
     */
    fontFamily: {
      sans: ['"Helvetica Neue"'],
    },
    fontSize: {
      xl: ["20px", "24px"],
      lg: ["18px", "22px"],
      md: ["16px", "24px"],
      sm: ["14px", "19px"],
      xs: ["12px", "16px"],
    },
    /**
     * COLORS
     */
    colors: {
      "bg-primary": "#e5e7eb",
      "bg-secondary": "#f2f2f2",
      "bg-tertiary": "#e2e2e2",
      white: "#fff",
      gray: {
        900: "#2E2E2E",
        800: "#27272A",
        500: "#71717A",
        400: "#8C8C8F",
      },
      cta: "#22C55E",
    },
  },
  plugins: [],
};
