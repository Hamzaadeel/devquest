import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Custom Animations
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-in": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
        "slide-in-delay": "slide-in 0.6s ease-out 0.2s both",
        "slide-in-delay-2": "slide-in 0.6s ease-out 0.4s both",
        "slide-in-right": "slide-in-right 0.6s ease-out",
      },
      // Custom Colors (optional - for your brand)
      colors: {
        "devquest-blue": {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        "devquest-purple": {
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
      },
      // Custom Gradients
      backgroundImage: {
        "hero-blue": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "hero-emerald": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "hero-violet": "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
