/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'smmm':'390px',
        'smm':'480px',
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg':'1024px',
        'xl':'1280px',
        'xll':'1480px',
        'sxl':'1110px'

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
