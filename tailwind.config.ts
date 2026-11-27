
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        durozen: {
          50: "#fff1f2",   // soft rose tint
          100: "#ffe4e6",  // light crimson badge
          200: "#fecdd3",  // gentle rose border
          300: "#fda4af",
          400: "#fb7185",
          500: "#e11d48",  // signature Durozen Red ('D' circle)
          600: "#dc2626",  // primary brand action & hover (#dc2626)
          700: "#b91c1c",  // deep rich crimson
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        durozenRed: {
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626", // 'D' circle
          700: "#b91c1c",
        },
        durozenYellow: {
          50: "#fefce8",
          100: "#fef9c3",
          400: "#facc15",
          500: "#eab308", // 'UR' circle
          600: "#ca8a04",
        },
        durozenGreen: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a", // 'OZ' circle
          700: "#15803d",
        },
        durozenBlue: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb", // 'EN' circle
          700: "#1d4ed8",
        },
        charcoal: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
        card: "0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 20px 40px -10px rgba(37, 99, 235, 0.12), 0 0 0 1px rgba(37, 99, 235, 0.25)",
        glow: "0 0 35px -5px rgba(37, 99, 235, 0.25)",
        "glow-lg": "0 0 60px -10px rgba(37, 99, 235, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(0.5deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        gradientX: {
          "0%, 100%": { "background-size": "200% 200%", "background-position": "left center" },
          "50%": { "background-size": "200% 200%", "background-position": "right center" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-x": "gradientX 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
