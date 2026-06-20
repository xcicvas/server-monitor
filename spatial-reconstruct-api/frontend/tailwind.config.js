/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        space: {
          dark: '#0a0a0f',
          purple: '#1a0a2e',
          cyan: '#00d4ff',
          purple2: '#bf5af2',
        }
      }
    },
  },
  plugins: [],
}
