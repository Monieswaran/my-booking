import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-text": "var(--color-primary-text)",

        bg: "var(--color-bg)",
        card: "var(--color-card)",
        surface: "var(--color-surface)",

        text: "var(--color-text)",
        muted: "var(--color-muted)",

        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
        "accent-soft": "var(--color-accent-soft)",
        "accent-text": "var(--color-accent-text)",

        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",

        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
