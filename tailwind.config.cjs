/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,tsx,jsx}", "./public/index.html"],
  daisyui: {
    themes: [
      {
        mytheme: {
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
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
