import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#071B2C",
          dark: "#061321",
          900: "#071B2C",
          800: "#0A243A",
          700: "#102A3A",
        },
        cyan: {
          brand: "#00A6CE",
          electric: "#12C8E8",
          DEFAULT: "#00A6CE",
          50: "#F0FAFD",
          100: "#DDF7FC",
          200: "#B6F0F9",
          300: "#7EE3F4",
          400: "#12C8E8",
          500: "#00A6CE",
          600: "#0087AB",
          700: "#026D8B",
        },
        ice: {
          DEFAULT: "#DDF7FC",
          soft: "#DDF7FC",
          light: "#F0FAFD",
        },
        surface: {
          pure: "#FFFFFF",
          soft: "#F8FBFD",
          light: "#F4F8FA",
          subtle: "#EEF3F6",
          border: "#E2EBF0",
        },
        slate: {
          secondary: "#647887",
          muted: "#8295A3",
        },
        text: {
          dark: "#102A3A",
          muted: "#647887",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(7, 27, 44, 0.04), 0 1px 2px -1px rgba(7, 27, 44, 0.04)",
        card: "0 4px 20px -2px rgba(7, 27, 44, 0.05), 0 2px 6px -1px rgba(7, 27, 44, 0.03)",
        elevated: "0 20px 40px -15px rgba(7, 27, 44, 0.08)",
        cyan: "0 4px 24px -2px rgba(0, 166, 206, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

