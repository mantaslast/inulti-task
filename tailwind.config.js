module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    /**
     * FONTS
     */
    fontFamily: {
      sans: ['"Helvetica Neue"'],
      'open-sans': ['open-sans']
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
      white: {
        DEFAULT: "#fff",
        secondary: "#f2f2f2",
        tertiary: "#e2e2e2",
      },
      black: "#000",
      gray: {
        900: "#2E2E2E",
        800: "#27272A",
        500: "#71717A",
        400: "#8C8C8F",
        300: "#D4D4D8",
      },
      cta: "#22C55E",
      error: "#FF5B00"
    },
    /**
     * BORDERS
     */
    borderWidth: {
      DEFAULT: "1px",
      sm: "1.15px",
    },
    borderRadius: {
      sm: "2px",
      md: "4px",
      lg: "4.59px",
    },
  },
  plugins: [],
};
