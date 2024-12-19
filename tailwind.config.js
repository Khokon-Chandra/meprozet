/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: false,
  jit: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        small: 300,     // Light
        medium: 500,    // Medium
        semibold: 600,  // SemiBold
        bold: 700,      // Bold
        black: 900,     // Black
      },

      colors: {
        primary: {
          500: '#2A6AB6',
          600: '#1b4d89'
        },
        success: {
          600: '#369A1E',
          500: '#3FB039',
          400: '#4EB56A',
        },
        danger: {
          500: '#F14343',
          400: '#F3691B',
          300: '#F3831B'
        },
        info: '#3B61E8',
        dark: '#222325',
        gray: {
          light: '#DADADA',
        }

      }
    },
  },
  plugins: [],
}