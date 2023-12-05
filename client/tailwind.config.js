/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'Arial'],
      'serif': ['ui-serif', 'Arial'],
      'mono': ['ui-monospace', 'Arial'],
      'display': ['Arial'],
      'body': ['"Arial"'],
    }
  },
  plugins: [],
}

