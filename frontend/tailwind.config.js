/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a1a',
        secondary: '#1a1a3e',
        accent: '#2d1b69',
        highlight: '#ffa500',
        purple: {
          900: '#1a0b2e',
          800: '#2d1b69',
          700: '#4a2c8f'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gaming-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }
    },
  },
  plugins: [],
}
