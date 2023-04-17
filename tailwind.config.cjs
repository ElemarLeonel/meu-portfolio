/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,tsx,jsx}", "./public/index.html"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "gray-50": "#FAFAFA",
          "gray-300": "#D4D4D4",
          "gray-400": "#9CA3AF",
          "gray-600": "#4B5563",
          "gray-700": "#374151",
          "primary": "#031D44",
          "secondary": "#DAB785",
          "accent": "#FEFEFE",
          "neutral": "#D3D3D3",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      cursive: ['Righteous', 'cursive']
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
