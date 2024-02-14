/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#32375C',
        'secondary': '#222222',
        'gray': '#D3D3D3',
        'offwhite': '#7A7A7A',
      },
      fontFamily: {
        'inter': ['Inter'],
      },
    },
  },
  plugins: [],
}

