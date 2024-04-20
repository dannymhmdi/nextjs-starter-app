/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './public/index.html',
    // "./pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{html,js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
    // "./src/**/*.{html,js,ts,jsx,tsx,mdx}"
    './src/**/*.{js,ts,jsx,tsx}', 
    // './src/components/**/*.{js,ts,jsx,tsx}', 
    // './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'inherit':'inherit',
      'bg': '#0d0c22',
      'bgSoft': '#2d2b42',
      'text': '#fff',
      'textSoft': '#e5e5e5',
      'light-blue': '#3673fd',
      'blue':'rgb(7,7,67)',
      'black':'#000',
      'white':'#fff',
      'green-600':'#16a34a',
      'rose-600':'#e11d48',
      'purple':'#663399',
      'teal-500':'#06b6d4',
      'violet-500':'#8b5cf6',
      'Purple-300':'#d8b4fe',
      'background-gray':'rgba(120, 120, 120, 0.5)'
    },
  },
  plugins: [],
}

