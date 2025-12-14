import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          gold: "#F7C17C",
          purple: "#A66CFF",
          blue: "#6EC3F4",
          ocean: "#004B82",
          dark: "#0B0B0F",
          light: "#F5F7FA"
        }
      },

      backgroundImage: {
        "grad-gold": "linear-gradient(90deg, #F7C17C 0%, #A66CFF 100%)",
        "grad-blue": "linear-gradient(90deg, #6EC3F4 0%, #A66CFF 100%)",
        "radial-premium":
          "radial-gradient(circle at center, rgba(166,108,255,0.25), transparent 70%)"
      },

      boxShadow: {
        glow: "0 0 30px rgba(166,108,255,0.6)",
        soft: "0 0 20px rgba(255,255,255,0.15)"
      },

      animation: {
        "slow-spin": "spin 12s linear infinite",
        "float": "float 6s ease-in-out infinite"
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
