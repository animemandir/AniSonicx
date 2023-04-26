/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '320px',
      'lo-res-tablet': '480px',
      'tablet': '600px',
      'lo-res-laptop': '800px',
      'laptop': '1024px',
      'hi-res-laptop': '1280px'
    }
  },
  plugins: [],
}

