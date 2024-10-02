/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      "xs": { "max": "576px" },
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px"
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(120deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05))',
      }
    },
  },
  plugins: [],
};
