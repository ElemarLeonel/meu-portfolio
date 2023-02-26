/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: "class",
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
