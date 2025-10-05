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

        text: "var(--color-text)",
        muted: "var(--color-muted)",

        accent: "var(--color-accent)",

        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",

        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};

export default config;
