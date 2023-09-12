import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      "colors": {
        "accent": {
          "50": "#fbf2f7",
          "100": "#f7e5ee",
          "200": "#efcbdd",
          "300": "#e8b2cd",
          "400": "#e098bc",
          "500": "#d87eab",
          "600": "#ad6589",
          "700": "#824c67",
          "800": "#563244",
          "900": "#2b1922"
        }
      }
    },
  },
  plugins: [],
}
export default config
