import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/bg-vector.svg')",
      },
      backgroundSize: {
        "custom-small": "100% 300px", // For small screens
        "custom-medium": "100% 400px", // For medium screens
        "custom-large": "1400px 550px", // For large screens
      },
      backgroundPosition: {
        "custom-center": "center center", // Ensure the image is centered
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
